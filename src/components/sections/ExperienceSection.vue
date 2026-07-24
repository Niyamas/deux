<script setup lang="ts">
/**
 * ExperienceSection
 * "The Deux Experience" — three service pillars with imagery.
 */
import ExperienceCard from './ExperienceCard.vue'

// Import assets so Vite processes them and provides the final hashed URLs.
// This is required when passing image paths via props (dynamic :src in child).
import lindsayWash from '@/assets/images/lindsay-cash-hair-wash-unsplash.jpg'
import hairStyling from '@/assets/images/adam-winger-hair-styling-unsplash.jpg'
import hairColors from '@/assets/images/baylee-gramling-hair-colors-unsplash.jpg'
</script>

<template>
  <section id="experience" class="section experience">
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">The Deux Experience</span>
        <h2>Crafted with care.<br />Felt in every detail.</h2>
      </div>

      <div class="experience-grid">
        <ExperienceCard
          :image="lindsayWash"
          alt="Serene hair washing ritual at Deux — perfect for the whole family"
          title="The Ritual"
          description="A deeply restorative wash and scalp treatment for every age. Warm water, signature scents, and unhurried hands. The foundation of every family visit."
        />
        <ExperienceCard
          :image="hairStyling"
          alt="Precision hair styling and finishing for all ages"
          title="The Cut"
          description="Thoughtful consultation followed by precise, sculptural cutting — from first haircuts to signature styles for every generation. We shape to your bone structure, lifestyle, and the way you want to feel."
        />
        <ExperienceCard
          :image="hairColors"
          alt="Artful hair colouring in warm, rich tones for the whole family"
          title="The Colour"
          description="Custom-blended colour that feels like an extension of you — and your family. Rich, dimensional, and always executed with the highest technical care for every generation."
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  background: var(--deux-beige);
}

.experience-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .experience-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }
}
</style>
