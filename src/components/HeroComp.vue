<script setup>
import LogoBig from "@/components/icons/LogoBig.vue";
import SVGHero from "@/components/SVGHero.vue";
import GameCounter from "@/components/GameCounter.vue";

defineProps({
  title: String,
  text: String,
  isHome: Boolean,
  isError: Boolean,
});
</script>

<template>
  <section class="hero" :class="{ 'hero-home':isHome, 'hero-error': isError }">
    <div class="logo">
      <LogoBig />
    </div>
    <h1>{{ title }}</h1>
    <p v-if="text">{{ text }}</p>

    <div v-if="isHome" class="hero-countdown">
      <GameCounter/>
    </div>

    <RouterLink v-if="isError" to="/" class="button">Retour Accueil</RouterLink>

    <div class="hero-bg">
      <SVGHero />
    </div>
  </section>
</template>

<style>
.hero {
  position: relative;
  width: 100%;
  height: 70dvh;
  min-height: 570px;
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 20px;
}

.hero * {
  position: relative;
  z-index: 2;
}

.hero-error {
  height: 100dvh;
}

.hero-home {
  height: 100dvh;
}

.hero .logo {
  margin: auto;
  width: 50vw;
  min-width: 270px;
  max-width: 350px;
}

.hero-home .logo {
  width: 60vw;
  min-width: 270px;
  max-width: 500px;
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

.hero .button {
  margin: 20px auto 0;
}

.hero .hero-bg {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero .hero-bg svg {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  min-height: 100%;
  min-width: 100%;
}

.hero .hero-bg svg{
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -55%;
  min-height: 100%;
  min-width: 100%;
}
.hero-home .hero-bg svg{
  translate: -50% -50%;
}
</style>
