<script setup>
import HeroComp from "@/components/HeroComp.vue";
import Objet3D from "@/components/Objet3D.vue";
import MediasList from "@/components/MediasList.vue";
</script>

<template>
  <HeroComp title="Explorer les fonds marins" isHome />

  <main>
    <section id="histoire" class="textimage first-section">
      <div class="container">
        <div class="textimage-content">
          <h2>L'Histoire</h2>

          <p>
            Atterrie sur une planète inexploré, Eclaireur N°67, recrut du protocole 51, a pour
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
              Plongez dans cet univers sous-marin à vos risques et périls.
              <br/>Dans ces eaux inconnues, tout ce qui bouge n'est pas forcément un allié. Certaines créatures fuient, d'autres attaquent sans prévenir. Même les plantes peuvent vous piéger, bloquer votre chemin… ou pire.
            </p>
            <p>Observer, analyser, survivre.
              <br/>À vous de découvrir ce que cache réellement cet océan.
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
          <RouterLink class="button" to="/encyclopedie">Consulter</RouterLink>
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

            <RouterLink class="button" to="/contact">Nous contacter</RouterLink>
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
