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

<script setup>
import { ref, onMounted, onBeforeUnmount, toRefs, defineEmits } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const props = defineProps({
  model: String,
  cameraPosition: Array,
  amplitude: Number,
});

const { model, cameraPosition, amplitude } = toRefs(props);
const emit = defineEmits(["loaded"]);

const canvasContainer = ref(null);
const canvas = ref(null);

let scene, camera, renderer, controls, animationId, mixer;
let time = 0;

const initScene = () => {
  scene = new THREE.Scene();

  const width = canvasContainer.value.clientWidth;
  const height = canvasContainer.value.clientHeight;

  camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  camera.position.set(...cameraPosition.value);

  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: false });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor("#02506C", 0);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 5; 
  controls.target.set(0, 0, 0);
  controls.update();

  const loader = new FBXLoader();
  loader.load(
    model.value,
    (fbx) => {
      const object = fbx;

      if (!object) {
        console.error("Le fichier FBX est vide ou invalide.");
        return;
      }

      object.scale.set(0.05, 0.05, 0.05);

      const box = new THREE.Box3().setFromObject(object);
      const center = box.getCenter(new THREE.Vector3());
      object.position.sub(center);

      // Pour jouer les animations du fbx
      mixer = new THREE.AnimationMixer(object);

      fbx.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
      });

      scene.add(object);

      // indique au parent que le model est chargé
      emit("loaded");
    },
    (xhr) => {
      if (xhr.lengthComputable) {
        console.log(`Chargement : ${Math.round((xhr.loaded / xhr.total) * 100)}%`);
      }
    },
    (err) => console.error("Erreur de chargement FBX :", err)
  );

  scene.add(new THREE.AmbientLight("#70C5D4", 0.9));
  const dirLight = new THREE.DirectionalLight("#e9e9e9", 0.9);
  dirLight.position.set(0, 1, 1);
  scene.add(dirLight);

  animate();
};

const animate = () => {
  camera.lookAt(0, 0, 0);

  // joue les animations du fbx s'il y en a
  if (mixer) {
    mixer.update(0.016); // ≈ 60fps
  }

  controls.update();

  renderer.render(scene, camera);
  animationId = requestAnimationFrame(animate);
};

const onResize = () => {
  if (!canvasContainer.value) return;
  const width = canvasContainer.value.clientWidth;
  const height = canvasContainer.value.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

onMounted(() => {
  initScene();
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener("resize", onResize);
});
</script>
