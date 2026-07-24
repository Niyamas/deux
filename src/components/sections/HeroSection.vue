<script setup lang="ts">
/**
 * HeroSection
 * Striking full-viewport hero with warm dark overlay,
 * elegant typography, and dual CTAs.
 * Uses the global .reveal animation class.
 */
</script>

<template>
  <section class="hero">
    <div class="hero-media">
      <img
        src="@/assets/images/greg-trowman-salon-unsplash.jpg"
        alt="Interior of Deux — warm, modern salon space with soft natural light"
        class="img-cover"
      />
      <div class="hero-overlay"></div>
    </div>

    <div class="hero-content">
      <div class="hero-inner reveal">
        <span class="eyebrow">A FAMILY TRADITION IN THE SUBURBS</span>
        <h1 class="hero-title">Deux</h1>
        <p class="hero-tagline">
          A sanctuary for the whole family.<br />
          Warmth, precision, and quiet luxury.
        </p>
        <div class="hero-ctas">
          <a href="#book" class="btn btn--primary">Reserve Your Visit</a>
          <a href="#experience" class="btn btn--dark">Discover the Experience</a>
        </div>
        <div class="hero-scroll">
          <span>Scroll to begin</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4V20M8 20L13 15M8 20L3 15" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* HERO — full bleed with elegant overlay */
.hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: var(--deux-cream-on-dark);
}

.hero-media {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(37, 32, 28, 0.55) 0%,
    rgba(37, 32, 28, 0.72) 45%,
    rgba(37, 32, 28, 0.82) 100%
  );
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 2rem 1.25rem 4rem;
  max-width: 820px;
}

.hero-title {
  font-size: 5.25rem;
  color: var(--deux-cream-on-dark);
  margin: 0.35rem 0 1.1rem;
  letter-spacing: -0.04em;
}

.hero-tagline {
  font-size: 1.25rem;
  line-height: 1.35;
  max-width: 520px;
  margin: 0 auto 2.25rem;
  color: var(--deux-cream-on-dark);
  opacity: 0.92;
}

.hero-ctas {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  align-items: center;
  margin-bottom: 3rem;
}

.hero-scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.6;
}

@media (min-width: 640px) {
  .hero-ctas {
    flex-direction: row;
    justify-content: center;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 6.5rem;
  }
}
</style>
