# Calm AI Landing Page

A one-page landing page for **calmaiconsulting.com**. Its single goal is to get visitors to book the **Prozess-Check**. It's built in plain HTML, CSS and JS: no build step, no framework, and no Google Fonts or tracking requests.

> This README does not need to be uploaded to your web host.

## Files

```
calm-ai/
├── index.html              ← Landing page (one-pager, menu = anchors)
├── prozess-check/index.html← Booking page with Calendly (loads only after a click)
├── impressum/index.html    ← TODO: insert legal text before going live
├── datenschutz/index.html  ← TODO: insert legal text before going live
└── assets/
    ├── css/style.css       ← Design tokens (colors, font) at the top
    ├── js/main.js          ← Menu, scroll effects, video and Calendly loading
    ├── fonts/              ← Sora (self-hosted, SIL Open Font License)
    └── img/                ← calmai-logo.png, founder.jpg, favicon.svg
```

## Page structure (source: Google Doc "Calm AI Landing Page", tab "Landing Page design")

| # | Section | Anchor | Background | CTA |
|---|---|---|---|---|
| 1 | Hero, label "Calm AI" | `#top` | Cream `#F8F9F5` | Deinen Prozess-Check vereinbaren |
| – | Video (optional, 45 to 75 s) | – | Cream | – (hidden until a YouTube ID is set) |
| 2 | Über mich | `#ueber-mich` | Stone `#F5F5F1` | Lass uns über deine Prozesse sprechen |
| 3 | Die Herausforderung | `#herausforderung` | Mint `#D9F0EF` | Deinen Prozess-Check starten |
| 4 | So arbeiten wir zusammen (4 steps) | `#ablauf` | Cream | Deinen nächsten Prozessschritt klären |
| 5 | Das Ergebnis (6 boxes, 2 colors) | `#ergebnis` | White | – |
| 6 | So funktioniert es: process graphic, 3 use cases, banner | `#kundenprozess` | Stone | Lass uns deinen Kundenprozess besprechen |
| 7 | Ist Calm AI das Richtige für dich? | `#fuer-wen` | Cream | Deinen Prozess-Check vereinbaren |
| + | Auch möglich: Team-Trainings, Software (in Entwicklung) | – | Stone | – |
| + | FAQ | `#faq` | Cream | – |
| + | Final CTA box (gradient) | – | Cream | Deinen Prozess-Check vereinbaren |

Every CTA leads to `/prozess-check/`. The header button always reads "Prozess-Check".

**Changes compared to the doc:**
- **Das Ergebnis:** the doc listed the problems from section 3 again here. The boxes have been rewritten as outcomes ("Follow-ups passieren rechtzeitig" and so on). Please review them.
- **Social proof:** the "20+ Kund:innen" line was left out because there are no customers yet. Only the italic line under the button stays.
- **Section 6:** the process graphic is built in HTML (sources, then the Calm AI system, then 3 steps), so it stays sharp and readable on mobile. A comment in `index.html` explains how to swap in an AI-generated image later.
- **Additions:** a FAQ (adapted from the older PDF version) and a small "Auch möglich" row for trainings and the software.
- **Voice:** "Ich" for the founder and "wir" for the joint work with the client.
- **No em dashes** anywhere in the copy.

## Trends applied (research, October 2026)

1. **Calm design instead of attention-grabbing design.** Lots of white space, muted colors, no visual noise, and gentle scroll animations that switch off when the visitor's system requests reduced motion. ([Eidos Design](https://eidosdesign.substack.com/p/calm-technology-design), [GraphicDesignJunction](https://graphicdesignjunction.com/2026/08/did-the-2026-web-design-trends-predictions-come-true/))
2. **Human rather than generic AI.** A real founder portrait, no robot imagery, and plain language about the problem instead of a feature list. ([DesignRush](https://www.designrush.com/agency/website-design-development/trends/web-design-trends))
3. **One primary call to action.** Every button leads to the same next step, the header always shows it, and the label says exactly what happens. ([Knapsack Creative](https://knapsackcreative.com/blog-industry/consulting-website-cta-guide))
4. **The page as a conversion system.** The order goes problem → method → result → fit → objections (FAQ). Each section answers one question. ([We-Interactive](https://we-interactive.com/landing-page-design-best-practices-2026-the-performance-driven-guide))
5. **Mobile first and fast.** Self-hosted font, no frameworks, about 65 KB of code. The process bar becomes a vertical timeline on mobile.
6. **Readable by machines and AI search.** Semantic HTML, structured data (schema.org), and meta and Open Graph tags.
7. **Privacy built in.** Calendly and YouTube load only after a click, and fonts load from your own server, which usually means no cookie banner is needed as long as no tracking is added (have this checked legally).

## Editing

- **Text:** edit `index.html` directly. Each section is marked with a comment (`<!-- ============ 3. DIE HERAUSFORDERUNG ============ -->`).
- **Colors:** change the tokens at the top of `assets/css/style.css`.
- **Video:** in `index.html`, add the YouTube ID to the `.video` section (`data-youtube-id="abc123"`) and remove `hidden`.
- **Reusing on other landing pages (e.g. Mind Your Team):** copy the `assets/` folder. All blocks (`.label`, `.btn`, `.box`, `.steps`, `.feature`, `.case`, `.banner`, `.qualify`, `.faq`) and the icon set at the top of `index.html` can be reused.
- **Logo:** `assets/img/calmai-logo.png` is only 188×45 px. An SVG or a version at least 600 px wide would look sharper on high-resolution screens.

## Putting it on calmaiconsulting.com (IONOS / Strato / All-Inkl)

1. **Fill in the legal texts** in `impressum/index.html` and `datenschutz/index.html` (replace the yellow TODO box). The privacy policy should cover the hosting provider, Calendly (USA), and YouTube if you add the video.
2. **Find your FTP/SFTP login:**
   - **IONOS:** Hosting → SFTP & SSH → create a user.
   - **Strato:** Paket → Sicherheit/SFTP.
   - **All-Inkl:** KAS → FTP → create an FTP user.
3. **Connect** with FileZilla (free) using the server, username and password.
4. **Find the target folder:** check which folder the domain points to. On IONOS this is under Domains → domain → "Ziel/Verwendung". On All-Inkl it's under Domain → "Zielverzeichnis".
5. **Upload the contents** of `calm-ai/` (not the folder itself) into that target folder, so that `index.html` sits directly inside it. If an old `index.html` or `index.php` is there, back it up first.
6. **Turn on SSL / HTTPS:** IONOS and Strato include it. On All-Inkl, use KAS → Domain → SSL → Let's Encrypt. Enable "HTTPS erzwingen" if available.
7. **Test** at https://calmaiconsulting.com, https://calmaiconsulting.com/prozess-check/, and on a phone.

To make changes later, edit the file and upload it again. Only the changed file needs to be re-uploaded.

## Open items

- [ ] Impressum and Datenschutz texts (Maya)
- [ ] Review the "Das Ergebnis" wording
- [ ] Optional: YouTube video (script points are in the doc, "Video" tab)
- [ ] Optional: AI image for section 6 (prompt is in the doc)
- [ ] Optional: logo as SVG
- [ ] Later: English and Bulgarian versions
