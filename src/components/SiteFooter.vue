<script setup lang="ts">
/**
 * Site Footer
 * Warm, family-oriented closing with contact and subtle branding.
 */
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="@/assets/images/deux-logo.jpg" alt="Deux" class="footer-logo-img" />
            <span class="footer-tag">For every generation</span>
          </div>
          <p class="footer-tagline">
            An intimate, family-owned salon in the suburbs where every guest is treated like family.
          </p>
        </div>

        <div class="footer-links">
          <div>
            <div class="footer-heading">Explore</div>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/services">Services</RouterLink>
            <RouterLink to="/about">The Salon</RouterLink>
            <a href="/#experience">The Experience</a>
          </div>
          <div>
            <div class="footer-heading">Visit</div>
            <a href="/#visit">Location &amp; Hours</a>
            <a href="/#book">Book an Appointment</a>
            <RouterLink to="/about">Our Story</RouterLink>
          </div>
        </div>

        <div class="footer-contact">
          <div class="footer-heading">Reach Us</div>
          <p>
            14 Maple Lane<br />
            Willowbrook, [State] 00000
          </p>
          <p>
            <a href="tel:+15551234567">(555) 123-4567</a><br />
            <a href="mailto:hello@deuxsalon.com">hello@deuxsalon.com</a>
          </p>
          <p class="footer-note">Family appointments always welcome.</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} Deux. Warmth, precision, and quiet luxury for the whole family.</p>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.site-footer {
  background: var(--deux-deep);
  color: var(--deux-cream-on-dark);
  padding: 3.5rem 0 2rem;
  font-size: 0.9rem;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-grid {
  display: grid;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 3rem;
  }
}

.footer-brand {
  max-width: 320px;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.footer-logo-img {
  height: 32px;
  width: auto;
  margin-bottom: 4px;
}

.footer-tag {
  font-size: 0.58rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--deux-gold-light);
}

.footer-tagline {
  color: rgba(245, 240, 232, 0.75);
  line-height: 1.5;
  font-size: 0.9rem;
}

.footer-heading {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--deux-gold);
  margin-bottom: 0.75rem;
}

.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.footer-links a {
  display: block;
  color: rgba(245, 240, 232, 0.75);
  margin-bottom: 0.4rem;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--deux-cream-on-dark);
}

.footer-contact p {
  margin: 0 0 0.5rem;
  color: rgba(245, 240, 232, 0.75);
  line-height: 1.5;
}

.footer-contact a {
  color: var(--deux-cream-on-dark);
  transition: color 0.2s;
}

.footer-contact a:hover {
  color: var(--deux-gold-light);
}

.footer-note {
  font-size: 0.8rem;
  color: var(--deux-gold-light) !important;
  margin-top: 0.6rem;
}

.footer-bottom {
  border-top: 1px solid rgba(245, 240, 232, 0.15);
  padding-top: 1.25rem;
  text-align: center;
  font-size: 0.75rem;
  color: rgba(245, 240, 232, 0.55);
}

.footer-bottom p {
  margin: 0;
}
</style>
