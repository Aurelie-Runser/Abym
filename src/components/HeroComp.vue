<script setup lang="ts">
import LogoBig from "@/components/icons/LogoBig.vue"

defineProps<{
  title?: string;
  text?: string;
  isHome?: boolean;
  isError?: boolean;
}>();
</script>

<template>
  <section class="hero" :class="isHome || isError ? 'hero-home' : ''">
    <LogoBig />
    <h1>{{ title }}</h1>
    <p v-if="text">{{ text }}</p>
    <RouterLink v-if="isError" to="/" class="button">Retour Accueil</RouterLink>
  </section>
</template>

<style>
.hero {
  width: 100%;
  height: 60dvh;
  background: var(--c-primary-light);
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 20px;
}

.hero-home {
  height: 100dvh;
}

.hero svg {
  margin: auto;
  height: 100px;
  max-width: 75vw;
}

.hero-home svg {
  height: 150px;
}

.hero h1 {
  font-family: var(--ff-title);
  font-size: var(--fs-xl);
  color: var(--c-primary-dark);
  text-align: center;
  margin: 20px 0;
}

.hero p {
  max-width: 600px;
  margin: 0 auto;
  font-family: var(--ff-text);
  font-size: var(--fs-lg);
  font-weight: 500;
  color: var(--c-primary-dark);
  text-align: center;
}

.hero .button{
  margin: 20px auto 0;
}
</style>
