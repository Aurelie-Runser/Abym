<script setup lang="ts">
import Logotext from "@/components/icons/LogoText.vue"
</script>

<template>
  <header class="menu">
    <nav>
      <ul>
        <li>
          <RouterLink to="/">
            <Logotext/>
            <span class="sr-only">Accueil</span>
          </RouterLink>
        </li>
        <li><RouterLink to="/#histoire">L'histoire</RouterLink></li>
        <li><RouterLink to="/encyclopedie">L'Encyclopédie</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style>
.menu {
  position: fixed;
  z-index: 50;
  top: 0;
  width: 100%;
  border-bottom: 3px solid var(--c-white);
  background: rgba(255, 255, 255, 10%);
  backdrop-filter: blur(10px);
}

.menu ul {
  width: 100%;
  max-width: var(--mw);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu li a {
  display: block;
  padding: 20px 30px;
  font-family: var(--ff-title);
  font-size: var(--fs-lg);
  text-transform: uppercase;
}

.menu li:first-child {
  margin-right: auto;
}

.menu li:first-child a {
  padding: 15px 30px;
}

.menu li:first-child svg {
  width: 100px;
}

.menu li:last-child a {
  background: var(--c-primary-dark);
}

.menu li:hover a {
  background: var(--c-white);
  color: var(--c-primary);
}

.menu li:first-child:hover svg {
  filter: none;
}
</style>
