<script setup>
import HeroComp from "@/components/HeroComp.vue";
import EquipeList from "@/components/EquipeList.vue";

const equipeDev = [
  {
    photo: "/equipe/enzo.webp",
    name: "Enzo Ragni",
    role: "Chef de projet, Développeur",
    blob: 'blob-1'
  },
  {
    photo: "/equipe/samuel.webp",
    name: "Samuel Klauss",
    role: "Développeur",
    blob: 'blob-2',
  },
  {
    photo: "/equipe/hugo.webp",
    name: "Hugo",
    role: "Développeur",
    blob: 'blob-3'
  },
];

const equipeDesign = [
  {
    photo: "/equipe/eva.webp",
    name: "Eva Feindel",
    role: "Modélisatrice 3D",
    blob: 'blob-4'
  },
  {
    photo: "/equipe/julie.webp",
    name: "Julie Laquille",
    role: "Modélisatrice 3D",
    blob: 'blob-5'
  },
  {
    photo: "/equipe/william.webp",
    name: "William Duringer",
    role: "Modélisateur 3D",
    blob: 'blob-6'
  },
  {
    photo: "/equipe/clement.webp",
    name: "Clément Thuot",
    role: "Sound Designer",
    blob: 'blob-7'
  }
];

const equipeWeb = [
  {
    photo: "/equipe/aurelie.webp",
    name: "Aurélie Runser",
    blob: 'blob-8',
    role: "Développeuse Web",
  },
  {
    photo: "/equipe/eliot.webp",
    name: "Eliot Feuvrier",
    role: "Web Designer",
    blob: 'blob-9',
  }
];
</script>

<template>
  <main>
    <HeroComp title="À-propos" text="Pourquoi et par qui a été réalisé ABYM&nbsp;?" />
    
    <section class="textimage first-section">
      <div class="container">
        <div class="textimage-content">
          <h2>Les Origines du projet ABYM</h2>

          <p>
            ABYM est un projet de cœur, imaginé par <strong>Enzo</strong>. Lors de sa 1ère année de
            Bachelore au
            <a href="https://www.ynov.com/campus/strasbourg" target="_blank" rel="noopener noreferrer">Ynov Campus de Strasbourg</a>.
            Il a enfin pue y concrétiser son projet.
          </p>
          <p>
            Durant une année, il a été le chef de 8 de ses camarades afin de donner vie au projet ABYM. <br/>
            En tout, ce sont trois développeurs, trois modélisateurs 3D, un sound-designer qui ont réalisé ce jeu vidéo, ainsi qu'un web designer et une développeuse web qui ont intégré le site vitrine d'ABYM.
          </p>
        </div>

        <img id="charaHello" class="content-image" src="/perso/CharaHello.gif" alt="Personnage du jeu qui vous dis bonjour"/>
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
  color: #70C5D4
}

.equipe{
  background: var(--c-primary-dark);
  padding-top: 50px;
}
</style>
