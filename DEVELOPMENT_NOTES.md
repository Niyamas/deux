# Deux Salon - Development Notes

**Project**: Vue 3 + Vite + TypeScript website for "Deux", an upscale, family-oriented hair salon in the suburbs.
**Goal**: Warm, striking, tranquil, modern, clean aesthetics with smooth animations. Family-friendly tone throughout (welcoming to all generations).

## Current State (as of last session)
- Fully functional home page with:
  - Elegant sticky nav (desktop + mobile hamburger menu)
  - Hero with family tagline
  - Philosophy / Intro
  - The Experience (Ritual, Cut, Colour) with reusable cards
  - Visual Gallery
  - Brand Promises
  - Testimonials (family-focused stories)
  - Visit / Contact info
  - Book section with interactive inquiry form (demo submission + success state)
- New `/services` page with expanded family-oriented offerings (Kids & Teens, Family Packages, Special Occasions, etc.)
- Updated `/about` page ("The Salon")
- Global elegant footer with family messaging
- Color system implemented in CSS:
  - `--deux-cream`: #FAF7F2 (main bg)
  - `--deux-deep`: #2C2522 (text/headings)
  - `--deux-gold`: #B89778 (accent)
  - Supporting warm beiges and neutrals
- All sections componentized under `src/components/sections/`
- Scroll reveal composable (`useScrollReveal.ts`)
- Uses provided images from `src/assets/images/`
- Family-oriented language infused in copy, alt texts, CTAs, and microcopy ("For every generation", multi-generational visits, etc.)
- Responsive, clean, upscale aesthetic preserved
- Builds cleanly, types pass, lint clean

## Known Placeholders (replace before client show)
- Location: "Willowbrook, [State] 00000" (14 Maple Lane)
- Phone: (555) 123-4567
- Email: hello@deuxsalon.com
- Any specific real services, pricing, team bios, or actual testimonials

## Next Steps / Ideas for Continuation
- Replace all placeholders with real salon details
- Add real services list + pricing from client
- Flesh out team/stylists section (photos + bios)
- Make booking form actually functional (e.g. emailjs, Formspree, or backend)
- Add lightbox or modal for gallery images
- Create additional pages (Journal/Blog, Contact standalone)
- Add Google Maps embed or directions on Visit section
- Optimize large images (vite-imagemin or manual compression)
- Add basic SEO (Open Graph, more meta, structured data)
- Testimonials carousel or real quotes
- Dark mode? (probably not needed)
- Analytics / booking calendar integration later
- E2E tests updates for new pages
- Favicon using the deux-logo

## Useful Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — lint + fix
- `npm run type-check` — TypeScript check

## Architecture Notes
- Sections are self-contained SFCs with their own styles
- Common utilities (`.btn`, `.reveal`, `.eyebrow`, containers) in `src/assets/base.css`
- HomeView acts as a thin composer
- Router uses lazy loading for non-home pages
- No extra UI libraries — pure Vue + CSS for maintainability

---

Ready to pick up whenever you're back. Just let me know what to tackle first!
