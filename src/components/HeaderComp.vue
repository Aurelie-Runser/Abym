<script setup>
import Logotext from "@/components/icons/LogoText.vue";
</script>

<template>
  <header class="menu">
    <nav>
      <ul>
        <li>
          <RouterLink class="menu-link" to="/">
            <Logotext />
            <span class="sr-only">Accueil</span>
          </RouterLink>
        </li>
        <li><RouterLink class="menu-link" to="/#histoire">L'histoire</RouterLink></li>
        <li><RouterLink class="menu-link" to="/encyclopedie">L'Encyclopédie</RouterLink></li>
        <li><RouterLink class="menu-link" to="/contact">Contact</RouterLink></li>
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

  ul {
    width: 100%;
    max-width: var(--mw);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li{
      .menu-link {
        display: block;
        padding: 20px 30px;
        font-family: var(--ff-title);
        font-size: var(--fs-lg);
        text-transform: uppercase;
      }

      &:first-child {
        margin-right: auto;

        .menu-link {
          padding: 15px 30px;


          svg {
            width: 100px;
          }
        }

        &:hover .menu-link {
          background: transparent;

          svg * {
            fill: var(--c-white)
          }
        }
      }

      &:last-child .menu-link {
        background: var(--c-primary-dark);
      }

      &:hover .menu-link {
        background: var(--c-white);
        color: var(--c-primary);
      }
    }
  }
}
</style>
