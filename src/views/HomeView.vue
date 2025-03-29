<script setup lang="ts">
import HeroComp from "@/components/HeroComp.vue";
import Objet3D from "@/components/Objet3D.vue";
import MediasList from "@/components/MediasList.vue";
</script>

<template>
  <HeroComp title="Explorer les fonds marins" isHome />

  <main>
    <section id="histoire" class="textimage">
      <div class="container">
        <div class="textimage-content">
          <h2>L'Histoire</h2>

          <p>
            Atterrie sur une planète inexploré, Eclaireur N°67, recrut du protocole ???, a pour
            mission de parcours ces océans afin de trouver un remède dans l'objectif de sauver son
            peuple d'une pandémie mortelle.
          </p>
          <p>
            Les plantes, les animaux, les microbes... tout doit être observé, consigné dans son
            carnet, pour que lors de son retour chez lui, les scientifiques puisse trouver un
            vaccin.
          </p>
          <p>Vous incarner Eclaireur N°67, et la survie de cette civilisation dépend de vous.</p>
        </div>

        <div class="content-image">
          <Objet3D
            v-bind="{
              model: '/models/fish.glb',
              cameraPosition: [4, 0, 2],
              amplitude: 0.1,
            }"
          />
        </div>
      </div>
    </section>

    <section class="decouvrez ripples-anime">
      <div class="container">
        <h2>Découvrez des créatures térifiantes</h2>

        <div class="decouvrez-content">
          <div class="decouvrez-texts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div class="content-image">
            <Objet3D
              v-bind="{
                model: '/models/fish-2.glb',
                cameraPosition: [0.4, 0, 0],
                amplitude: 0.005,
              }"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="textimage">
      <div class="container">
        <div class="content-image">
          <Objet3D
            v-bind="{
              model: '/models/coral.glb',
              cameraPosition: [4, 0, 3],
              amplitude: 0,
            }"
          />
        </div>

        <div class="textimage-content">
          <h2>Une encyclopédie à compléter</h2>
          <p>
            Découvrez une encyclopédie fascinante qui vous permettra d'explorer en détail les
            premiers poissons et plantes que vous rencontrerez lors de votre aventure sous-marine.
            Apprenez-en plus sur leur habitat, leurs caractéristiques uniques et leur rôle dans cet
            écosystème mystérieux !
          </p>
          <a class="button" href="/encyclopedie">En savoir plus</a>
        </div>
      </div>
    </section>

    <section class="decouvrez medias">
      <div class="container">
        <h2>Retourvez nos réseaux sociaux</h2>

        <div class="decouvrez-content">
          <div class="decouvrez-texts">
            <p>
              Suivez-nous sur nos réseaux sociaux pour suivre l'avancée du jeu, découvrir des images
              exclusives et ne rien manquer des dernières actualités&nbsp;!
            </p>

            <MediasList />

            <a class="button" href="/contact">Nous contacter</a>
          </div>

          <div class="content-image">
            <Objet3D
              v-bind="{
                model: '/models/fish-1.glb',
                cameraPosition: [-450, 0, 300],
                amplitude: 5,
              }"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
