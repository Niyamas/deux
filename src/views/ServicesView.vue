<script setup lang="ts">
/**
 * ServicesView
 * Detailed offerings with a warm, family-friendly focus while maintaining upscale elegance.
 */
import { useScrollReveal } from '@/composables/useScrollReveal'
import { RouterLink } from 'vue-router'

useScrollReveal()
</script>

<template>
  <div class="services-page">
    <div class="container">
      <div class="services-hero">
        <span class="eyebrow">Our Offerings</span>
        <h1>Thoughtful care for every generation.</h1>
        <p class="lead">
          Every service at Deux is designed with intention — whether it’s a child’s first haircut, 
          a family colour day, or a restorative ritual for you. We take the time to understand your needs.
        </p>
      </div>

      <div class="services-grid">
        <!-- Service Card -->
        <div class="service-card reveal">
          <div class="service-header">
            <h3>The Ritual</h3>
            <span class="price">from $65</span>
          </div>
          <p class="service-desc">
            A deeply restorative wash and scalp treatment. Warm water, our signature botanical scents, 
            and unhurried hands. Perfect for adults and children alike.
          </p>
          <ul class="service-details">
            <li>Signature scalp massage</li>
            <li>Custom conditioning treatment</li>
            <li>Kids version available (gentle, fun experience)</li>
            <li>45–60 minutes</li>
          </ul>
          <p class="service-note">Ideal as a stand-alone or add-on to any service.</p>
        </div>

        <div class="service-card reveal">
          <div class="service-header">
            <h3>The Cut</h3>
            <span class="price">from $85</span>
          </div>
          <p class="service-desc">
            Precise, sculptural cutting tailored to your features, lifestyle, and how you want to feel. 
            From first haircuts to refined adult styles.
          </p>
          <ul class="service-details">
            <li>Personalized consultation</li>
            <li>Women’s, men’s &amp; children’s cuts</li>
            <li>Blow-dry &amp; style included</li>
            <li>First haircut ceremony for little ones</li>
          </ul>
          <p class="service-note">We welcome all ages — patience is our specialty.</p>
        </div>

        <div class="service-card reveal">
          <div class="service-header">
            <h3>The Colour</h3>
            <span class="price">from $145</span>
          </div>
          <p class="service-desc">
            Custom-blended colour that feels like a natural extension of you. Dimensional, rich, and 
            executed with the highest technical care for the whole family.
          </p>
          <ul class="service-details">
            <li>Full colour, highlights &amp; balayage</li>
            <li>Root touch-ups &amp; glosses</li>
            <li>Grey blending &amp; coverage</li>
            <li>Family colour days encouraged</li>
          </ul>
          <p class="service-note">We always do a thorough consultation first.</p>
        </div>

        <div class="service-card reveal">
          <div class="service-header">
            <h3>Family Packages</h3>
            <span class="price">from $220</span>
          </div>
          <p class="service-desc">
            Book together and enjoy special pricing. Perfect for siblings, parents + kids, or 
            multi-generational days. Everyone leaves feeling cared for.
          </p>
          <ul class="service-details">
            <li>Choose any combination of cuts &amp; rituals</li>
            <li>Coordinated scheduling</li>
            <li>Complimentary treats for the little ones</li>
            <li>Flexible for 2–5 family members</li>
          </ul>
          <p class="service-note">The best way to make hair day a family tradition.</p>
        </div>

        <div class="service-card reveal">
          <div class="service-header">
            <h3>Special Occasions</h3>
            <span class="price">from $110</span>
          </div>
          <p class="service-desc">
            Bridal parties, graduations, family portraits, or just because. We create looks that 
            photograph beautifully and feel wonderful.
          </p>
          <ul class="service-details">
            <li>Updos, waves &amp; special styling</li>
            <li>Bridal trial &amp; wedding day packages</li>
            <li>Group bookings for families &amp; parties</li>
            <li>Traveling stylist options available</li>
          </ul>
          <p class="service-note">Let us be part of your celebrations.</p>
        </div>

        <div class="service-card reveal">
          <div class="service-header">
            <h3>Kids &amp; Teens</h3>
            <span class="price">from $45</span>
          </div>
          <p class="service-desc">
            Gentle, patient care for our youngest guests. First cuts are celebrated, not rushed. 
            Teens love the cool styles and relaxed vibe.
          </p>
          <ul class="service-details">
            <li>Dry or wet cuts</li>
            <li>Fun, low-drama environment</li>
            <li>Styling tips for easy home care</li>
            <li>Parents welcome to stay throughout</li>
          </ul>
          <p class="service-note">We make haircuts something they actually look forward to.</p>
        </div>
      </div>

      <div class="services-cta reveal">
        <p>Ready to book for yourself or the whole crew?</p>
        <RouterLink to="/#book" class="btn btn--primary">Reserve Your Family Visit</RouterLink>
        <RouterLink to="/about" class="btn">Learn More About Us</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-page {
  padding: 4rem 0 5rem;
  background: var(--deux-cream);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.services-hero {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 3.5rem;
}

.services-hero h1 {
  margin: 0.5rem 0 1rem;
}

.lead {
  font-size: 1.15rem;
  color: var(--deux-brown);
}

.services-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.service-card {
  background: var(--deux-beige);
  padding: 1.75rem 1.5rem;
  border: 1px solid var(--deux-border);
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.85rem;
  gap: 1rem;
}

.service-header h3 {
  margin: 0;
  font-size: 1.35rem;
}

.price {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.9rem;
  color: var(--deux-gold);
  white-space: nowrap;
}

.service-desc {
  margin-bottom: 1rem;
  color: var(--deux-deep);
}

.service-details {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  font-size: 0.9rem;
  color: var(--deux-brown);
}

.service-details li {
  padding: 0.2rem 0;
  position: relative;
  padding-left: 1.1rem;
}

.service-details li:before {
  content: '–';
  position: absolute;
  left: 0;
  color: var(--deux-gold);
}

.service-note {
  font-size: 0.85rem;
  color: var(--deux-gold-dark);
  font-style: italic;
  margin: 0;
}

.services-cta {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--deux-border);
}

.services-cta p {
  margin-bottom: 1.25rem;
  color: var(--deux-brown);
}

.services-cta .btn + .btn {
  margin-left: 0.75rem;
}
</style>
