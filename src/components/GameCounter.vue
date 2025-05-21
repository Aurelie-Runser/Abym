<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

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
  <div>
    <p v-if="!isFinished">Jeu disponible dans
      <br/>
      <span class="countdown-span"><strong>{{ format(countdown.days) }}</strong> jours,</span> <span class="countdown-span"><strong>{{ format(countdown.hours) }}</strong> heures,</span> <span class="countdown-span"><strong>{{ format(countdown.minutes) }}</strong> minutes,</span> <span class="countdown-span"><strong>{{ format(countdown.seconds) }}</strong> secondes</span>
    </p>
    <!-- <a v-else href="https://abymgame.itch.io/abym" target="_blank" rel="noopener noreferrer" class="button">
      Télécharger le jeu
    </a> -->
    <p v-else>Jeu bientôt disponible...</p>
  </div>
</template>

<style scoped>

.countdown-span{
  display: inline-block;
  width: fit-content;
}
</style>