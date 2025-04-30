<script setup>
defineProps({
  isFish: Boolean,
  donnees: Array
});
</script>

<template>
  <div class="slider container" :class="[{ 'slider-fourth': donnees[3], 'is-fish': isFish }]">
    <div class="card card-first">
      <div class="card-content">
        <span class="name">Nom : <strong>{{ donnees[0].name }}</strong></span>
        <span class="biome">Biome : <strong>{{ donnees[0].biome }}</strong></span>
        <span v-if="donnees[0].degats" class="danger">Dangerosité : <strong>{{ donnees[0].degats }}</strong></span>
      </div>
      <img :src="donnees[0].image" alt=""/>
    </div>
    <div class="card card-second card-unknown">
      <div class="card-content">
        <span class="name">Nom : <strong>Inconnu</strong></span>
        <span class="biome">Biome : <strong>Inconnu</strong></span>
        <span v-if="donnees[0].degats" class="danger">Dangerosité : <strong>Inconnu</strong></span>
      </div>
      <img :src="donnees[1].image" alt=""/>
    </div>
    <div class="card card-third card-unknown">
      <div class="card-content">
        <span class="name">Nom : <strong>Inconnu</strong></span>
        <span class="biome">Biome : <strong>Inconnu</strong></span>
        <span v-if="donnees[0].degats" class="danger">Dangerosité : <strong>Inconnu</strong></span>
      </div>
      <img :src="donnees[2].image" alt=""/>
    </div>
    <div v-if="donnees[3]" class="card card-fourth card-unknown">
      <div class="card-content">
        <span class="name">Nom : <strong>Inconnu</strong></span>
        <span class="biome">Biome : <strong>Inconnu</strong></span>
        <span v-if="donnees[0].degats" class="danger">Dangerosité : <strong>Inconnu</strong></span>
      </div>
      <img :src="donnees[3].image" alt=""/>
    </div>
  </div>
</template>

<style>
.slider {
  margin-top: 100px;
  display: grid;
  grid-template-areas:
    "first"
    "second"
    "third";
  gap: 50px;

  &.slider-fourth{
    grid-template-areas:
    "first"
    "second"
    "third"
    "fourth";
  }

  &.is-fish{
    .card {
      img{
        animation: floating 2s ease-in-out alternate infinite;
      }
    }
  }
}

@media (min-width: 600px) {
  .slider {
    grid-template-areas:
      "first first"
      "second third";

    &.slider-fourth{
      grid-template-areas:
      "first first first"
      "second third fourth";
    }
  }
}

@media (min-width: 1000px) {
  .slider {
    grid-template-areas: "first second third";

    &.slider-fourth{
      grid-template-areas: "first second third fourth";
    }
  }
}

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

.card-first {
  grid-area: first;
}

.card-second {
  grid-area: second;
}

.card-third {
  grid-area: third;
}

.card-fourth {
  grid-area: fourth;
}

@keyframes floating{
  from{
    translate: 0 -5px;
  }
  to{
    translate: 0 5px;
  }
}
</style>
