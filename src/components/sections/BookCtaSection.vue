<script setup lang="ts">
/**
 * BookCtaSection
 * Strong closing call-to-action with contact options.
 * id="book" for nav and hero CTAs to target.
 */
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  familySize: ''
})

const submitted = ref(false)
const submitting = ref(false)

function handleSubmit() {
  submitting.value = true
  
  // Simulate API call for demo purposes
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
    
    // Reset form after showing success
    setTimeout(() => {
      form.value = { name: '', email: '', phone: '', message: '', familySize: '' }
      submitted.value = false
    }, 4200)
  }, 650)
}
</script>

<template>
  <section id="book" class="section book-cta">
    <div class="container">
      <div class="book-inner reveal">
        <div class="book-text">
          <span class="eyebrow">Ready when you are</span>
          <h2>Let’s begin your next chapter.</h2>
          <p class="book-sub">
            Appointments at Deux are by reservation only. We keep our schedule intimate so every guest — and every family member — receives our full attention.
          </p>
        </div>

        <div class="book-actions">
          <a href="tel:+15551234567" class="btn btn--primary">Call to Book</a>
          <a href="mailto:hello@deuxsalon.com" class="btn">Email the Salon</a>
        </div>

        <div class="form-divider">
          <span>or send us a quick note</span>
        </div>

        <form v-if="!submitted" class="inquiry-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <input 
              v-model="form.name" 
              type="text" 
              placeholder="Your name" 
              required 
            />
            <input 
              v-model="form.email" 
              type="email" 
              placeholder="Email address" 
              required 
            />
          </div>
          <div class="form-row">
            <input 
              v-model="form.phone" 
              type="tel" 
              placeholder="Phone (optional)" 
            />
            <input 
              v-model="form.familySize" 
              type="text" 
              placeholder="Family size / ages (e.g. 2 adults, 1 child)" 
            />
          </div>
          <textarea 
            v-model="form.message" 
            placeholder="Tell us a bit about what you're looking for — a family visit, kids' cuts, colour refresh, or something special..." 
            rows="3" 
            required
          ></textarea>

          <button type="submit" class="btn btn--primary" :disabled="submitting">
            {{ submitting ? 'Sending...' : 'Send Inquiry' }}
          </button>
        </form>

        <div v-else class="success-message">
          <p>Thank you! We’ve received your note and will reach out within 24 hours to welcome you and your family.</p>
        </div>

        <p class="book-note">
          New guests — and entire families — are warmly invited. We’ll send a short questionnaire before your first visit so we can welcome everyone properly.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.book-cta {
  background: var(--deux-beige);
  text-align: center;
}

.book-inner {
  max-width: 620px;
  margin: 0 auto;
}

.book-text h2 {
  margin-bottom: 1rem;
}

.book-sub {
  font-size: 1.05rem;
  margin-bottom: 2rem;
  color: var(--deux-brown);
}

.book-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.book-note {
  font-size: 0.85rem;
  color: var(--deux-brown-light);
  max-width: 380px;
  margin: 0 auto;
}

.form-divider {
  margin: 1.5rem 0 1.25rem;
  position: relative;
  text-align: center;
}

.form-divider span {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--deux-gold);
  background: var(--deux-beige);
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}

.form-divider:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
  background: var(--deux-border);
}

.inquiry-form {
  max-width: 520px;
  margin: 0 auto 1.5rem;
  text-align: left;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

@media (min-width: 480px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.inquiry-form input,
.inquiry-form textarea {
  width: 100%;
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--deux-border);
  background: var(--deux-cream);
  color: var(--deux-deep);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.95rem;
  border-radius: 2px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.inquiry-form input:focus,
.inquiry-form textarea:focus {
  outline: none;
  border-color: var(--deux-gold);
  box-shadow: 0 0 0 3px rgba(184, 151, 120, 0.12);
}

.inquiry-form textarea {
  resize: vertical;
  min-height: 78px;
  margin-bottom: 0.75rem;
}

.inquiry-form .btn {
  width: 100%;
  margin-top: 0.25rem;
}

.inquiry-form .btn:disabled {
  opacity: 0.7;
  cursor: wait;
}

.success-message {
  max-width: 420px;
  margin: 0 auto 1.5rem;
  padding: 1rem 1.25rem;
  background: var(--deux-cream);
  border: 1px solid var(--deux-gold-light);
  color: var(--deux-deep);
  font-size: 0.95rem;
  line-height: 1.5;
}

.success-message p {
  margin: 0;
}
</style>
