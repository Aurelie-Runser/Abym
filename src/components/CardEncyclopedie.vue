<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

defineProps({
  donnees: Object
})

const isOpen = ref(false);

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    @click="donnees.name && (isOpen = true)"
    class="card"
    :class="[{ 'card-unknown': !donnees.name }]"
  >
    <div class="card-content">
      <span class="name">Nom : <strong>{{ donnees.name ?? 'Inconnu' }}</strong></span>
      <span class="biome">Habitat : <strong>{{ donnees.biome ?? 'Inconnu' }}</strong></span>
      <span v-if="donnees.degats" class="danger">Dangerosité : <strong>{{ donnees.degats }}</strong></span>
    </div>
    <img
      :src="donnees.image"
      :alt="donnees.name ? 'photo d\'un spécimen' : 'silhouette d\'un spécimen'"
    />
  </div>

  <teleport to="body">
    <transition name="fade-zoom">
      <div v-if="isOpen" class="modal-overlay" @click.self="isOpen = false">
        <div class="modal-card">
          <div class="card-content">
            <p class="name">{{ donnees.name }} <span>({{ donnees.famille}})</span></p>
            <p class="alot">
              <span v-if="donnees.categorie">Categorie : <strong>{{ donnees.categorie }}</strong></span>
              <span v-if="donnees.attitude">Dangerosité : <strong>{{ donnees.attitude }}</strong></span>
              <span>Habitat : <strong>{{ donnees.biome }}</strong></span>
            </p>
            <p class="mesures">Mesures : <strong>{{ donnees.mesures }}</strong></p>
            <p class="description">{{ donnees.description }}</p>
            <p></p>
          </div>
          <img :src="donnees.image" :alt="'Photo de ' + donnees.name" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.card {
  aspect-ratio: 16/9;
  border-radius: 15px;
  background: linear-gradient(-30deg, #e9e9e910, #e9e9e940);
  cursor: pointer;
  transition: transform 0.4s ease;
  position: relative;
  overflow: hidden;

  .card-content {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .name{
      font-family: var(--ff-title);
      font-size: var(--fs-lg);
    }
  }
  
  &.card-unknown {
    cursor: not-allowed;

    strong {
      color: #b31717;
      font-style: italic;
    }
  }
}

.modal-overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 40;
  padding-top: 60px;
  background: linear-gradient(-30deg, #02506C60, #02506C90);
  backdrop-filter: blur(15px);
}

.modal-card {
  overflow: hidden;
  z-index: 42;
  width: 90%;
  max-width: var(--mw);
  height: 90%;
  padding: 2%;
  transition: all 0.4s ease;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40% 60%;

  .card-content{
    overflow: scroll;

    .name{
      font-family: var(--ff-title);
      font-size: var(--fs-xl);
      color: var(--c-primary-light);
      margin-bottom: 10px;

      span{
        color: var(--c-white);
      }
    }

    .alot{
      display: flex;
      flex-wrap: wrap;
      gap: 10px 20px;
    }
  }

  img{
    grid-area: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: floating 2s ease-in-out alternate infinite;
  }
}

@media (min-width: 1000px) {
  .modal-card{
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr;

    img{
      grid-column: 2;
    }
  }
}

.fade-zoom-enter-active, .fade-zoom-leave-active {
  transition: all 0.4s ease;
}
.fade-zoom-enter-from, .fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

</style>