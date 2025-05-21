<script setup>
import { ref, onBeforeUnmount } from 'vue'
import HeroComp from "@/components/HeroComp.vue";

const sounds = [
    {
        name:"Main Title",
        audio:'/musics/main_title3.wav',
    },
    {
        name:"People Where Here",
        audio:'/musics/people_were_here.wav',
    },
    {
        name:"Cri",
        audio:'/musics/cri.wav',
    }
]

const currentAudio = ref(null)
const currentAudioSrc = ref(null)
const rotation = ref(-90)
let animationFrameId = null

function stopSound() {
  if (currentAudio.value) {
    currentAudio.value.pause()
    currentAudio.value.currentTime = 0
    currentAudio.value = null
    currentAudioSrc.value = null
    rotation.value = -90

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }
  }
}


function playSound(sound) {
  if (!sound) return

  if (currentAudio.value) {
    stopSound()
  }

  const audio = new Audio(sound.audio)
  currentAudio.value = audio
  currentAudioSrc.value = sound.name

  const updateRotation = () => {
    if (!audio.paused) {
      const percent = audio.currentTime / audio.duration
      rotation.value = -80 + (30 * percent) // -80 to -50
      animationFrameId = requestAnimationFrame(updateRotation)
    }
  }

  audio.addEventListener('ended', () => {
    currentAudio.value = null
    currentAudioSrc.value = null
    rotation.value = -90
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
  })

  audio.volume = 1
  audio.play().then(() => {
    animationFrameId = requestAnimationFrame(updateRotation)
  })
}

onBeforeUnmount(() => {
  stopSound()
})

</script>

<template>
    <main>
    <HeroComp title="Juke-Box" text="Musiques et sons, éléments indispensables" />

    <div class="container jukebox">
        <h2 class="jokebox-title">Les Musiques d'ABYM</h2>
        
        <ul class="jokebox-liste">
            <li v-for="(sound, index) in sounds" :key="index">
                <button @click="playSound(sound)" class="music" :class="{ 'active': sound.name == currentAudioSrc  }">
                    <span>{{ sound.name }}</span>
                </button>
            </li>
        </ul>
    
        <div class="jukebox-disc">
            <div class="disc-buble">
                <div class="buble" :class="{ 'active': currentAudio && !currentAudio.paused  }">
                    <div class="line" :style="{ rotate: rotation + 'deg' }"></div>
                </div>
            </div>
            <div class="disc-infos">
                <h3>{{ currentAudioSrc || 'Sélectionnez une musique ou un son' }}</h3>
                <button class="button dark" :class="{ 'notactive': !currentAudio || currentAudio.paused  }" @click="stopSound">Stop</button>
            </div>
        </div>
    </div>
  </main>
</template>

<style>
.jukebox{
    height: 600px;
    margin-bottom: 50px;
    padding: 30px 10px 10px;
    border-radius: 20px;
    background: var(--c-primary-dark);
    overflow: hidden;
    display: grid;
    grid-template-areas: 
        'title'
        'liste'
        'disc';
    grid-template-rows: min-content 100px auto;
    gap: 20px;

    .jokebox-title{
        grid-area: title;
        width: 100%;
        text-align: center;
        margin: 0;
    }
    
    .jokebox-liste{
        grid-area: liste;
        background: var(--c-primary);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 5px;
        overflow-y: auto;
        overflow-x: hidden;
            
        li{
            position: relative;
            margin: 0 5px;
            
            &:not(:last-child)::after{
                content: '';
                width: 100%;
                height: 2px;
                position: absolute;
                bottom: -5px;
                left: 0;
                display: block;
                background: var(--c-primary-light);
            }
            
            .music{
                position: relative;
                display: block;
                width: 100%;
                padding: 10px;
                padding-left: 40px;
                font-weight: 600;
                text-align: left;
                border-radius: 5px;
                cursor: pointer;

                &::before{
                    content: '';
                    width: 32px;
                    aspect-ratio: 1px;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    translate: 0 -50%;
                }
                
                &:hover,
                &.active{
                    color: var(--c-primary-dark);
                    background: var(--c-primary-light);

                    &::before{
                        content: url("/icons/play.svg");
                    }
                }
            }
        }
    }
        
    .jukebox-disc{
        grid-area: disc;
        display: grid;
        grid-template-rows: auto min-content;
        align-items: center;
        gap: 20px;
        padding-bottom: 30px;

        .disc-buble{
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            
            .buble{
                position: relative;
                margin: auto;
                width: 200px;
                aspect-ratio: 1/1;
                background: var(--c-primary);
                border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
                
                &::after,
                &::before{
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    translate: -50% -50%;
                    width: 100%;
                    height: 100%;
                    border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
                }
                
                &::after{
                    scale: .15;
                    background: var(--c-primary-dark);
                }
                
                &::before{
                    scale: .5;
                    border: var(--c-primary-light) solid 2px;
                }
          
                &.active,   
                &.active::after,  
                &.active::before{   
                    animation: disc 4s linear infinite;
                }

                .line{
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: block;
                    height: 5px;
                    width: 70%;
                    border-radius: 5px;
                    transform-origin: right;
                    background: var(--c-primary-light);
                }
            }
        }

        .disc-infos{
            text-align: center;

            button{
                margin: auto;

                &.notactive{
                    cursor: not-allowed;
                    opacity: .25;

                    &:hover{
                        background: var(--c-primary-light);
                        color: var(--c-primary-dark);
                    }
                }
            }
        }
    }
}

@media (min-width: 1000px) {
    .jukebox{
        width: 75%;
        height: 600px;
        margin-top: 50px;
        padding: 30px 10px 10px;
        border-radius: 20px;
        grid-template-areas: 
            'title title'
            'liste disc';
        grid-template-columns: 33% auto;
        grid-template-rows: min-content auto;

        .jukebox-disc{

            .disc-buble{
                
                .buble{
                    width: 300px;
                }
            }
        }
    }
}

@keyframes disc {
  0%, 100% {
    border-radius:
      42% 56% 72% 28% / 42% 42% 56% 48%;
  }
  33% {
    border-radius:
      72% 28% 48% 48% / 28% 28% 72% 72%;
  }
  66% {
    border-radius:
      100% 56% 56% 100% / 100% 100% 56% 56%;
  }
}

</style>
