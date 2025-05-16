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
            <strong>Abym</strong> est un jeu d'exploration et de résolution d'énigmes en environnement sous-marin, en vue de côté (2.5D), à la troisième personne.
          </p>
          <p>
            Vous Incarnez un éclaireur extraterrestre chargé de parcourir les océans d'une planète inconnue pour collecter des données biologiques dans le but de développer un remède destiné à sauver son espèce.
            <br/>Le gameplay repose sur l'exploration, l'analyse d'organismes vivants et l'interaction avec l'environnement. Vous devez naviguer dans des zones hostiles, résoudre des puzzles contextuels, et éviter des menaces environnementales dynamiques pour réussir.
          </p>
        </div>

        <img id="charaZoom2" ref="charaZoom2" class="content-image" src="/perso/CharaPoseSwim.png" alt="personnage du joueur" loading="lazy"/>
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
            Disponible seulement sur <strong>ordinateur</strong>. Vous pouvez jouer directement avec le clavier ou utiliser une manette.
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
          <h2>Commandes</h2>

          <ul class="my-liste">
            <li>
              <strong>ZQSD / flèches directionnelles / joysrick gauche (manette)</strong> : pour vous déplacez dans toutes les directions
            </li>
            <li>
              <strong>E / Y (manette)</strong> sur un objet : pour le récupérer / apprendre des informations
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
