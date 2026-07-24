import { onMounted, onUnmounted } from 'vue'

/**
 * Composable for scroll-triggered reveal animations.
 * Adds 'is-visible' class to elements with 'reveal' class when they enter the viewport.
 * Used across section components for consistent, smooth entrance animations.
 */
export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    // Observe any .reveal elements present in the document (works great for composed sections)
    document.querySelectorAll('.reveal').forEach((el) => {
      observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
