<script setup lang="ts">
/**
 * TestimonialsSection
 * Real-feeling family stories to build trust and warmth.
 */
</script>

<template>
  <section class="section testimonials">
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">From Our Family to Yours</span>
        <h2>Why families keep coming back.</h2>
      </div>

      <div class="testimonials-grid">
        <div class="testimonial reveal">
          <div class="quote">“My mother, my daughters, and I have been coming to Deux for years. It’s the only place that feels like a second home. They treat every generation with the same care and patience.”</div>
          <div class="author">
            <span class="name">The Morales Family</span>
            <span class="detail">Three generations • Willowbrook</span>
          </div>
        </div>

        <div class="testimonial reveal">
          <div class="quote">“First haircuts can be scary, but the team made our son feel so special. They even took the time to explain everything to him. Now he asks when we can go back.”</div>
          <div class="author">
            <span class="name">Sarah &amp; David Chen</span>
            <span class="detail">Parents of two • Regulars since 2022</span>
          </div>
        </div>

        <div class="testimonial reveal">
          <div class="quote">“As a busy mom, finding a salon that welcomes both me and my teenage daughter without rushing either of us is rare. Deux gets it right every time. We always leave feeling beautiful and cared for.”</div>
          <div class="author">
            <span class="name">Elena Rodriguez</span>
            <span class="detail">Mom of a teen • Loves the Ritual</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  background: var(--deux-beige);
}

.testimonials-grid {
  display: grid;
  gap: 1.75rem;
}

@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.testimonial {
  background: var(--deux-cream);
  padding: 1.75rem 1.5rem 1.85rem;
  display: flex;
  flex-direction: column;
}

.quote {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--deux-deep);
  flex: 1;
  margin-bottom: 1.25rem;
  font-style: italic;
}

.author {
  border-top: 1px solid var(--deux-border);
  padding-top: 1rem;
}

.name {
  display: block;
  font-weight: 500;
  color: var(--deux-deep);
  font-size: 0.95rem;
}

.detail {
  display: block;
  font-size: 0.8rem;
  color: var(--deux-brown-light);
  margin-top: 2px;
}
</style>
