<script setup>
import HeroComp from "@/components/HeroComp.vue";
import EquipeList from "@/components/EquipeList.vue";

const equipeDev = [
  {
    photo: "https://placecats.com/neo/300/300",
    name: "Enzo",
    role: "Chef de projet, Développeur",
  },
  {
    photo: "https://placecats.com/millie/300/300",
    name: "Samuel Klauss",
    role: "Développeur",
    linkedin: 'https://www.linkedin.com/in/samuelklauss'
  },
  {
    photo: "https://placecats.com/millie_neo/300/300",
    name: "Hugo",
    role: "Développeur",
  },
];

const equipeDesign = [
  {
    photo: "https://placecats.com/neo_banana/300/300",
    name: "Eva Feindel",
    role: "Modélisatrice 3D",
  },
  {
    photo: "https://placecats.com/neo_2/300/300",
    name: "Julie Laquille",
    role: "Modélisatrice 3D",
  },
  {
    photo: "https://placecats.com/bella/300/300",
    name: "William",
    role: "Modélisateur 3D",
  },
  {
    photo: "https://placecats.com/poppy/300/300",
    name: "Clément Thuot",
    role: "Sound Designer",
  }
];

const equipeWeb = [
  {
    photo: "https://placecats.com/louie/300/300",
    name: "Aurélie Runser",
    role: "Développeuse Web, Communicante",
    linkedin: "https://www.linkedin.com/in/aur%C3%A9lie-runser",
    web: 'https://portfolio.aurelierunser.fr/'
  },
  {
    photo: "https://placecats.com/g/300/300",
    name: "Eliot Feuvrier",
    role: "Web Designer",
    linkedin: "https://www.linkedin.com/in/eliot-feuvrier",
    web: 'https://eliot-feuvrier.fr/'
  }
];
</script>

<template>
  <HeroComp title="À-propos" text="Pourquoi et par qui a été réalisé ABYM&nbsp;?" />

  <main>
    <section class="textimage first-section">
      <div class="container">
        <div class="textimage-content">
          <h2>Les Origines du projet ABYM</h2>

          <p>
            Abym est un projet de coeur, imaginé par <strong>Enzo</strong>. Lors de sa 1ère année de
            Bachelore au
            <a href="http://" target="_blank" rel="noopener noreferrer">Ynov Campus de Strasbourg</a>.
            Il a pue concrétiser, avec 8 de ses camardes, son projet.
          </p>
          <p>
            Abym est un projet de coeur, imaginé par <strong>Enzo</strong>. Lors de sa 1ère année de
            Bachelore au
            <a href="http://" target="_blank" rel="noopener noreferrer">Ynov Campus de Strasbourg</a>.
            Il a pue concrétiser, avec 8 de ses camardes, son projet.
          </p>
          <p>
            Abym est un projet de coeur, imaginé par <strong>Enzo</strong>. Lors de sa 1ère année de
            Bachelore au
            <a href="http://" target="_blank" rel="noopener noreferrer">Ynov Campus de Strasbourg</a>.
            Il a pue concrétiser, avec 8 de ses camardes, son projet.
          </p>
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

    <div class="equipe">
      <section class="container">
        <h2>L'équipe</h2>
  
        <div class="equpe-dev">
          <h3>Les Développeurs du jeu</h3>
          <EquipeList :list="equipeDev" />
        </div>
  
        <div class="equpe-design">
          <h3>Les Games & Sound Design</h3>
          <EquipeList :list="equipeDesign" />
        </div>
  
        <div class="equpe-web">
          <h3>Les Externes</h3>
          <EquipeList :list="equipeWeb" />
        </div>
      </section>
    </div>
  </main>
</template>

<style>
.contact {
  display: flex;
  flex-wrap: wrap;
  gap: 25px 100px;
}

.equipe{
  background: var(--c-primary-dark);
}
</style>
