<script setup>
import HeroComp from "@/components/HeroComp.vue";
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
            <strong>ABYM</strong> est un jeu d'exploration et de résolution d'énigmes en environnement sous-marin. Le jeu est composé de 4 niveaux en vue de côté (2.5D), la caméra positionnée à la troisième personne.
          </p>
          <p>
            Vous incarnez un éclaireur extraterrestre chargé de parcourir les océans d'une planète inconnue pour collecter des données biologiques dans le but de développer un remède destiné à sauver son espèce.
          </p>
          <p>
              Le gameplay repose sur l'exploration, l'analyse d'organismes vivants et l'interaction avec l'environnement. Vous devez naviguer dans des zones hostiles, résoudre des puzzles contextuels et éviter des menaces environnementales dynamiques pour réussir.
          </p>
        </div>

        <img id="charaFall" class="content-image" src="/perso/CharaFall.png" alt="personnage du joueur"/>
      </div>
    </section>

    <section id="" class="textimage first-section">
      <div class="container">
        <img class="content-image" src="/game/niv_tutot.png" alt="capture d'écran du tutoriel de ABYM"/>

        <div class="textimage-content">
          <h2>Informations techniques</h2>

          <p>
            <strong>ABYM</strong> est un disponible sur <a href="https://itch.io/" target="_blank" rel="noopener noreferrer">https://itch.io/</a>, un site d'hébergement, de partage et de téléchargement de jeux vidéo gratuits, à l'adresse : <a href="https://abymgame.itch.io/abym" target="_blank" rel="noopener noreferrer"><strong>https://abymgame.itch.io/abym</strong></a>. 
          </p>

          <p>
            Disponible seulement sur <strong>ordinateur</strong>. Vous pouvez jouer directement avec le clavier ou utiliser une manette. 
          </p>

          <p>
            Ne requiert aucune configuration spécifique.
          </p>
        </div>
      </div>
    </section>

    <section id="" class="textimage bg-dark">
      <div class="container">
        <!-- <img id="" ref="" class="content-image" src="/perso/"/> -->

        <div class="textimage-content">
          <h2>Commandes</h2>

          <ul class="my-liste">
            <li>
              <strong>ZQSD / flèches directionnelles / joystick gauche (manette)</strong> : pour vous déplacer dans toutes les directions
            </li>
            <li>
              <strong>E / Y (manette)</strong> sur un objet : pour le récupérer / apprendre des informations
            </li>
            <li class="hidden">
              <strong>Code Konami (site)</strong> : ???
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

          <RouterLink class="button" to="/a-propos">Dévouvrir l'équipe derrière ABYM</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.hidden{
  color: var(--c-primary-dark) !important;
}
</style>
