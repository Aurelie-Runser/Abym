<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

let lastScrollY = 0;

const heroParalaxe = () => {
  const clouds = document.querySelectorAll('.cloud')
  const montagnes = document.querySelectorAll('.montagne')

  const sun = document.getElementById('sun')
  
  const vague1 = document.getElementById('vague-1')
  const vague2 = document.getElementById('vague-2')
  const vague3 = document.getElementById('vague-3')
  const vague4 = document.getElementById('vague-4')

  clouds.forEach((cloud, i) => {
    const offset = lastScrollY * 0.2 * (1 + i * 0.1)
    cloud.setAttribute('transform', `translate(0, ${offset})`)
  })

  montagnes.forEach((montagne, i) => {
    const offset = lastScrollY * 0.1
    montagne.setAttribute('transform', `translate(0, ${offset})`)
  })

  sun.setAttribute('transform', `translate(0, ${lastScrollY * 0.2})`)

  vague1.setAttribute('transform', `translate(0, ${-lastScrollY * 0.4})`)
  vague2.setAttribute('transform', `translate(0, ${-lastScrollY * 0.3})`)
  vague3.setAttribute('transform', `translate(0, ${-lastScrollY * 0.2})`)
  vague4.setAttribute('transform', `translate(0, ${-lastScrollY * 0.1})`)

  requestAnimationFrame(heroParalaxe);
}


onMounted(() => {
  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
  });
  heroParalaxe();
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => {
    lastScrollY = window.scrollY;
  });
})

</script>

<template>
  <svg class="svgHero"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1920.2 1169.47"
  >
    <defs>
      <linearGradient
        id="Ciel"
        data-name="Ciel"
        x1="960.2"
        y1="-121.7"
        x2="960.2"
        y2="1585.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#76c4d1" />
        <stop offset="1" stop-color="#d9ecd8" />
      </linearGradient>
    </defs>
    <g id="arrière_plan">
      <rect class="cls-6" x=".2" width="1920" height="1080" />
      <path
        id="cloud-1"
        class="cloud cls-4"
        d="M840.5,500.9c89.68.35,179.35.69,269.03,1.04.03-4.5-.58-12.11-5.06-19.57-10.64-17.75-33.77-19.1-39.24-19.42-11.34-.66-20.98,2.14-27.98,5.21-1.38-9.73-9.01-17.16-18.07-18.07-7.47-.75-14.91,3.05-19.15,9.71.37-15.89-11.27-29.18-25.66-30.91-16.12-1.93-31.98,11.1-32.86,29.02,0,0-18.88-7.01-31.01-.81-12.13,6.2-24.27,16.99-21.03,24.27-2.96-.54-31.27-5.36-44.53,11.43-1.62,2.05-3.23,4.7-4.45,8.09Z"
      />
      <path
        id="cloud-2"
        class="cloud cls-4"
        d="M1276.59,393.19c12.59-2.47,22.57-11.85,35.75-13.11,6.43-.61,7.06-6.33,7.38-11.75.59-9.9-3.14-21.33,7.75-28.09,13.84-8.59,29.13-13.13,45.41-10.75,7.15,1.04,14.18,1.92,21.37,1.92,5.59,0,9.97-1.55,11.67-7.73,6.55-23.78,26.09-34.27,46.71-40.56,43.38-13.21,85.04-10.57,121.76,20.23,12.59,10.56,30.88,6.64,44.3,15.98,13.12,9.13,24.91,6.29,38.84-1.24,21.56-11.65,50.95-9.66,66.45-8.25,10,.91,41.12,5.62,73.64,43.17,5.88,8.11,12.73,20.64,13.32,36.21.22,5.93.37,14.03-4.82,18.92-3.02,2.85-8.21,3.49-17.6,3.49-92.46.05-184.92.02-277.38.02-73.97,0-147.93.03-221.9-.03-19.37-.01-19.79-.75-12.65-18.44Z"
      />
      <path
        id="cloud-3"
        class="cloud cls-4"
        d="M1589.4,709.95s-46.33-48.54-110.79-30.34-135.98,109.21-135.98,109.21v42.47h577.57v-77.88s-28.64-61.67-166.63-66.52c0,0-41.3-35.19-85.61-31.55-44.32,3.64-78.56,54.61-78.56,54.61Z"
      />
      <path
        id="cloud-4"
        class="cloud cls-4"
        d="M105.04,273.99c137.77.53,275.54,1.07,413.31,1.6-1.11-3.34-3.23-8.45-7.46-13.36-11.42-13.27-23.18-7.69-39.31-19.41-11.97-8.7-11.18-15.9-26.62-24.75-7.4-4.24-11.85-5.04-15.33-5.07-11.59-.13-19.85,8.07-22.31,10.71-2.12-14.95-13.83-26.37-27.76-27.76-11.48-1.15-22.91,4.69-29.41,14.91.57-24.41-17.32-44.83-39.42-47.48-24.76-2.97-49.13,17.05-50.48,44.58,0,0-29-10.77-47.64-1.24-18.64,9.53-37.29,26.1-32.31,37.29-4.54-.84-48.03-8.24-68.42,17.56-2.49,3.15-4.96,7.21-6.84,12.43Z"
      />
      <ellipse id="sun" class="cls-2" cx="742.02" cy="756.66" rx="232.99" ry="218.1" />
      <path
        id="cloud-5"
        class="cloud cls-4"
        d="M274.1,585.01s-13.82-40.57-41.45-32.24c0,0,3.95-62.67-41.67-55.68l-45.61,6.99s7.46-70.17-67.98-70.17c0,0-65.35,0-77.19,48.68v102.41h273.9Z"
      />
    </g>
    <g id="montagne">
      <path
        id="Roc_2"
        class="montagne cls-8"
        d="M.2,853.03h856.2s1.28-29.48-7.69-37.17c-8.97-7.69-66.65-52.55-73.06-66.65-6.41-14.1-23.07-37.17-34.61-41.02-11.54-3.85-70.5-12.82-94.85-20.51-24.35-7.69-82.04-30.76-97.42-33.33-15.38-2.56-32.05-24.35-66.65-43.58-34.61-19.23-123.05-46.14-123.05-46.14-15.65,5.38-37.25,11.54-63.46,15.13,0,0-33.71,4.61-136.5-2.31h0s-70.5-34.61-80.75-34.61S.2,578.73.2,578.73v274.3Z"
      />
      <path
        id="Roc"
        class="montagne cls-3"
        d="M.2,854.31c285.4-.43,570.8-.85,856.2-1.28-7.49-10.37-19.85-26.41-37.17-44.15-24.48-25.06-40.5-34.7-71.14-61.53-12.55-10.99-30.84-27.74-51.91-49.99-29.91-.67-59.82-1.33-89.73-2l-61.53-39.74h-52.55s-32.04-34.61-55.12-44.86-60.24-17.95-78.19-24.35c-17.94-6.41-39.74-17.95-39.74-17.95,0,0-14.1,12.82-30.76,11.54s-182.02-1.28-182.02-1.28c0,0-44.86-23.07-52.55-25.64-7.69-2.56-53.8,28.2-53.8,28.2v273.02Z"
      />
    </g>
    <g id="mer_premier_plan">
      <g id="Mer">
        <path
          id="vague-4"
          class="cls-5"
          d="M0,791.77s85.19-7.28,98.13-4.04,78.47,3.24,92.22,4.04,72,1.6,80.09-2.44,214.38.33,214.38.33c0,0,17.8-2.78,27.51-2.76s23.46-7.26,33.17-6.45,134.29,5.96,134.29,5.96c0,0,86.56-13.24,121.35-10s195.78,7.76,195.78,7.76c0,0,38.02-12.82,93.03-8.27,55.01,4.55,95.46,17.5,132.67,11.84s97.08-16.99,111.64-18.61,210.34,18.61,235.42,16.99,101.93,10.27,168.27-5.38,123.01-31.83,182.05-21.31v410.06s-1920,0-1920,0v-377.7Z"
        />
        <path
          id="vague-3"
          class="cls-3"
          d="M0,829.79s196.02-5.66,234.85-14.56c0,0,33.98,9.71,52.58,7.28s63.1-14.56,88.99-12.13,232.99,21.84,279.1,23.46,191.73,13.75,313.89,0c122.16-13.75,218.43-23.78,218.43-23.78,0,0,30.74,5.98,75.24,9.22,44.49,3.24,118.92-9.22,118.92-9.22,0,0,127.01,16.5,217.62,23.78,90.61,7.28,320.38,21.03,320.38,21.03v314.6H0v-339.68Z"
        />
        <path
          id="vague-2"
          class="cls-7"
          d="M0,862.15s56.88,16.99,113.5,18.61,188.49-8.09,226.52-4.04,91.42,20.22,160.99,16.99,213.57-45.3,266.16-40.45,138.34,23.46,234.61,30.74,271.82-12.13,323.6-1.62,153.71,29.12,257.26,23.46c103.55-5.66,246.79-40.45,337.37-35.6v299.23H0v-307.32Z"
        />
        <g id="vague-1">
          <path
            class="cls-1"
            d="M1920,977.59v191.88H0v-241.6s73.55,9.88,166.92,10.88c22.24.24,45.6-.03,69.36-1.06,38.21-1.63,77.45-5.23,114.71-11.84,71.86-12.74,161.03-2.41,247.76,9.59,103.61,14.36,203.74,31.11,266.71,13.77,39.62-10.91,82.66-19.15,122.12-25.28,75.77-11.75,138.37-15.69,138.37-15.69,0,0,5.67,4.92,19.41,11.89,29.96,15.19,98.29,40.15,229.76,45,191.73,7.08,266.16-.26,350.3-28.45,0,0,69.42,63,194.58,40.89Z"
          />
          <rect class="cls-1" x="0" y="1169.5" width="100%" height="100%" />
        </g>
      </g>
    </g>
  </svg>
</template>

<style scoped>

.svgHero{
  border: transparent solid 1px;
}
.cls-1 {
  fill: #02506C;
}

.cls-2 {
  fill: #fdffe7;
}

.cls-3 {
  fill: #2da6ae;
}

.cls-4 {
  fill: #fff9ed;
}

.cls-5 {
  fill: #55d7d9;

}

.cls-6 {
  fill: url(#Ciel);
}

.cls-7 {
  fill: #017185;
}

.cls-8 {
  fill: #61c0c2;
}

#vague-1{
  animation: waveAnim 3s ease-in-out infinite;
}

#vague-2{
  animation: waveAnim 5s ease-in-out infinite;
}

#vague-3{
  animation: waveAnim 6s ease-in-out infinite reverse;
}

#vague-4{
  animation: waveAnim 4s ease-in-out alternate infinite;
}

#cloud-1{
  animation: cloudAnim 16s ease-in-out alternate infinite;
}

#cloud-2{
  animation: cloudAnim 10s ease-in-out alternate-reverse infinite;
}

#cloud-3{
  animation: cloudAnim 5s ease-in-out alternate infinite;
}

#cloud-4{
  animation: cloudAnim 8s ease-in-out alternate-reverse infinite;
}

#cloud-5{
  animation: cloudAnim 14s ease-in-out alternate infinite;
}

@keyframes waveAnim {
  0% {
    translate: 0 5px;
  }
  50% {
    translate: 0 15px;
  }
  100% {
    translate: 0 5px;
  }
}

@keyframes cloudAnim {
  from {
    translate: -15px 0;
  }
  to {
    translate: 15px 0;
  }
}
</style>
