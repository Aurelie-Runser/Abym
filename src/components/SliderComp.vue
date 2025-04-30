<script setup>
import cardEncyclopedie from "@/components/cardEncyclopedie.vue";

defineProps({
  isFish: Boolean,
  donnees: Array
});
</script>

<template>
  <div class="slider container" :class="[{ 'slider-fourth': donnees[3], 'is-fish': isFish }]">
    <div v-for="donnee in donnees" :key="donnee.index">
      <cardEncyclopedie :donnees="donnee"/>
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

  div:first-child{
    grid-area: first;
  }

  div:nth-child(2){
    grid-area: second;
  }

  div:nth-child(3){
    grid-area: third;
  }

  div:nth-child(4){
    grid-area: fourth;
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

@keyframes floating{
  from{
    translate: 0 -5px;
  }
  to{
    translate: 0 5px;
  }
}
</style>
