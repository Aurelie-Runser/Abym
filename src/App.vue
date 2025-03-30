<script setup>
import { RouterView } from "vue-router";
import HeaderMobilComp from "@/components/HeaderMobilComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
</script>

<template>
  <HeaderMobilComp class="header-mobil" />
  <HeaderComp class="header-pc" />
  <RouterView />
  <FooterComp />
</template>

<style>
.header-pc{
  display: none;
}

@media (width >= 640px) {
  .header-mobil{
    display: none;
  }
  .header-pc{
    display: block;
  }
}

</style>