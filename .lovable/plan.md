## Diagnostic

PageSpeed raportează `NO_LCP` și FCP=3,5s. Cauzele principale în cod:

1. **Google Fonts blochează render-ul** — `<link rel="stylesheet" href="fonts.googleapis.com/...">` în `__root.tsx` este blocking. Până se descarcă CSS-ul de font + fișierele woff2, nu se pictează nimic → FCP 3,5s.
2. **`animate-rise` pe H1-ul hero** — clasa are `opacity: 0 → 1` cu `animation-fill-mode: both`. Elementul candidat LCP (blocul cu `<h1>` + preț) pornește invizibil. Lighthouse-ul, când rulează pe o pagină în mare parte animată în opacity, poate să nu înregistreze un LCP valid → `NO_LCP`.
3. **`animate-pulse` pe stele** — irelevant pentru LCP, dar mai bine dezactivat pe prefers-reduced-motion (deja făcut prin pulse implicit Tailwind, OK).

## Modificări propuse

### 1. `src/routes/__root.tsx` — încarcă fonturile non-blocking

Înlocuiește tag-ul `<link rel="stylesheet" href="...googleapis...">` cu tehnica preload+swap:

```ts
{
  rel: "preload",
  as: "style",
  href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
},
{
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
  media: "print",
  onLoad: "this.media='all'",
},
```

Efect: browser-ul pictează imediat cu fallback fonts, apoi swap la Sora/Inter. FCP scade cu ~1–2s.

### 2. `src/styles.css` — hero fără opacity la start

Fac ca hero-ul (bloc LCP) să fie vizibil imediat, dar păstrez animația subtilă doar pe translate:

```css
@keyframes rise {
  from { transform: translateY(12px); }
  to { transform: translateY(0); }
}
.animate-rise {
  animation: rise 0.6s ease-out both;
}
```

Elimin `opacity: 0 → 1`. Elementul e pictat de la primul frame → Lighthouse detectează LCP.

### 3. `src/routes/index.tsx` (leaf) — preload font principal woff2

Adaug în `head().links` un `<link rel="preload" as="font" type="font/woff2" crossorigin>` către fișierul woff2 al variantei Sora 700 (folosită de H1). URL-ul îl extrag din CSS-ul Google Fonts descărcat o dată. Efect: LCP scade suplimentar.

Dacă preferi să nu depindem de URL-ul intern Google Fonts (se poate schimba), sar peste pasul 3 — 1+2 sunt suficiente pentru a rezolva `NO_LCP` și a aduce FCP sub 2s.

## Verificare

- `bun run build` să treacă.
- După publish, re-rulăm PageSpeed. Așteptare: LCP < 2,5s, FCP < 1,8s, scor Performance ≥ 95.

Confirmă și trec în build mode. Vrei să includ și pasul 3 (preload woff2 specific), sau doar 1+2?