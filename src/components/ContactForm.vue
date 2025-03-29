<script setup>
import { ref } from "vue";

const email = ref("");
const botcheck = ref(false);
const message = ref("");
const formMessage = ref("");
const isSuccess = ref(null);
const isLoading = ref(false);

const submitForm = async () => {
  if (botcheck.value || isLoading.value) {
    return;
  }

  isLoading.value = true;
  formMessage.value = "";
  isSuccess.value = null;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_KEY_WEB3FORM,
        subject: "Nouveau Message du Site Vitrine",
        email: email.value,
        message: message.value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      formMessage.value = "Votre message a été envoyé avec succès !";
      isSuccess.value = true;
      email.value = "";
      message.value = "";
    } else {
      throw new Error(result.message || "Une erreur s'est produite.");
    }
  } catch (error) {
    formMessage.value = "Échec de l'envoi. Veuillez réessayer plus tard.";
    isSuccess.value = false;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <input type="checkbox" name="botcheck" v-model="botcheck" style="display: none" />

    <input
      class="input-style"
      type="email"
      name="email"
      required
      v-model="email"
      placeholder="Email *"
    />

    <textarea
      class="input-style"
      name="message"
      v-model="message"
      required
      placeholder="Message *"
      rows="10"
    ></textarea>

    <p class="contact-info">
      Nous vous demandons votre adresse mail afin de pouvoir vous recontacter et vous répondre.
      <br />Vos informations ne seront pas partagées à d'autres organismes.
    </p>

    <button class="button" type="submit" :disabled="isLoading">
      {{ isLoading ? "Envoi en cours..." : "Envoyer" }}
    </button>

    <div
      v-if="formMessage"
      :class="{ 'success-message': isSuccess, 'error-message': isSuccess === false }"
    >
      {{ formMessage }}
    </div>
  </form>
</template>

<style>
form {
  flex: 1 1 300px;
  width: 100%;
  max-width: 500px;
}

.input-style {
  width: 100%;
  margin: 10px auto;
  border: 2px solid var(--c-white);
  background: transparent;
  padding: 1rem;
  border-radius: 5px;
  font-family: var(--ff-text);
  font-size: var(--fs-md);
  color: var(--c-white);
}

.input-style::placeholder {
  font-family: var(--ff-text);
  font-size: var(--fs-md);
}

.input-style:focus {
  background: var(--c-primary);
  outline: var(--c-primary-light) 2px solid;
}

.contact-info {
  font-size: var(--fs-sm);
}

form .button {
  margin: auto;
}

form .button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success-message,
.error-message {
  width: 100%;
  margin: 10px auto;
  padding: 1rem;
  border: 3px solid var(--c-green);
  border-radius: 5px;
  text-align: center;
  font-family: var(--ff-title);
  color: var(--c-green);
  font-size: var(--fs-lg);
}

.error-message {
  border-color: var(--c-red);
  color: var(--c-red);
}
</style>
