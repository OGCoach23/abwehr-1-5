import { defineConfig } from 'astro/config';

// Statische Seite, Deploy auf Vercel (kein Adapter nötig für static output).
export default defineConfig({
  output: 'static',
  // Aktive Domain (für OG-/Canonical-URLs). Bei eigener Domain hier umstellen.
  site: 'https://abwehr-1-5.vercel.app',
  build: {
    inlineStylesheets: 'auto',
  },
});
