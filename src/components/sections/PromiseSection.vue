<script setup lang="ts">
/**
 * PromiseSection
 * The three quiet promises that define the Deux brand.
 */
</script>

<template>
  <section class="section promise">
    <div class="container">
      <div class="promise-inner reveal">
        <div class="section-header center">
          <span class="eyebrow">What We Stand For</span>
          <h2>Three quiet promises.</h2>
        </div>

        <div class="promise-grid">
          <div class="promise-item">
            <div class="promise-num">01</div>
            <h4>Intention</h4>
            <p>Nothing is rushed. We listen before we lift a brush or open a bottle.</p>
          </div>
          <div class="promise-item">
            <div class="promise-num">02</div>
            <h4>Warmth</h4>
            <p>From the first hello to the last goodbye, you and your family are cared for like guests in our home. Multi-generational visits are always welcome.</p>
          </div>
          <div class="promise-item">
            <div class="promise-num">03</div>
            <h4>Artistry</h4>
            <p>Every service is executed with the eye of an artist and the hands of a craftsman.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.promise {
  background: var(--deux-deep);
  color: var(--deux-cream-on-dark);
}

.promise-inner {
  max-width: 1000px;
  margin: 0 auto;
}

.promise-grid {
  display: grid;
  gap: 2.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .promise-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
}

.promise-item h4 {
  font-size: 1.25rem;
  margin: 0.75rem 0 0.6rem;
  color: var(--deux-cream-on-dark);
}

.promise-item p {
  color: rgba(245, 240, 232, 0.78);
  font-size: 0.95rem;
}

.promise-num {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  color: var(--deux-gold);
}
</style>
