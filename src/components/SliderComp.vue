<script setup>
import CardEncyclopedie from "@/components/CardEncyclopedie.vue";

defineProps({
  isFish: Boolean,
  donnees: Array
});
</script>

<template>
  <div class="slider container" :class="[{ 'slider-fourth': donnees[3], 'is-fish': isFish }]">
    <div v-for="donnee in donnees" :key="donnee.index">
      <CardEncyclopedie :donnees="donnee"/>
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
    div:first-child{
      img{
        animation: floating 2s ease-in-out alternate infinite;
      }
    }
    div:nth-child(2){
      img{
        animation: floating 4s ease-in-out alternate infinite;
      }
    }
    div:nth-child(3){
      img{
        animation: floating 3s ease-in-out alternate-reverse infinite;
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
</style>
