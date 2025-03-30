<script setup>
import HeroComp from "@/components/HeroComp.vue";
import ContactForm from "@/components/ContactForm.vue";
import MediasList from "@/components/MediasList.vue";
</script>

<template>
  <HeroComp
    title="Contact"
    text="Une question ou toute autre demande&nbsp;? Remplissez le formulaire de contact et nous vous répondrons dans les plus brefs délais&nbsp;!"
  />

  <main>
    <section class="container first-section">
      <h2>Formulaire de contact</h2>

      <div class="contact">
        <ContactForm />
        <MediasList isColumn />
      </div>
    </section>
  </main>
</template>

<style>
.contact {
  display: flex;
  flex-wrap: wrap;
  gap: 25px 100px;
}
</style>
