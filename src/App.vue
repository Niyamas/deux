<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import SiteFooter from './components/SiteFooter.vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <!-- Elegant persistent navigation -->
  <nav class="site-nav">
    <div class="nav-inner">
      <RouterLink to="/" class="nav-logo" @click="closeMenu">
        <img 
          src="@/assets/images/deux-logo.jpg" 
          alt="Deux" 
          class="logo-img"
        />
        <span class="nav-tagline">For every generation</span>
      </RouterLink>

      <div class="nav-links">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/services" class="nav-link">Services</RouterLink>
        <RouterLink to="/about" class="nav-link">The Salon</RouterLink>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#visit" class="nav-link">Visit</a>
      </div>

      <div class="nav-actions">
        <a href="#book" class="btn btn--primary btn--small">Book for the Family</a>
        <button 
          class="hamburger" 
          :class="{ open: isMenuOpen }" 
          @click="toggleMenu" 
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ open: isMenuOpen }" v-show="isMenuOpen">
      <div class="mobile-menu-inner">
        <RouterLink to="/" class="mobile-link" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/services" class="mobile-link" @click="closeMenu">Services</RouterLink>
        <RouterLink to="/about" class="mobile-link" @click="closeMenu">The Salon</RouterLink>
        <a href="#experience" class="mobile-link" @click="closeMenu">Experience</a>
        <a href="#visit" class="mobile-link" @click="closeMenu">Visit</a>
        <a href="#book" class="btn btn--primary mobile-cta" @click="closeMenu">Book for the Family</a>
      </div>
    </div>
  </nav>

  <RouterView />

  <SiteFooter />
</template>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 247, 242, 0.96);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--deux-border);
}

.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.9rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.nav-logo {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  line-height: 1;
}

.logo-img {
  height: 38px;
  width: auto;
  display: block;
}

.nav-tagline {
  display: block;
  font-size: 0.58rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--deux-gold);
  margin-top: 1px;
  line-height: 1;
}

.nav-links {
  display: none;
  align-items: center;
  gap: 2rem;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}

.nav-link {
  color: var(--deux-brown);
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--deux-deep);
}

.nav-link.router-link-exact-active {
  color: var(--deux-deep);
}

.nav-link.router-link-exact-active:after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--deux-gold);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

/* Compact booking CTA on mobile so it doesn't stretch the nav bar */
@media (max-width: 767px) {
  .nav-actions .btn {
    padding: 0.35rem 0.75rem;
    font-size: 0.65rem;
    letter-spacing: 0.03em;
    line-height: 1.2;
    white-space: normal;
    text-align: center;
    max-width: 7.5rem;
  }

  .nav-actions .btn:hover {
    transform: none;
  }
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--deux-deep);
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
  .hamburger {
    display: none;
  }
}

@media (min-width: 1024px) {
  .nav-inner {
    padding: 1.05rem 2.5rem;
  }
  .logo-img {
    height: 42px;
  }
  .nav-tagline {
    font-size: 0.6rem;
  }
}

/* Mobile menu - elegant, full-width dropdown */
.mobile-menu {
  display: none;
  background: var(--deux-cream);
  border-bottom: 1px solid var(--deux-border);
}

.mobile-menu.open {
  display: block;
}

.mobile-menu-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.25rem 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.mobile-link {
  font-size: 1rem;
  color: var(--deux-brown);
  padding: 0.25rem 0;
  transition: color 0.2s ease;
}

.mobile-link:hover {
  color: var(--deux-deep);
}

.mobile-cta {
  margin-top: 0.5rem;
  width: 100%;
  justify-content: center;
  padding: 0.85rem;
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none !important;
  }
}
</style>
