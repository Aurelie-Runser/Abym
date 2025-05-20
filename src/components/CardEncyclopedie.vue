<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import CrossIcon from "@/components/icons/CrossIcon.vue";
import Objet3D from "@/components/Objet3D.vue";

defineProps({
  donnees: Object
})

const isOpen = ref(false);
const modelLoaded = ref(false)

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

function toggleOverlay() {
  isOpen.value = !isOpen.value;

  if(isOpen.value)
    document.body.classList.add('no-scroll');
  else 
    document.body.classList.remove('no-scroll');
}

watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    modelLoaded.value = false
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
    @click="donnees.name && toggleOverlay()"
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
      :alt="donnees.name ?? 'silhouette d\'un spécimen'"
      loading="lazy"
    />
  </div>

  <teleport to="body">
    <transition name="fade-zoom">
      <div v-if="isOpen" class="modal-overlay" @click="isOpen = false" >
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
          </div>
          <div class="image" @click.stop>
            <transition name="fade">
              <img
                v-if="!modelLoaded"
                class="loading-image"
                :src="donnees.image"
                :alt="'Modèle 3D de ' + donnees.name"
                @click.stop
              />
            </transition>
            <Objet3D v-if="donnees.model"
                v-bind="{
                  model: donnees.model,
                  cameraPosition: donnees.cameraPosition,
                  amplitude: 1,
                }"
                @loaded="modelLoaded = true"
                :title="'Modèle 3D de ' + donnees.name"
              />
          </div>

          <button class="modal-button-close" @click="toggleOverlay()">
            <CrossIcon/> <span class="sr-only">Fermer la modale</span>
          </button>
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

    img{
      filter: brightness(.2);
    }

    &::after{
      z-index: 1;
      content: 'Classifié';
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      rotate: 20deg;
      font-family: var(--ff-title);
      font-size: var(--fs-xxl);
      color: #b31717;
      scale: 0;
      transition: all .1s ease-in-out;
    }

    &:hover::after{
      scale: 1;
    }

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
    overflow: auto;

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

  .image{
    grid-area: 1;
    width: 100%;
    height: 100%;
    position: relative;
    
    .loading-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      scale: 1.5;
      object-fit: contain;
      pointer-events: none;
      z-index: 10;
    }
  }

  .modal-button-close{
    position: absolute;
    z-index: 43;
    bottom: 20px;
    right: 20px;
    width: 50px;
    padding: 5px;
    aspect-ratio: 1/1;
    background: var(--c-white);
    fill: var(--c-primary);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    
    &:hover{
      background: var(--c-primary-light);
      fill: var(--c-primary-dark);
    }
  }
}

@media (min-width: 1000px) {
  .modal-card{
    position: relative;
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr;

    .image{
      grid-column: 2;
    }

    .modal-button-close{
      bottom: auto;
      top: 20px;
      right: 20px;
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

/* Animation de fondu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>