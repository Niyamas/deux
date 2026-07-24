<template>
  <div class="about-page">
    <div class="container">
      <div class="about-hero">
        <span class="eyebrow">The Salon</span>
        <h1>Deux is a feeling.</h1>
        <p class="lead">An intimate space where exceptional hair work meets genuine human warmth — and where families feel like they belong.</p>
      </div>

      <div class="about-content">
        <div class="about-grid">
          <div>
            <h3>Our Story</h3>
            <p>
              Founded with a simple belief: great hair should be experienced in a setting that feels like a second home —
              for the whole family. We designed every inch of the salon — from the lighting to the linens — to create a sense of calm
              and quiet luxury that stays with you long after you leave.
            </p>
            <p>
              Our team of stylists are artists first. Each brings years of technical mastery and a deeply personal
              approach to every guest, treating families like their own.
            </p>
          </div>
          <div>
            <h3>The Space</h3>
            <p>
              Light pours through tall windows onto natural materials. Soft textiles, warm woods, and thoughtfully
              chosen objects create an atmosphere that is both elevated and deeply comforting.
            </p>
            <p>
              We are intentionally small. This allows us to give every client — and every family member — the time, privacy, and attention
              they deserve.
            </p>
          </div>
        </div>
      </div>

      <div class="about-cta">
        <RouterLink to="/" class="btn btn--primary">Return Home</RouterLink>
        <RouterLink to="/#book" class="btn">Book Your Family’s Visit</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.about-page {
  padding: 6rem 0 5rem;
  background: var(--deux-cream);
}

.about-hero {
  text-align: center;
  margin-bottom: 4rem;
}

.about-hero h1 {
  margin: 0.6rem 0 1rem;
}

.lead {
  font-size: 1.2rem;
  max-width: 560px;
  margin: 0 auto;
  color: var(--deux-brown);
}

.about-content {
  margin-bottom: 3.5rem;
}

.about-grid {
  display: grid;
  gap: 2.75rem;
}
@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.about-grid h3 {
  margin-bottom: 0.9rem;
}

.about-grid p {
  margin-bottom: 1rem;
  font-size: 0.98rem;
}

.about-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 1px solid var(--deux-border);
}
</style>
