<script setup>
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import ThreadIcon from "@/components/icons/ThreadIcon.vue";
import BlueskyIcon from "@/components/icons/BlueskyIcon.vue";

defineProps({
  isColumn: Boolean,
});
</script>

<template>
  <div class="medias-list" :style="isColumn ? 'flex-direction: column' : ' '">
    <a class="media" href="https://x.com/AbymGame" target="_blank" rel="noopener noreferrer">
      <TwitterIcon />
      <span :class="[{ 'sr-only': !isColumn }]">@AbymGame</span>
    </a>
    <a
      class="media"
      href="https://www.threads.net/@abymgame"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ThreadIcon />
      <span :class="[{ 'sr-only': !isColumn }]">@abymgame</span>
    </a>
    <a
      class="media"
      href="https://bsky.app/profile/abymgame.bsky.social"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BlueskyIcon />
      <span :class="[{ 'sr-only': !isColumn }]"
        >@abymgame.bsky.social</span
      >
    </a>
  </div>
</template>

<style>
.medias-list {
  margin-top: 30px;
  display: flex;
  gap: 25px;
  max-width: 100%;
}

.media {
  height: 50px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.media svg {
  flex: none;
  height: 100%;
  width: auto;
}

.media svg * {
  color: var(--c-white);
}

.media span {
  margin: 0;
  font-weight: 500;
}

.media:hover span,
.media:hover svg * {
  color: var(--c-primary-light);
}
</style>
