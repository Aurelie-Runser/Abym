<script setup>
import HeroComp from "@/components/HeroComp.vue";
import EquipeList from "@/components/EquipeList.vue";

const equipeDev = [
  {
    photo: "https://placecats.com/neo/300/300",
    name: "Enzo Ragni",
    role: "Chef de projet, Développeur",
    blob: '/blobs/blob-1.svg#blob-1'
  },
  {
    photo: "https://placecats.com/millie/300/300",
    name: "Samuel Klauss",
    role: "Développeur",
    blob: '/blobs/blob-2.svg#blob-2',
  },
  {
    photo: "https://placecats.com/millie_neo/300/300",
    name: "Hugo",
    role: "Développeur",
    blob: '/blobs/blob-3.svg#blob-3'
  },
];

const equipeDesign = [
  {
    photo: "https://placecats.com/neo_banana/300/300",
    name: "Eva Feindel",
    role: "Modélisatrice 3D",
    blob: '/blobs/blob-4.svg#blob-4'
  },
  {
    photo: "https://placecats.com/neo_2/300/300",
    name: "Julie Laquille",
    role: "Modélisatrice 3D",
    blob: '/blobs/blob-5.svg#blob-5'
  },
  {
    photo: "https://placecats.com/bella/300/300",
    name: "William Duringer",
    role: "Modélisateur 3D",
    blob: '/blobs/blob-6.svg#blob-6'
  },
  {
    photo: "https://placecats.com/poppy/300/300",
    name: "Clément Thuot",
    role: "Sound Designer",
    blob: '/blobs/blob-7.svg#blob-7'
  }
];

const equipeWeb = [
  {
    photo: "https://placecats.com/louie/300/300",
    name: "Aurélie Runser",
    blob: '/blobs/blob-9.svg#blob-9',
    role: "Développeuse Web, Communicante",
  },
  {
    photo: "https://placecats.com/g/300/300",
    name: "Eliot Feuvrier",
    role: "Web Designer",
    blob: '/blobs/blob-8.svg#blob-8',
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
            Il a enfin pue y concrétiser son projet.
          </p>
          <p>
            Durant une année, il a été le chefs de 8 de ses camarades afin de donner vie au projet Abym. <br/>
            En tout, ce sont trois développeurs, trois modélisateurs 3D, un sound-designer qui ont réalisé ce jeu vidéo, ainsi qu'un web designer et une développeuse web qui ont intégré le site vitrine d'Abym.
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
          <h3>Les Games & Sound Designers</h3>
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
