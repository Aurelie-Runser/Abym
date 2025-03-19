<script setup lang="ts">
import MediasList from "@/components/MediasList.vue";
</script>

<template>
  <footer class="main-footer ripples-anime">
    <div class="container footer-container">
      <div class="footer-nav">
        <p class="footer-title">L'encyclopédie</p>

        <RouterLink class="footer-link" to="/encyclopedie">Découvrir l'encyclopédie ></RouterLink>
      </div>

      <div class="footer-contact">
        <p class="footer-title">Nous contacter</p>

        <RouterLink class="footer-link" to="/contact">Nous contacter ></RouterLink>

        <p>Découvrir nos réseaux sociaux pour en savoir plus sur l'avancement du jeu.</p>

        <MediasList/>
      </div>
    </div>
  </footer>
</template>

<style>
.main-footer {
  background: var(--c-primary-dark);
  padding: 90px 0;
}

.footer-container {
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
