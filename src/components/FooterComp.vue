<script setup>
import SVGFooter from "@/components/SVGFooter.vue";
import MediasList from "@/components/MediasList.vue";
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
          <RouterLink class="footer-link" to="/encyclopedie">Découvrir l'encyclopédie ></RouterLink>
          <RouterLink class="footer-link" to="/a-propos">À-propos ></RouterLink>
        </div>

        <div class="footer-contact">
          <p class="footer-title">Nous contacter</p>

          <RouterLink class="footer-link" to="/contact">Nous contacter ></RouterLink>

          <p>Découvrir nos réseaux sociaux pour en savoir plus sur l'avancement du jeu.</p>

          <MediasList />
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer-svg svg {
  position: relative;
  z-index: 0;
  translate: 0 10px;
}

.footer-container {
  position: relative;
  z-index: 1;
  background: var(--c-primary-dark);
  padding-bottom: 90px;
}

@media (width < 730px) {
    .footer-container{
        padding-top: 90px;
    }
}

.footer-container .container {
  display: flex;
  flex-wrap: wrap;
  gap: 50px 100px;
}

.footer-contact {
  flex: 1 1 150px;
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
  margin-bottom: 30px;
}

.footer-link:hover {
  color: var(--c-primary-light);
}
</style>
