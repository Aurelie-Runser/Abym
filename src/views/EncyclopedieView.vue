<script setup>
import HeroComp from "@/components/HeroComp.vue";
import SliderComp from "@/components/SliderComp.vue";

const fishs = [
  {
    name : 'Audicyne',
    famille : 'Bonite',
    mesures : 'mesure de 70 à 80 cm pour un poids de 5 ou 6 kg',
    aspect : 'La bouche porte deux barbillons et peut s’allonger en un tube qui lui permet de communiquer avec les autres ',
    attitude : 'passagère ',
    biome : 'Zone 1 ',
    categorie : 'herbivore',
    sante : '500',
    degats : 'Inoffensif',
    description : 'Petit poisson de proie',
    image:"/fish/poisson_1.png",
  },
  {
    image:"/fish/poisson_2.png",
  },
  {
    image:"/fish/poisson_3.png",
  },
]

const plantes = [
  {
    name: 'Corail Plate',
    attitude : 'Récoltable, coraux solides comme de la pierre',
    aspect : "Petite tige où passe des coraux durs en forme d'assiettes",
    biome : 'zone tuto',
    mesures : '60 m de haut',
    image:"/plantes/corail.png"
  },
  {
    image:"/plantes/plante.png"
  },
  {
    image:"/plantes/corail_light.png"
  },
  {
    image:"/plantes/corail_2.png"
  },
]
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
        :donnees="fishs"
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
        :donnees="plantes"
      />
    </section>
  </main>
</template>
