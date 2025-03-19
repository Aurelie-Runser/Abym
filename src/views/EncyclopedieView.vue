<script setup lang="ts">
import HeroComp from "@/components/HeroComp.vue";
import SliderComp from "@/components/SliderComp.vue";
</script>

<template>
  <HeroComp
    title="L'Encyclopédie"
    text="Découvrez les premières plantes et créatures que vous aurez l'occasion de découvrir à travers le jeu"
  />

  <main>
    <section class="textimage">
      <div class="container">
        <div class="textimage-content">
          <h2>Découvrez les créatures</h2>

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

        <div class="content-image"></div>
      </div>

      <SliderComp/>

    </section>

    <section class="textimage">
      <div class="container">
        <div class="content-image"></div>

        <div class="textimage-content">
          <h2>Découvrez les plantes</h2>

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
      </div>

      <SliderComp/>
    </section>
  </main>
</template>
