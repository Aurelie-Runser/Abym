<script setup>
defineProps({
  isFish: Boolean,
  cardFirst: String,
  cardSecond: String,
  cardThird: String,
  cardFourth: String,
});
</script>

<template>
  <div class="slider container" :class="[{ 'slider-fourth': cardFourth, 'is-fish': isFish }]">
    <div class="card card-first">
      <img :src="cardFirst" alt=""/>
    </div>
    <div class="card card-second">
      <span class="card-overlay">Classifié</span>
      <img :src="cardSecond" alt=""/>
    </div>
    <div class="card card-third">
      <span class="card-overlay">Classifié</span>
      <img :src="cardThird" alt=""/>
    </div>
    <div v-if="cardFourth" class="card card-fourth">
      <span class="card-overlay">Classifié</span>
      <img :src="cardFourth" alt=""/>
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

  &:has(.card-overlay){
    cursor: not-allowed;
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

.card-overlay {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  rotate: 25deg;
  width: fit-content;
  font-family: var(--ff-title);
  font-size: var(--fs-xxl);
  color: var(--c-red);
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
