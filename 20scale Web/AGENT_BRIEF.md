# 20Scale Solutions – Website build brief (for the coding agent)

Build a static, bilingual (Sinhala primary / English), dark-theme marketing + quote site for 20Scale Solutions.

## Rules
1. All content comes from `/content/*.json`. Never hardcode copy, prices, contacts.
2. Every user-facing string is `{en, si}`. Language switcher required. Default = Sinhala.
3. `null` / empty array = hide that element or section. Never invent values, never show placeholders. Price `null` -> show "Get your quote".
4. Do NOT add claims that are not in the files (no "#1", certifications, uptime %, user counts, ratings, "AI-powered").
5. `pricing.calculator.devSampleRates_NOT_REAL` is for local UI testing only; remove it from production build.
6. Brand: see `brand.json` (dark only, cyan #00E5E5 on #00030B, subtle motion, respect prefers-reduced-motion, Noto Sans Sinhala).
7. No backend. Forms -> Google Apps Script URL (placeholder env var `FORMS_ENDPOINT`) -> Google Sheet + email. Payload columns in `site.json.forms.sheetColumns`.
8. Chatbot = rule-based tree from `chatbot.json` (no API calls).
9. Calculator: implement formula in `pricing.json`; outputs = PDF quote (print), place order request, custom requirement, consult team.
10. Use relative links only (no custom domain yet). Mobile-first.
11. The exclusions in `process-support.json` must appear on Terms page, Support/Process page and quote PDF footer.

## Build order
1. Layout, theme, i18n, nav, footer, WhatsApp button
2. Home
3. Pricing + calculator
4. Solutions, Hardware, Process, About, Contact, FAQ
5. Forms + Apps Script
6. Chatbot
7. Terms/Privacy, SEO (meta, sitemap, JSON-LD), Lighthouse pass
