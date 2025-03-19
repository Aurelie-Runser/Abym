<template>
  <div class="slider container">
    <div class="card card-first">
      <div class="">
      </div>
    </div>
    <div class="card card-second">
      <span class="card-overlay">Classifier</span>
      <div class="">
      </div>
    </div>
    <div class="card card-third">
      <span class="card-overlay">Classifier</span>
      <div class="">
      </div>
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
}

@media (min-width: 600px) {
  .slider {
    grid-template-areas:
      "first first"
      "second third";
  }
}

@media (min-width: 1000px) {
  .slider {
    grid-template-areas: "first second third";
  }
}

.card {
  position: relative;
  aspect-ratio: 16/9;
  background: linear-gradient(-30deg, #e9e9e910, #e9e9e940);
  border-radius: 15px;
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

.card-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  rotate: 25deg;
  width: fit-content;
  font-family: var(--ff-title);
  font-size: var(--fs-xxl);
  color: var(--c-red)
}
</style>
