# Supreeth Chittaluri — Portfolio

Version 1 of Supreeth Chittaluri’s personal software engineering portfolio.

Built with Next.js, TypeScript, and Tailwind CSS. The page stays intentionally lightweight: project cards use native HTML details/summary interactions (hover to expand on desktop, tap on mobile), so the work remains accessible without client-side state.

Layout: floating pill nav, full-height intro, then Projects / Education / Experiences / Skills / About sections. Serif headings (Libre Baskerville), system sans body, dark by default.

## Local development

```bash
npm install
npm run dev
```

## Before the next content pass

Search the source for `[FILL IN:` / the `<Fill>` component in `app/page.tsx` — every unfinished spot is marked. Outstanding:

- Intro: personal one-line sentence.
- Projects: verified repository / demo URLs for MiniRedis, Undrift, a2transit; screenshots for each card.
- Education: relevant coursework; earlier school (or delete that card).
- Experiences: OneStream dates / location / description, plus two more roles (or delete them).
- About Me: replace the six placeholder tiles with real photos + one-line captions (uses CSS `columns` masonry).
- Skills: icons load from the devicon CDN — swap the list in `app/page.tsx` to taste.
