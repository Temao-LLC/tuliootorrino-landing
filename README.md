# Túlio Otor­rinolaringologia – landing page

Simple Astro + React “islands” site for the private practice of
Dr. Túlio Oliveira Kalife.  It’s a multilingual (pt / en / es) one‑page
landing, with an about page and a gallery of the clinic.

## Features

* Hero with clinic background image.
* Animated list of services with spotlight effect and hover tool‑tips.
* About page with doctor bio and specialties.
* Hospitals section with rotating slideshow of affiliated hospitals.
* Contact section – address, phone, WhatsApp, website, hours, embedded
  Google Map and clinic photo.
* Appointment modal that builds a WhatsApp message using data from the
  form and `PUBLIC_WHATSAPP_NUMBER` environment variable.
* Gallery page with responsive grid and lightbox.
* Language switcher, header nav including “Contact” link, footer.
* Translations are stored in a single `translations.ts` file (keys per
  language).
* WhatsApp number injected into React via context (passed from Astro
  layout at build time).
* Minimal CSS (no Tailwind) with scoped styles in components.
* Some progressive enhancements: intersection observer animations,
  keyboard navigation in lightbox, service spotlight cycling, etc.

## Tech stack

* [Astro](https://astro.build/) for the shell/html.
* React for interactive components.
* TypeScript throughout.
* Vite dev server (via Astro).
* No CSS frameworks, just plain CSS in the `src/styles` folder plus a
  few `style` tags in components.
* Images served from `public/…`.

## Getting started

```bash
# clone & install
git clone <repo-url>
cd tuliootorrino-landing
npm install       # or yarn / pnpm

# copy .env example
cp .env.example .env
# set WhatsApp number (e.g. 5511971387148)
```

`.env` is read by Astro at build time; only the `PUBLIC_…` variables are
available in client code.

### Available scripts

```bash
npm run dev      # start dev server
npm run build    # produce production `dist/`
npm run preview  # preview built site locally
```

### Directory layout

```
src/
  components/
    AppointmentModal.tsx
    ContactSection.tsx
    GalleryContent.tsx
    Header.tsx
    HomeContent.tsx
    HospitalsSection.tsx
    AboutContent.tsx
    …other small pieces…
  context/
    WhatsAppContext.tsx     # provides number from layout
  i18n/
    LanguageContext.tsx     # hook/provider
    translations.ts         # all translation strings
  styles/
    global.css              # root CSS, layout resets, etc.
public/
  images/
    background/
      building.png
    clinica/                # clinic photos
    hospitals/              # hospital slide images
  icons/
    whatsapp.png
.astroturf… etc.
```

## Translations

Edit `src/i18n/translations.ts`.  Keys are referenced with `t('…')`;
language is switched via the context provider and persists in `localStorage`.

## Environment

Only one variable is required:

```text
PUBLIC_WHATSAPP_NUMBER=5511971387148
```

The value is injected server‑side and exposed through React context to
components that build WhatsApp URLs.  The formatted display number is
generated on the client.

## Deployment

Any static‑hosting service that understands Astro (Netlify, Vercel,
Cloudflare Pages, etc.) will work.  Make sure to set `PUBLIC_WHATSAPP_NUMBER`
in the service’s environment settings.

## Contributing

Simply fork/branch and open a PR.  No tests at the moment, everything is
UI‑focused.

---

Feel free to customise further: new gallery images go in
`public/images/clinica`, hospital slides in `public/images/hospitals`,
and translations can be added any time.