<script setup>
import HeroComp from "@/components/HeroComp.vue";
import SliderComp from "@/components/SliderComp.vue";
</script>

<template>
  <HeroComp
    title="L'Encyclopédie"
    text="Découvrez les premières plantes et créatures que vous aurez l'occasion de découvrir à travers le jeu"
  />

  <main>
    <section class="textimage first-section">
      <div class="container">
        <div class="textimage-content">
          <h2>Découvrez les créatures</h2>

          <p>
            Explorez un monde marin peuplé de créatures aussi variées que surprenantes.
            <br/>Chaque poisson rencontré possède un comportement unique : certains nagent paisiblement, d'autres fuient à votre approche, tandis que les plus dangereux vous attaqueront sans hésiter.
          </p>
          <p>
            Observez, apprenez et adaptez-vous.
            <br/>Leur réaction à la lumière, au son ou à vos mouvements peut devenir un atout ou un piège. Restez sur vos gardes : dans les profondeurs, chaque rencontre peut être une menace... ou une opportunité.
          </p>
        </div>

        <div class="content-image"></div>
      </div>

      <SliderComp
        isFish=true
        cardFirst="/fish/poisson_1.png"
        cardSecond="/fish/poisson_2.png"
        cardThird="/fish/poisson_3.png"
      />
    </section>

    <section class="textimage">
      <div class="container">
        <div class="content-image"></div>

        <div class="textimage-content">
          <h2>Découvrez les plantes</h2>

          <p>
            Les profondeurs regorgent de plantes étranges, belles et parfois menaçantes.
            <br/>Algues lumineuses, coraux pulsants ou végétaux carnivores, chacune joue un rôle dans l’écosystème  ou dans votre survie.
          </p>
          <p>
            Approchez-les avec prudence.
            <br/>Certaines soignent ou offrent des ressources, d'autres réagissent violemment au moindre contact. Observer leur comportement peut faire la différence entre progresser… ou périr.
          </p>
        </div>
      </div>

      <SliderComp 
        cardFirst="/plantes/corail_light.png"
        cardSecond="/plantes/corail_2.png"
        cardThird="/plantes/corail.png"
        cardFourth="/plantes/plante.png"
      />
    </section>
  </main>
</template>
