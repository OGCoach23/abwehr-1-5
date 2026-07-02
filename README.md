# 1:5 Abwehr — SV Laim Handball Damen 1

Landingpage/One-Pager zum Abwehrsystem **1:5** (Trainingslager 2026). Fasst
Grundidee, die 8 Regeln, die Positions-Zuordnung und die 6 Erklärvideos aus dem
Workshop zusammen. Design im „Laimkademie-Look" (abgeleitet von der Harz-Guide-Seite).

## Stack

- [Astro 5](https://astro.build) · statische Ausgabe (`output: 'static'`)
- Self-hosted Fonts via Fontsource (Big Shoulders Display, Bricolage Grotesque, Geist Mono)
- Kein Framework, kein Tailwind — Design-Tokens + globale Utilities, komponenten-scoped CSS
- Deploy: Vercel (Auto-Deploy bei Push auf `main`)

## Entwicklung

```bash
npm install
npm run dev      # lokaler Dev-Server
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal vorschauen
```

## Struktur

```
src/
  pages/index.astro        Komposition der 6 Sektionen (One-Pager)
  layouts/Base.astro       <head>, Fonts, OG/Meta, Scroll-Progress + Reveal
  components/
    Hero.astro             Vollbild-Hero mit Übersichtsvideo
    StepVideo.astro        Click-to-play Video-Baustein (Portrait 3:4)
    Zuordnung.astro        Interaktive Positions-Zuordnung (Filter nach Rolle)
    QrPrint.astro          QR-Aushang für die Kabine
  data/zuordnung.json      Zuordnungstabelle (Rollen × Situationen)
  styles/tokens.css        Design-Tokens (Farben, Fonts, Spacing)
  styles/global.css        Basis-Styles + Utilities
  lib/qrcode.js            Offline-QR-Generator
public/videos/             6 MP4-Clips + JPG-Poster (grundbewegung, einlaeufer,
                           kreuzen, sperre, uebergang, alles)
```

## Videos

Portrait 3:4 (2048×2732), H.264/MP4 — direkt web-tauglich. Poster wurden mit
ffmpeg aus ~55 % der Clip-Länge generiert. Neue Videos einfach als
`name.mp4` + `name.jpg` in `public/videos/` ablegen und als `<StepVideo video="name" />`
einbinden.

## Domain / Deploy

`site` (in `astro.config.mjs`) und `FIXED_URL` (in `QrPrint.astro`) zeigen auf
`https://abwehr-1-5.vercel.app`. Bei eigener Domain an **beiden** Stellen ändern.

## Offen / TODO

- OG-Bild `public/og/abwehr-1-5-og.png` (1200×630) fehlt noch — referenziert in `Base.astro`.
