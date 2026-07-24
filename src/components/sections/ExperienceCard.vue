<script setup lang="ts">
/**
 * ExperienceCard
 * Reusable card for the three pillars of the Deux experience.
 * Receives image src, alt, title, and description as props.
 */
defineProps<{
  image: string
  alt: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="exp-card reveal">
    <div class="exp-media img-hover-zoom">
      <img
        :src="image"
        :alt="alt"
        class="img-cover"
      />
    </div>
    <div class="exp-body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.exp-card {
  background: var(--deux-cream);
  display: flex;
  flex-direction: column;
}

.exp-media {
  aspect-ratio: 16 / 11;
  overflow: hidden;
}

.exp-body {
  padding: 1.65rem 1.5rem 1.85rem;
}

.exp-body h3 {
  margin-bottom: 0.6rem;
  font-size: 1.35rem;
  color: var(--deux-deep);
}

.exp-body p {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--deux-brown);
}
</style>
