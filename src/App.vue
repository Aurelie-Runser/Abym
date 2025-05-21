<script setup>
import { nextTick, watch, ref, onMounted, onUnmounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { createBubbleFunction } from '@/utils/bubblesAnimation.js'
import HeaderMobilComp from "@/components/HeaderMobilComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";

const isPres = ref(localStorage.getItem('isPres') === 'true');

const route = useRoute()

// permet de jouer l'animation de fondu avant de changer de vue
watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 500)
  }
)

const runBubbleAnime = ref(false)
let bubbleInterval = null

const konamiCode = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a', 'Enter'
]
let keyBuffer = []

const handleKeydown = (event) => {
  keyBuffer.push(event.key)

  // Garde uniquement les dernières touches (max la longueur du code Konami)
  if (keyBuffer.length > konamiCode.length) {
    keyBuffer.shift()
  }

  // Vérifie si la séquence correspond
  if (JSON.stringify(keyBuffer) === JSON.stringify(konamiCode)) {
    triggerBubbleAnimation()
    keyBuffer = [] // réinitialise après détection
  }
}

function triggerBubbleAnimation() {
  if (runBubbleAnime.value) return // évite le doublon

  runBubbleAnime.value = true
  bubbleInterval = setInterval(createBubbleFunction, 50)

  // Stoppe l'animation après 5 secondes
  setTimeout(() => {
    clearInterval(bubbleInterval)
    bubbleInterval = null
    runBubbleAnime.value = false
  }, 5000)
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  clearInterval(bubbleInterval)
})


</script>

<template>
  <div id="bubble-zone">
    <HeaderMobilComp class="header-mobil" />
    <HeaderComp class="header-pc" />

    <RouterView v-slot="{ Component }">
      <transition name="grow-out" mode="out-in">  
        <Component :is="Component"/>
      </transition>
    </RouterView>
    
    <FooterComp />

    <img v-if="isPres" src="/qrcode.webp" alt="QRCode pour accéder au site" class="qr-code">
  </div>
</template>

<style scoped>
.header-pc{
  display: none;
}

main{
  will-change: transform, opacity;
}

@media (width >= 640px) {
  .header-mobil{
    display: none;
  }
  .header-pc{
    display: block;
  }
}

.grow-out-enter-from, .grow-out-leave-to {
  opacity: 0;
  scale: 1.05
}

.grow-out-enter-active, .grow-out-leave-active {
  transition: all 0.5s ease;
}

.qr-code{
  position: fixed;
  z-index: 30;
  bottom: 20px;
  right: 20px;
  width: 200px;
  height: auto;
}
</style>