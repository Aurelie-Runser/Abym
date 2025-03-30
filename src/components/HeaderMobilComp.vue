<script setup>
import { ref } from "vue";
import LogoSmall from "./icons/LogoSmall.vue";

const isMenuOpen = ref(false);
</script>

<template>
  <header class="menu-mobil">
    <RouterLink to="/" class="menu-logo">
      <LogoSmall />
      <span class="sr-only">Accueil</span>
    </RouterLink>

    <div class="menu-content" :class="isMenuOpen ? 'open' : ''">
      <div class="menu-burger" @click="isMenuOpen = !isMenuOpen">
        <div class="burger-bartop"></div>
        <div class="burger-barmiddle"></div>
        <div class="burger-barbottom"></div>
      </div>

      <nav class="menu-nav">
        <ul>
          <li>
            <RouterLink class="menu-link" to="/">Accueil</RouterLink>
          </li>
          <li><RouterLink class="menu-link" to="/#histoire">L'histoire</RouterLink></li>
          <li><RouterLink class="menu-link" to="/encyclopedie">L'Encyclopédie</RouterLink></li>
          <li><RouterLink class="menu-link" to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
.menu-mobil {
  position: fixed;
  z-index: 50;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-logo {
    padding: 10px;
    position: relative;
    z-index: 51;

    svg {
      width: 60px;

      * {
        fill: var(--c-white);
      }

      .cls-1 {
        fill: var(--c-primary);
      }
    }
  }

  .menu-content {
    position: fixed;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: var(--c-primary-dark);
    margin: 10px;
    padding: 15px 10px;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;

    .menu-burger {
      position: relative;
      width: 40px;
      height: 30px;

      * {
        position: absolute;
        transform-origin: center center;
        width: 40px;
        height: 3px;
        border-radius: 3px;
        background: var(--c-white);
        transition: all 0.2s ease-in-out;
      }

      .burger-bartop {
        top: 0;
      }

      .burger-barmiddle {
        top: 50%;
        translate: 0 -50%;
      }

      .burger-barbottom {
        bottom: 0;
      }
    }

    .menu-nav {
      position: absolute;
      top: 90px;
      right: 0;
      translate: 100% 0;
      opacity: 0;
      transition: all 0.4s ease-in-out;

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 40px;

        .menu-link {
          text-align: right;
          font-family: var(--ff-title);
          font-size: var(--fs-lg);
          text-transform: uppercase;
        }
      }
    }

    &.open {
      width: 200px;
      height: 350px;
      border-radius: 25px;

      .menu-burger {
        .burger-bartop {
          top: 50%;
          translate: 0 -50%;
          rotate: 45deg;
        }

        .burger-barmiddle {
          opacity: 0;
        }

        .burger-barbottom {
          bottom: 50%;
          translate: 0 50%;
          rotate: -45deg;
        }
      }

      .menu-nav {
        translate: -20px 0;
        opacity: 1;
      }
    }
  }
}
</style>
