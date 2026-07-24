<script setup lang="ts">
/**
 * VisitSection
 * Practical info: location, hours, contact + supporting image.
 * Note: Contact details are currently placeholders — see user for real data.
 */
</script>

<template>
  <section id="visit" class="section visit">
    <div class="container">
      <div class="visit-grid">
        <div class="visit-info reveal">
          <span class="eyebrow">Visit Us</span>
          <h2>Find your way to calm.</h2>

          <div class="visit-details">
            <div>
              <div class="detail-label">Location</div>
              <p>14 Maple Lane<br />Willowbrook, [State] 00000</p>
              <p class="small">A quiet, tree-lined suburb 25 minutes from downtown. A welcoming space for the whole family.</p>
            </div>
            <div>
              <div class="detail-label">Hours</div>
              <p>
                Tue – Fri &nbsp; 9:00am – 6:00pm<br />
                Sat &nbsp; 8:30am – 4:00pm<br />
                Closed Sunday &amp; Monday
              </p>
              <p class="small">Family appointments and multi-generational visits are warmly encouraged.</p>
            </div>
            <div>
              <div class="detail-label">Reach Us</div>
              <p>
                <a href="tel:+15551234567">(555) 123-4567</a><br />
                <a href="mailto:hello@deuxsalon.com">hello@deuxsalon.com</a>
              </p>
            </div>
          </div>

          <a href="#book" class="btn btn--primary">Book Your Appointment</a>
        </div>

        <div class="visit-image reveal img-hover-zoom">
          <img
            src="@/assets/images/deux-hair-coloring.jpg"
            alt="A quiet moment of colour work at Deux"
            class="img-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.visit-grid {
  display: grid;
  gap: 3rem;
  align-items: start;
}

@media (min-width: 900px) {
  .visit-grid {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 4.5rem;
  }
}

.visit-details {
  display: grid;
  gap: 1.85rem;
  margin: 2rem 0 2.25rem;
}

.detail-label {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--deux-gold);
  margin-bottom: 0.4rem;
}

.visit-details p {
  color: var(--deux-deep);
  margin: 0;
}

.visit-details .small {
  font-size: 0.85rem;
  color: var(--deux-brown);
  margin-top: 0.35rem;
}

.visit-image {
  border: 1px solid var(--deux-border);
}
</style>
