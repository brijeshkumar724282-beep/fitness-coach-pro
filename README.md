# Forge Coaching — Fitness Coach Template

Energetic dark theme site for a fitness coach: programs, class booking, pricing,
client stories, contact plus BMI check. One solid volt accent (`#D6F93C`) on near
black. No gradients, no emojis.

## Features

1. **Hero** with animated counters, trial CTA, live week card
2. **Programs grid** (strength, HIIT, yoga, nutrition) with accessible detail modal
3. **Class schedule** week view, book or cancel spots, saved in `localStorage`
4. **Pricing plans** plus testimonials with animated before/after score bars
5. **Contact** trial form (browser only demo) plus BMI estimate calculator, footer

## Run

```bash
npm install && npm run dev
```

Build:

```bash
npm install && npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customize

- Colors and type: `tailwind.config.js` (`ink`, `panel`, `volt`, `bone`)
- Content: `src/data.js` (stats, programs, schedule, plans, stories)
- Sections: `src/components/` (Navbar, Hero, Programs, Schedule, Pricing, Testimonials, Contact, Footer)
- Booking storage key: `forge-bookings-v1` in `src/components/Schedule.jsx`

## Assumptions

- Bookings and the contact form are browser only demos; no backend included.
- Before/after bars are illustrative progress scores, not real client photos.
- BMI result is an estimate, not medical advice.
