<script setup>
import HeroComp from "@/components/HeroComp.vue";
import SliderComp from "@/components/SliderComp.vue";

const fishs = [
  {
    index: 1,
    name : 'Audicyne',
    famille : 'Bonite',
    mesures : 'mesure de 70 à 80 cm pour un poids de 5 ou 6 kg',
    attitude : 'Inoffensif',
    biome : 'Zone 1',
    categorie : 'herbivore',
    description : "L'Audicyne est un poisson gracile aux teintes argentées, mesurant jusqu'à 80 cm. Son corps fuselé évoque celui d'une bonite, mais sa particularité réside dans sa bouche allongée en tube, munie de deux barbillons sensibles. Cette extension lui permet non seulement de filtrer certaines algues flottantes, mais aussi d'émettre de légers sons pour communiquer avec ses congénères. Observé en bancs paisibles dans la Zone 1, l'Audicyne est prisé pour son comportement curieux, souvent vu en train de tourner lentement autour des plongeurs. Inoffensif, il joue un rôle clé dans le maintien des micro-algues et de l'équilibre des herbiers marins.",
    image:"/fish/poisson_1.png",
  },
  {
    index: 2,
    image:"/fish/poisson_2.png",
  },
  {
    index: 3,
    image:"/fish/poisson_3.png",
  },
]

const plantes = [
  {
    index: 1,
    name: 'Corail Plate',
    famille: 'Acroporidae',
    categorie : 'Récoltable',
    aspect : "Petite tige où passe des coraux durs en forme d'assiettes",
    biome : 'zone tuto',
    mesures : '60 m de haut',
    description : "Le Corail Plate est une formation étonnante, s'élevant en fines tiges rigides d'où jaillissent de larges coraux en forme d'assiettes superposées. Solide comme de la pierre, il peut atteindre jusqu'à 60 mètres de haut, formant de véritables piliers naturels dans la zone tuto. Sa structure résistante en fait un matériau récoltable, prisé par les espèces marines pour s'y abriter. Ce corail témoigne d'une croissance lente mais impressionnante, offrant un paysage vertical saisissant dans les bas-fonds clairs.",
    image:"/plantes/corail.png"
  },
  {
    index: 2,
    image:"/plantes/plante.png"
  },
  {
    index: 3,
    image:"/plantes/corail_light.png"
  },
  {
    index: 4,
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
            <br/>Algues lumineuses, coraux pulsants ou végétaux carnivores, chacune joue un rôle dans l'écosystème  ou dans votre survie.
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
