<script setup>
import SVGFooter from "@/components/SVGFooter.vue";
import MediasList from "@/components/MediasList.vue";
import GameCounter from "@/components/GameCounter.vue";
</script>

<template>
  <footer class="main-footer ripples-anime">
    <div class="footer-svg">
      <SVGFooter />
    </div>
    <div class="footer-container">
      <div class="container">
        <div class="footer-nav">
          <p class="footer-title">Navigation</p>

          <RouterLink class="footer-link" to="/">Accueil ></RouterLink>
          <RouterLink class="footer-link" to="/informations">Consulter les Informations ></RouterLink>
          <RouterLink class="footer-link" to="/encyclopedie">Découvrir l'Encyclopédie ></RouterLink>
          <RouterLink class="footer-link" to="/juke-box">Écouter les Musiques ></RouterLink>
          <RouterLink class="footer-link" to="/a-propos">Apprenez-en plus sur l'Équipe ></RouterLink>
        </div>

        <div class="footer-contact">
          <p class="footer-title">Nous contacter</p>

          <RouterLink class="footer-link" to="/contact">Nous contacter ></RouterLink>

          <p>Découvrir nos réseaux sociaux pour en savoir plus sur l'avancement du jeu.</p>

          <MediasList />
        </div>

        <div class="footer-game">
          <GameCounter/>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer-svg svg {
  position: relative;
  z-index: 0;
}

.footer-container {
  margin-top: -10px;
  background: var(--c-primary-dark);
  position: relative;
  z-index: 1;
  padding-bottom: 50px;
}

@media (width < 730px) {
    .footer-container{
        padding-top: 50px;
    }
}

.footer-container .container {
  display: flex;
  flex-wrap: wrap;
  gap: 50px 100px;
}

.footer-contact {
  flex: 1 1 150px;
  max-width: fit-content;
}

.footer-title {
  font-family: var(--ff-title);
  font-size: var(--fs-lg);
  text-transform: uppercase;
  margin-bottom: 30px;
}

.footer-link {
  display: block;
  font-family: var(--ff-text);
  font-size: var(--fs-md);
  
  &:not(:last-child){
    margin-bottom: 30px;
  }
}

.footer-link:hover {
  color: var(--c-primary-light);
}

.footer-game{

  p{
    font-family: var(--ff-title);
    font-size: var(--fs-lg);
    text-transform: uppercase;

    span{
      text-transform: none;
    }
  }

  .button{
    color: var(--c-primary-dark);
    background: var(--c-primary-light);

    &:hover{
      color: var(--c-white);
      background: var(--c-primary);
    }
  }
}
</style>
