# Performance, accessibility and SEO

## Changes

- Routes load their own JavaScript and CSS rather than downloading every page on arrival.
- The build pre-renders all sitemap pages using the same Vue components as the browser. Page styles are included in the HTML, and Vue hydrates it when ready.
- Each page has a primary heading, canonical URL, description and WebPage structured data. Band and tour pages use their own images in social previews.
- Unknown URLs show a not-found page rather than redirecting to Home. The static 404 page is marked noindex.
- Image references use existing WebP versions, with AVIF picture sources retained. The original source files stay in public; deployment pruning now preserves referenced assets.
- The About illustration has a smaller WebP copy. Band gallery photos load lazily, while the band profile hero is prioritized.
- Keyboard access includes a skip link, visible focus indicators, modal focus trapping/restoration, mobile menu state, and a background-video pause button. Reduced-motion preferences are respected.
- Fixed broken font/background paths, global scroll locking and About/Contact width overflow.

## Verification

The existing deployment command is unchanged:

```sh
npm run deploy
```

For local validation without publishing:

```sh
npm run build
node scripts/check-built-site.mjs
npx eslint src scripts vite.config.js
```

The static checker verifies sitemap uniqueness, generated content, primary headings, canonical URLs, structured data, local links/assets, scoped styles and the noindex 404 page.

Measured build payloads: Home JavaScript fell from approximately 73 KB to 48 KB gzip, excluding third-party scripts. The About illustration fell from approximately 1.4 MB to 356 KB. These are asset-size measurements, not Lighthouse or real-user speed scores.

## Remaining work

- Test the deployed site with PageSpeed Insights and Search Console. Check actual mobile Core Web Vitals and indexing after deployment; local tests cannot establish these.
- Third-party players, ticketing, subscription forms and external fonts still have their own network cost. Their external functionality was excluded from the local browser regression checks.
- Event descriptions primarily displayed inside modals would benefit from dedicated, content-rich event URLs if organic event search is a priority.
- Keep event dates, venue details, band biographies and ticket availability current. Improved technical SEO alone cannot guarantee traffic.
- If an asset is renamed, rerun the build checker. Do not delete an original solely because an optimized copy exists without updating all references.
