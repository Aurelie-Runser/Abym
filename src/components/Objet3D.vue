<template>
    <div class="canvas_container" ref="canvasContainer">
        <canvas ref="canvas"></canvas>
    </div>
</template>
  
<style>
.canvas_container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
  
canvas {
    display: block;
}
</style>
  
<script lang="ts" setup>
import {
    ref,
    toRefs,
    onMounted,
    onBeforeUnmount,
} from "vue";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

const props = defineProps({
  model: {
    type: String,
    required: true,
  },
  cameraPosition: {
    type: Array as PropType<[number, number, number]>,
    required: true,
  },
  amplitude: {
    type: Number,
    required: true,
  },
});

const proprietes = toRefs(props)

const canvasContainer = ref<HTMLCanvasElement | OffscreenCanvas | undefined>(null);
const canvas = ref<HTMLCanvasElement | OffscreenCanvas | undefined>(null);

let controls: OrbitControls;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let time: number = 0;
const animationId: null = null;

const initScene = () => {
    scene = new THREE.Scene();
    const width = canvasContainer.value!.clientWidth;
    const height = canvasContainer.value!.clientHeight;

    // Créer la caméra avec un champ de vision de 50
    camera = new THREE.PerspectiveCamera(50, width/height, 0.1, 1000);

    // Rendu WebGL
    renderer = new THREE.WebGLRenderer({ canvas: canvas.value });
    renderer.setSize(width, height);
    renderer.setClearColor('#02506C', 0);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;
    
    const loader = new GLTFLoader();
    loader.load(proprietes.model.value, (gltf) => {
        const model = gltf.scene;

        // Centrer le modèle
        const boundingBox = new THREE.Box3().setFromObject(model);
        const center = boundingBox.getCenter(new THREE.Vector3());
        model.position.sub(center);

        scene.add(model);

        camera.position.set(...proprietes.cameraPosition.value);
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
    }, onProgress, onError);

    // Ajoutez une lumière ambiante pour éclairer toute la scène
    const ambientLight = new THREE.AmbientLight('#70C5D4', 0.7);
    scene.add(ambientLight);

    // Ajoutez une lumière directionnelle pour simuler la lumière du soleil
    const directionalLight = new THREE.DirectionalLight('#e9e9e9', 0.7);
    directionalLight.position.set(0, 1, 1); // positionnez la lumière vers le haut et en avant
    scene.add(directionalLight);

    animate();
};

const animate = () => {
    // animation haut/bas
    time += 0.02; // Vitesse du mouvement

    // Applique un mouvement de haut en bas
    camera.position.y = Math.sin(time) * proprietes.amplitude.value;
    
    // Appel récursif pour continuer l'animation
    requestAnimationFrame(animate);

    // Rendu de la scène
    renderer.render(scene, camera);
};

  
const onProgress = function (data: ProgressEvent) {
    if (data.lengthComputable) {
      const percentComplete = (data.loaded / data.total) * 100;
      console.log(Math.round(percentComplete, 2) + "% téléchargé");
    }
};
  
const onError = function (data: ProgressEvent) {
    console.error(data);
};
  
onMounted(() => {
    initScene();
    animate();
});
  
onBeforeUnmount(() => {
    cancelAnimationFrame(animationId);
});
</script>