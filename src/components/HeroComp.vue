<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LogoBig from "@/components/icons/LogoBig.vue";
import SVGHero from "@/components/SVGHero.vue";

defineProps({
  title: String,
  text: String,
  isHome: Boolean,
  isError: Boolean,
});

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

let intervalId
const isFinished = ref(false)

const updateCountdown = () => {
  const now = new Date()
  const targetDate = new Date(now.getFullYear(), 4, 20, 0, 0, 0)

  const diff = targetDate - now

  if (diff <= 0) {
    isFinished.value = true
    clearInterval(intervalId)
    return
  }

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / (3600 * 24))
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  countdown.value = { days, hours, minutes, seconds }
}

const format = (n) => String(n).padStart(2, '0')

onMounted(() => {
  updateCountdown()
  intervalId = setInterval(updateCountdown, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <section class="hero" :class="{ 'hero-home':isHome, 'hero-error': isError }">
    <div class="logo">
      <LogoBig />
    </div>
    <h1>{{ title }}</h1>
    <p v-if="text">{{ text }}</p>

    <div v-if="isHome" class="hero-countdown">
      <p v-if="!isFinished">Disponible dans
        <br/>
        <span class="countdown-span"><strong>{{ format(countdown.days) }}</strong> jours,</span> <span class="countdown-span"><strong>{{ format(countdown.hours) }}</strong> heures,</span> <span class="countdown-span"><strong>{{ format(countdown.minutes) }}</strong> minutes,</span> <span class="countdown-span"><strong>{{ format(countdown.seconds) }}</strong> secondes</span>
      </p>
      <a href="https://abymgame.itch.io/abym" target="_blank" rel="noopener noreferrer" class="button" v-else>
        Télécharger le jeu
      </a>
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

  .countdown-span{
    display: inline-block;
    width: fit-content;
  }
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

.hero-bg {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-bg svg {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  min-height: 100%;
  min-width: 100%;
}
</style>
