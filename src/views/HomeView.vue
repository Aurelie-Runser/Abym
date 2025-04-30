<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { pictureScrollZoom } from '@/utils/pictureScrollZoom.js'
import { pictureScrollTranslate } from '@/utils/pictureScrollTranslate.js'
import HeroComp from "@/components/HeroComp.vue";
import MediasList from "@/components/MediasList.vue";

const { handleScrollZoom } = pictureScrollZoom('charaZoom', {
  minScale: 0.5,
  maxScale: 2,
  scrollFactor: 1000
})

const { handleScrollTranslate } = pictureScrollTranslate('fishDescover', {
  maxOffsetPercent: 25
})

onMounted(() => {
  window.addEventListener('scroll', handleScrollZoom)
  window.addEventListener('scroll', handleScrollTranslate)
  handleScrollZoom()
  handleScrollTranslate()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScrollZoom)
  window.removeEventListener('scroll', handleScrollTranslate)
})

</script>

<template>
  <main>
    <HeroComp title="Explorer les fonds marins" isHome />
    
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

        <img id="charaZoom" ref="charaZoom" class="content-image" src="/perso/CharaPoseSwim.png"/>
      </div>
    </section>

    <section class="textimage bg-dark">
      <div class="container">
        <div class="textimage-content">
          <h2>Découvrez des créatures térifiantes</h2>
          <p>
            Plongez dans cet univers sous-marin à vos risques et périls.
            <br/>Dans ces eaux inconnues, tout ce qui bouge n'est pas forcément un allié. Certaines créatures fuient, d'autres attaquent sans prévenir. Même les plantes peuvent vous piéger, bloquer votre chemin… ou pire.
          </p>
          <p>Observer, analyser, survivre.
            <br/>À vous de découvrir ce que cache réellement cet océan.
          </p>
        </div>

        <img id="fishDescover" class="content-image" src="/fish/poisson_1.png"/>
      </div>
    </section>

    <section class="textimage">
      <div class="container">
        <img class="content-image" src="/perso/CharaPoseSwim.png"/>

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

    <section class="textimage">
      <div class="container">
        <div class="textimage-content">
          <h2>Retourvez nos réseaux sociaux</h2>
          <p>
            Suivez-nous sur nos réseaux sociaux pour suivre l'avancée du jeu, découvrir des images
            exclusives et ne rien manquer des dernières actualités&nbsp;!
          </p>
          <MediasList />
          <RouterLink class="button" to="/contact">Nous contacter</RouterLink>
        </div>

        <img id="charaContact" class="content-image" src="/perso/CharaPose.png"/>
      </div>
    </section>
  </main>
</template>
