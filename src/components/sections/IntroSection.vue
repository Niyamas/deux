<script setup lang="ts">
/**
 * IntroSection
 * The philosophy / story section with text + supporting image.
 */
</script>

<template>
  <section class="section intro">
    <div class="container">
      <div class="intro-grid">
        <div class="intro-text reveal">
          <span class="eyebrow">Our Philosophy</span>
          <h2>Time slows the moment you step inside.</h2>
          <div class="prose">
            <p>
              Tucked in a peaceful suburb, Deux was created as a refuge from the noise —
              a place where the whole family feels at home. Every appointment is unhurried.
              Every cut, colour, and ritual is approached with intention and deep respect
              for your hair and your time.
            </p>
            <p>
              We believe true luxury is felt in the details: the warmth of the space,
              the softness of the light, the quiet confidence of our stylists, and the
              way we welcome every generation like family.
            </p>
          </div>
          <a href="#visit" class="btn">Plan Your Visit →</a>
        </div>

        <div class="intro-image reveal">
          <div class="img-frame img-hover-zoom">
            <img
              src="@/assets/images/deux-lighting.jpg"
              alt="Soft, warm lighting inside the Deux salon"
              class="img-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-grid {
  display: grid;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 900px) {
  .intro-grid {
    grid-template-columns: 1fr 1.05fr;
    gap: 4rem;
  }
}

.intro-text h2 {
  margin-bottom: 1.25rem;
}

.prose p {
  margin-bottom: 1.1rem;
}

.intro-image .img-frame {
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 25px 60px -15px rgb(0 0 0 / 0.2);
}
</style>
