<script setup>
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import InstaIcon from "@/components/icons/InstaIcon.vue";
import WebIcon from "@/components/icons/WebIcon.vue";

defineProps({
  list: Array,
});
</script>

<template>
  <ul class="equipe-list">
    <li class="equipe-item" v-for="(membre, index) in list" :key="index">
      <img class="blob-image" :src="membre.photo" :alt="`${membre.name}`"
            :style="`-webkit-mask: url(${membre.blob});
            mask: url(${membre.blob});`"
        />
      <div class="membre-content">
        <p class="membre-name">{{ membre.name }}</p>
        <p class="membre-role">{{ membre.role }}</p>

        <div class="membre-medias">
            <a v-if="membre.linkedin" :href="membre.linkedin" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon/><span class="sr-only">Compte Linkedin de {{ membre.name }}</span>
            </a>
            <a v-if="membre.instagram" :href="membre.instagram" target="_blank" rel="noopener noreferrer">
                <InstaIcon/><span class="sr-only">Compte Instagram de {{ membre.name }}</span>
            </a>
            <a class="web" v-if="membre.web" :href="membre.web" target="_blank" rel="noopener noreferrer">
                <WebIcon/><span class="sr-only">Portfolio de {{ membre.name }}</span>
            </a>
        </div>
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
    gap: 50px 20px;
    margin: 20px auto 40px;

    .equipe-item{
        display: block;
        width: 225px;
        overflow: hidden;

        .blob-image{
            display: block;
            width: 100%;
            height: 100%;
            aspect-ratio: 1/1;
            object-fit: cover;
            background: var(--c-primary-light);
            mask-repeat: no-repeat;
            mask-size: contain;
            mask-position: center;
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-size: contain;
            -webkit-mask-position: center;
            translate: 12px 0;
        }

        .membre-content{
            text-align: center;

            .membre-name{
                font-weight: 700;
                font-size: var(--fs-lg);
                margin-bottom: 5px;
                color: var(--c-primary-light);
            }

            .membre-role{
                margin-bottom: 0;
            }

            .membre-medias{
                margin-top: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;

                a{
                    display: block;
                    width: 45px;
                    aspect-ratio: 1/1;
                    fill: var(--c-white);
                    stroke: var(--c-white);

                    &.web{
                        scale: 0.8;
                    }

                    &:hover{
                        fill: var(--c-primary-light);
                        stroke: var(--c-primary-light);
                    }
                }
            }
        }

    }
}
</style>
