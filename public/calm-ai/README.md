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

Every primary CTA leads to `/prozess-check/`. The header button always reads "Prozess-Check".
Secondary CTA "Selbstcheck starten" (hero, fit section, final box, FAQ, footer) opens the Tally form "Ist dein Business bereit für KI?" at https://tally.so/r/EkygEl.

**Positioning:** the copy presents Maya as a Business Analyst and Product Owner who guides clients through the process (hero, Über mich, Ablauf, FAQ "Was ist deine Rolle im Projekt?").
**Hero visual:** an HTML process board (Anfrage, Gespräch, Angebot, Kund:in) with an analysis note, no colored background box.

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

## Putting it on calmaiconsulting.com (All-Inkl)

The site is plain HTML/CSS/JS with no database and no PHP, so it runs on every All-Inkl package.

1. **Before you go live:**
   - Fill in `impressum/index.html` and `datenschutz/index.html`. Replace every yellow `[placeholder]` and delete the yellow draft box.
   - Optional: add your GA4 Measurement ID in `assets/js/consent.js` (see below).
2. **Domain and folder in KAS:** log in at https://kas.all-inkl.com, open **Domain**, and check which folder (Zielverzeichnis) `calmaiconsulting.com` points to, e.g. `/calmaiconsulting.com/`. Change it there if needed.
3. **FTP access:** in KAS go to **FTP** and create an FTP user for that folder (or use the main account). Note the server (e.g. `wXXXXXX.kasserver.com`), username and password.
4. **Upload:**
   - Open FileZilla, connect using **SFTP** or **FTP over TLS**, and open the target folder.
   - Upload **the contents** of `calm-ai/`: `index.html`, `404.html`, `robots.txt`, `sitemap.xml`, `llms.txt`, `.htaccess`, and the folders `assets/`, `prozess-check/`, `impressum/` and `datenschutz/`. You don't need to upload `README.md`.
   - `.htaccess` starts with a dot and is hidden by default. In FileZilla, enable **Server > Versteckte Dateien anzeigen** first.
5. **SSL:** in KAS go to **Domain > bearbeiten > SSL-Schutz**, choose **Let's Encrypt** and save. The `.htaccess` then forwards every visitor to https automatically.
6. **Test:**
   - Pages: https://calmaiconsulting.com, `/prozess-check/`, `/impressum/`, `/datenschutz/`, and a non-existent page, which should show the 404 page.
   - Check the site on a phone as well.
7. **Google Search Console:**
   - Add the domain at https://search.google.com/search-console. Verify it with a DNS TXT record, which you add in KAS under **Tools > DNS-Einstellungen**.
   - Submit `https://calmaiconsulting.com/sitemap.xml`.
   - Optional: do the same in Bing Webmaster Tools. ChatGPT search also uses Bing results.

To update the site later, edit the file and upload only that file again.

## Google Analytics 4

1. **Create a property:**
   - Go to https://analytics.google.com and click **Verwaltung > Erstellen > Property**. Use time zone Germany and currency EUR.
   - Add a **Web data stream** for `https://calmaiconsulting.com` and copy the **Mess-ID** (`G-XXXXXXXXXX`).
2. **Settings in GA4:**
   - **Datenaufbewahrung:** 2 or 14 months, as stated in the Datenschutzerklärung.
   - Leave Google Signals **switched off**.
   - Accept the data processing terms (Auftragsverarbeitung) under **Verwaltung > Kontodetails**.
3. **Connect the site:** in `assets/js/consent.js`, set `var GA_MEASUREMENT_ID = "G-XXXXXXXXXX";` and upload that file.
4. **Consent banner:** the page then shows a banner with "Ablehnen" and "Akzeptieren". Analytics loads **only after "Akzeptieren"**, and visitors can change their choice under "Cookie-Einstellungen" in the footer. While the ID is empty, there is no banner and no tracking.
5. **Events sent automatically:**
   - `cta_prozess_check` (click on a Prozess-Check button)
   - `selbstcheck_click`
   - `calendly_open` (calendar loaded on the booking page)
   - `calendly_direct_click`
6. **Key events:** mark `calendly_open` and `selbstcheck_click` as key events (Schlüsselereignisse) in GA4.

## GEO: optimized for Google and AI search (ChatGPT, Perplexity, Gemini, Claude)

- **Clear, quotable facts:** the "Calm AI kurz erklärt" block under the hero states what, for whom, how, and the first step.
- **Structured data (JSON-LD):** ProfessionalService with services, the founder as Person (Business Analystin / Product Owner), WebSite, and a FAQPage generated from the visible FAQ.
  - TODO: add the founder's full name in the `Person` block once the Impressum is final.
- **Crawlers:** `robots.txt` explicitly allows search engines and AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended).
- **`llms.txt`:** a short, plain-text summary of the business for AI assistants.
- **`sitemap.xml`:** list of pages; keep `lastmod` updated after bigger changes.
- **Off-site signals still to do:** a Google Business Profile, if you want to be found locally; identical name, description and link on LinkedIn and Instagram; and mentions or guest posts that link to the site. AI assistants rely heavily on these.

## Open items

- [ ] Impressum and Datenschutz: fill in the drafts (yellow placeholders) and have them checked
- [ ] GA4 Measurement ID in assets/js/consent.js
- [ ] Founder's full name in the JSON-LD "Person" block
- [ ] City / region, if local search matters (add to JSON-LD and the "Kurz erklärt" block)
- [ ] Review the "Das Ergebnis" wording
- [ ] Optional: YouTube video (script points are in the doc, "Video" tab)
- [ ] Optional: AI image for section 6 (prompt is in the doc)
- [ ] Optional: logo as SVG
- [ ] Later: English and Bulgarian versions
