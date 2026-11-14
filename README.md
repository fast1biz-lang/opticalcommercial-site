# opticalcommercial.com

Static website of Optical Commercial International LLC (Oman), in English and Arabic.
Google Play and Apple Developer organization accounts need a live website on the company
domain with a privacy policy; this is it.

```
index.html, privacy.html, terms.html            English
ar/index.html, ar/privacy.html, ar/terms.html   Arabic (RTL)
apps/cyperio/index.html, apps/cyperio/privacy.html   Cyperio VPN app page and its privacy policy
assets/                                         style.css, slider.js, logo, Cyperio icon, slide art (SVG)
robots.txt, sitemap.xml
```

No build step. Netlify deploys every push to `main` (settings in `netlify.toml`).
On the free Netlify plan a deploy only builds when the latest commit on `main` is authored
by the repository owner's GitHub account (fast1biz-lang); commits by other authors are
blocked as "unrecognized Git contributor" and the site stays on the previous deploy.

DNS for opticalcommercial.com is at Squarespace: `@` A 75.2.60.5, `www` CNAME to the
Netlify site; email (Google Workspace MX/SPF/DKIM) is untouched.

Privacy Policy and Terms are general templates; have them reviewed by a lawyer in Oman.
