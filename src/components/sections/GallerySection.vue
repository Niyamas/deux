<script setup lang="ts">
/**
 * GallerySection
 * "In the Light" — visual poetry grid showcasing the salon and work.
 * Uses staggered reveal delays for a pleasing cascade.
 */
</script>

<template>
  <section class="section gallery">
    <div class="container-narrow">
      <div class="section-header reveal">
        <span class="eyebrow">In the Light</span>
        <h2>Moments at Deux.</h2>
      </div>
    </div>

    <div class="gallery-grid">
      <div class="gallery-item reveal img-hover-zoom" style="--delay: 0ms">
        <img src="@/assets/images/adam-winger-curls-unsplash.jpg" alt="Soft natural curls, warm light" class="img-cover" />
      </div>
      <div class="gallery-item reveal img-hover-zoom" style="--delay: 80ms">
        <img src="@/assets/images/deux-hair-back.jpg" alt="Elegant hair from behind, signature Deux styling" class="img-cover" />
      </div>
      <div class="gallery-item reveal img-hover-zoom" style="--delay: 160ms">
        <img src="@/assets/images/quentin-mahe-hair-wash-unsplash.jpg" alt="Calming shampoo experience" class="img-cover" />
      </div>
      <div class="gallery-item reveal img-hover-zoom" style="--delay: 240ms">
        <img src="@/assets/images/adam-winger-hair-styling-unsplash.jpg" alt="Refined finishing touches" class="img-cover" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  background: var(--deux-cream);
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px; /* fine lines between images for modern gallery feel */
  background: var(--deux-border);
  max-width: 1280px;
  margin: 0 auto;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: var(--deux-taupe);
}

@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .gallery-item:nth-child(1),
  .gallery-item:nth-child(4) {
    aspect-ratio: 3 / 4;
  }
}
</style>
