<script setup>
import { nextTick, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import HeaderMobilComp from "@/components/HeaderMobilComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";


const route = useRoute()

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 500)
  }
)
</script>

<template>
  <div id="app">
    <HeaderMobilComp class="header-mobil" />
    <HeaderComp class="header-pc" />

    <RouterView v-slot="{ Component }">
      <transition name="grow-out" mode="out-in">  
        <Component :is="Component"/>
      </transition>
    </RouterView>
    
    <FooterComp />
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
</style>