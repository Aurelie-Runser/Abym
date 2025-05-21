<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { pictureScrollZoom } from "@/utils/pictureScrollZoom.js";
import { pictureScrollTranslate } from "@/utils/pictureScrollTranslate.js"
import { pictureScrollZoomTranslate } from "@/utils/pictureScrollZoomTranslate.js"
import HeroComp from "@/components/HeroComp.vue";
import MediasList from "@/components/MediasList.vue";

const { handleScrollZoom: handleCharaZoom } = pictureScrollZoom("charaZoom", {
  minScale: 0.75,
  maxScale: 2.25,
  scrollFactor: 1000,
});

const { handleScrollTranslate: handleFishDiscoverTranslate } = pictureScrollTranslate("fishDescover");
const { handleScroll: handleFishContactZoomTranslate } = pictureScrollZoomTranslate("fishContact")

onMounted(() => {
  window.addEventListener("scroll", handleCharaZoom);
  window.addEventListener("scroll", handleFishDiscoverTranslate);
  window.addEventListener("scroll", handleFishContactZoomTranslate);
  handleCharaZoom();
  handleFishDiscoverTranslate();
  handleFishContactZoomTranslate();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleCharaZoom);
  window.removeEventListener("scroll", handleFishDiscoverTranslate);
  window.removeEventListener("scroll", handleFishContactZoomTranslate);
});
</script>

<template>
  <main>
    <HeroComp title="Explorer les fonds marins" isHome />

    <section id="histoire" class="textimage first-section">
      <div class="container">
        <div class="textimage-content">
          <h2>L'Histoire</h2>

          <p>
            Atterri sur une planète inexplorée, Éclaireur N°67, recru du protocole 51, a pour mission de parcourir ces océans afin de trouver un remède dans l'objectif de sauver son peuple d'une pandémie mortelle.
          </p>
          <p>
            Les plantes, les animaux, les microbes, tout doit être observé, consigné dans son carnet, pour que lors de son retour chez lui, les scientifiques puissent trouver un vaccin.
          </p>
          <p>
            Vous incarnez Éclaireur N°67, et la survie de cette civilisation dépend de vous.
          </p>
        </div>

        <img
          id="charaZoom"
          ref="charaZoom"
          class="content-image"
          src="/perso/CharaPoseSwim.webp"
          alt="Personnage du joueur"
        />
      </div>
    </section>

    <section class="textimage bg-dark">
      <div class="container">
        <div class="textimage-content">
          <h2>Découvrez des créatures terrifiantes</h2>
          <p>
            Plongez dans cet univers sous-marin à vos risques et périls.
            <br />Dans ces eaux inconnues, tout ce qui bouge n'est pas forcément un allié. Certaines
            créatures fuient, d'autres attaquent sans prévenir. Même les plantes peuvent vous
            piéger, bloquer votre chemin, ou pire.
          </p>
          <p>
            Observer, analyser, survivre. <br />À vous de découvrir ce que cache réellement cet
            océan.
          </p>
        </div>

        <img id="fishDescover" class="content-image" src="/fish/fish_3.webp" alt="Poisson du jeu : Lanberko" loading="lazy"/>
      </div>
    </section>

    <section class="textimage">
      <div class="container">
        <img class="content-image" src="/plantes/plante_1.webp" alt="Plante du jeu : Corail Plate" loading="lazy" />

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
          <h2>Retrouvez nos réseaux sociaux</h2>
          <p>
            Suivez-nous sur nos réseaux sociaux pour suivre l'avancée du jeu, découvrir des images
            exclusives et ne rien manquer des dernières actualités&nbsp;!
          </p>
          <MediasList />
          <RouterLink class="button" to="/contact">Nous contacter</RouterLink>
        </div>

        <img id="fishContact" class="content-image" src="/fish/fish_2.webp" alt="poisson du jeu" loading="lazy"/>
      </div>
    </section>
  </main>
</template>
