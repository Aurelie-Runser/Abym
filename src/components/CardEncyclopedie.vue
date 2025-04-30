<script setup>
defineProps({
  donnees: Array
});
</script>

<template>
  <div class="card" :class="[{ 'card-unknown': !donnees.name }, { ['card-' + donnees.index]: true }]">
    <div class="card-content">
      <span class="name">Nom : <strong>{{ donnees.name ?? 'Inconnu' }}</strong></span>
      <span class="biome">Biome : <strong>{{ donnees.biome ?? 'Inconnu' }}</strong></span>
      <span v-if="donnees.degats" class="danger">Dangerosité : <strong>{{ donnees.degats ?? 'Inconnu' }}</strong></span>
    </div>
    <img :src="donnees.image" :alt="donnees.name ? 'photo d\'un spécimen' : 'silhouette d\'un spécimen'"/>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  aspect-ratio: 16/9;
  background: linear-gradient(-30deg, #e9e9e910, #e9e9e940);
  border-radius: 15px;
  cursor: pointer;


  .card-content{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 10px;

    .name{
      font-family: var(--ff-title);
      font-size: var(--fs-lg);
    }
  }

  &.card-unknown{
    cursor: not-allowed;

    strong{
      color: #b31717;
      font-style: italic;
    }
  }
}

.card-1 {
  grid-area: first;
}

.card-2 {
  grid-area: second;
}

.card-3 {
  grid-area: third;
}

.card-4 {
  grid-area: fourth;
}
</style>