<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { pictureScrollZoom } from '@/utils/pictureScrollZoom.js'
import HeroComp from "@/components/HeroComp.vue";

const { handleScrollZoom } = pictureScrollZoom('charaZoom2', {
  minScale: 0.5,
  maxScale: 2,
  scrollFactor: 1000
})

onMounted(() => {
  window.addEventListener('scroll', handleScrollZoom)
  handleScrollZoom()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScrollZoom)
})
</script>

<template>
  <main>
    <HeroComp
      title="Informations du Jeu"
      text="Disponibilités, gameplay, règle... tout est décrit ici&nbsp;!"
    />

    <section id="" class="textimage first-section">
      <div class="container">
        <div class="textimage-content">
          <h2>Présentation</h2>

          <p>
            <strong>Abym</strong> est un <strong>jeu d'enigme et d'exploration aquatique, à la 3ème personne, vue de côté</strong>.
          </p>
          <p>Incarnant un extraterrestre à la recherche d'un remède dans l'objectif de sauver son peuple, <strong>Abym</strong> vous plonge dans <strong>un univers futuriste et angoissant</strong>, où vous devrez explorer le moindre recoin pour vous en sortir.</p>
        </div>

        <img id="charaZoom2" ref="charaZoom2" class="content-image" src="/perso/CharaPoseSwim.png"/>
      </div>
    </section>

    <section id="" class="textimage first-section">
      <div class="container">
        <div class="textimage-content">
          <h2>Informations techniques</h2>

          <p>
            <strong>Abym</strong> est un disponible sur <a href="https://itch.io/" target="_blank" rel="noopener noreferrer">https://itch.io/</a>, un site d'hébèrgement, partage et téléchargement de jeux vidéo gratuit, à l'adresse : <a href="https://abymgame.itch.io/abym" target="_blank" rel="noopener noreferrer"><strong>https://abymgame.itch.io/abym</strong></a>. 
          </p>

          <p>
            Disponible seulement sur <strong>ordinateur</strong>.
          </p>

          <p>
            Ne requière aucune configuration spécifique.
          </p>
        </div>

        <!-- <img id="" ref="" class="content-image" src="/perso/"/> -->
      </div>
    </section>

    <section id="" class="textimage bg-dark">
      <div class="container">
        <!-- <img id="" ref="" class="content-image" src="/perso/"/> -->

        <div class="textimage-content">
          <h2>Gameplay</h2>

          <ul class="my-liste">
            <li>
              <strong>ZQSD</strong> : pour vous déplacez dans toutes les directions
            </li>
            <li>
              <strong>Enter</strong> : pour sélectionner un objet
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="" class="textimage">
      <div class="container">
        <!-- <img class="content-image" src=""/> -->

        <div class="textimage-content">
          <h2>L'équipe</h2>

          <RouterLink class="button" to="/a-propos">Dévouvrir l'équipe derrière Abym</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
</style>
