<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

// Activate scroll-reveal animations for all .reveal elements across sections
useScrollReveal()

// Import section components
import HeroSection from '@/components/sections/HeroSection.vue'
import IntroSection from '@/components/sections/IntroSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import GallerySection from '@/components/sections/GallerySection.vue'
import PromiseSection from '@/components/sections/PromiseSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import VisitSection from '@/components/sections/VisitSection.vue'
import BookCtaSection from '@/components/sections/BookCtaSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <IntroSection />
    <ExperienceSection />
    <GallerySection />
    <PromiseSection />
    <TestimonialsSection />
    <VisitSection />
    <BookCtaSection />
  </main>
</template>

<style scoped>
/* HomeView acts purely as a page composer.
   All section-specific styles and layout live in their respective components.
   Global styles (btn, .reveal, .eyebrow, .img-hover-zoom, etc.) are in base.css. */
</style>
