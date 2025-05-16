<script setup>
import InstaIcon from "@/components/icons/InstaIcon.vue";

defineProps({
  list: Array,
});
</script>

<template>
  <ul class="equipe-list">
    <li class="equipe-item" v-for="(membre, index) in list" :key="index">
      <img class="blob-image" :class="membre.blob" :src="membre.photo" :alt="`${membre.name}`" loading="lazy"/>
      <div class="membre-content">
        <p class="membre-name">{{ membre.name }}</p>
        <p class="membre-role">{{ membre.role }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.equipe-list{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 50px 2%;
  margin: 20px auto 40px;

  .equipe-item{
    display: block;
    max-width: 225px;
    width: 45%;

    .blob-image{
      display: block;
      width: 100%;
      height: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      background: var(--c-primary-light);
      
      &.blob-1{
          border-radius: 60% 40% 55% 45% / 35% 65% 60% 40%;

          &:hover{   
            animation: morph1 4s linear infinite;
          }
      }

      &.blob-2 {
        border-radius: 50% 50% 60% 40% / 70% 30% 50% 50%;
        
        &:hover{   
            animation: morph2 4s linear infinite;
        }
      }

      &.blob-3{
        border-radius: 35% 65% 45% 55% / 55% 45% 35% 65%;

        &:hover{   
          animation: morph3 4s linear infinite;
        }
      }

      &.blob-4{
        border-radius: 55% 45% 70% 30% / 30% 70% 60% 40%;

        &:hover{   
          animation: morph4 4s linear infinite;
        }
      }

      &.blob-5{
        border-radius: 58% 42% 36% 64% / 38% 62% 58% 42%;

        &:hover{   
          animation: morph5 4s linear infinite;
        }
      }

      &.blob-6{
        border-radius: 68% 32% 62% 38% / 48% 52% 68% 32%;
        
        &:hover{   
          animation: morph6 4s linear infinite;
        }
      }

      &.blob-7{
        border-radius: 48% 52% 66% 34% / 60% 40% 45% 55%;
        
        &:hover{   
          animation: morph7 4s linear infinite;
        }
      }

      &.blob-8{
        border-radius: 66% 34% 58% 42% / 48% 52% 66% 34%;
        
        &:hover{   
          animation: morph8 4s linear infinite;
        }
      }

        &.blob-9{
          border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
          
          &:hover{   
            animation: morph9 4s linear infinite;
          }
        }
    }

    .membre-content{
      text-align: center;
      margin-top: 10px;

      .membre-name{
          font-weight: 700;
          font-size: var(--fs-lg);
          margin-bottom: 5px;
          color: var(--c-primary-light);
      }

      .membre-role{
        margin-bottom: 0;
      }
    }
  }
}

@keyframes morph1 {
  0%, 100% {
    border-radius: 60% 40% 55% 45% / 35% 65% 60% 40%;
  }
  33% {
    border-radius: 45% 55% 60% 40% / 50% 30% 70% 50%;
  }
  66% {
    border-radius: 70% 30% 40% 60% / 60% 60% 40% 40%;
  }
}

@keyframes morph2 {
  0%, 100% {
    border-radius: 50% 50% 60% 40% / 70% 30% 50% 50%;
  }
  33% {
    border-radius: 60% 40% 40% 60% / 50% 70% 30% 50%;
  }
  66% {
    border-radius: 55% 45% 70% 30% / 40% 60% 60% 40%;
  }
}

@keyframes morph3 {
  0%, 100% {
    border-radius: 35% 65% 45% 55% / 55% 45% 35% 65%;
  }
  33% {
    border-radius: 40% 60% 60% 40% / 60% 40% 50% 50%;
  }
  66% {
    border-radius: 50% 50% 35% 65% / 70% 30% 45% 55%;
  }
}

@keyframes morph4 {
  0%, 100% {
    border-radius: 55% 45% 70% 30% / 30% 70% 60% 40%;
  }
  33% {
    border-radius: 65% 35% 40% 60% / 60% 40% 40% 60%;
  }
  66% {
    border-radius: 45% 55% 65% 35% / 50% 50% 70% 30%;
  }
}

@keyframes morph5 {
  0%, 100% {
    border-radius: 58% 42% 36% 64% / 38% 62% 58% 42%;
  }
  33% {
    border-radius: 40% 60% 60% 40% / 60% 40% 30% 70%;
  }
  66% {
    border-radius: 72% 28% 48% 52% / 52% 48% 62% 38%;
  }
}

@keyframes morph6 {
  0%, 100% {
    border-radius: 68% 32% 62% 38% / 48% 52% 68% 32%;
  }
  33% {
    border-radius: 52% 48% 42% 58% / 60% 40% 30% 70%;
  }
  66% {
    border-radius: 70% 30% 50% 50% / 50% 50% 60% 40%;
  }
}

@keyframes morph7 {
  0%, 100% {
    border-radius: 48% 52% 66% 34% / 60% 40% 45% 55%;
  }
  33% {
    border-radius: 55% 45% 60% 40% / 65% 35% 50% 50%;
  }
  66% {
    border-radius: 58% 42% 48% 52% / 50% 50% 70% 30%;
  }
}

@keyframes morph8 {
  0%, 100% {
    border-radius: 66% 34% 58% 42% / 48% 52% 66% 34%;
  }
  33% {
    border-radius: 60% 40% 50% 50% / 55% 45% 35% 65%;
  }
  66% {
    border-radius: 45% 55% 65% 35% / 40% 60% 70% 30%;
  }
}

@keyframes morph9 {
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
