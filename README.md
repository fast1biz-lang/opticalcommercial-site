# opticalcommercial.com

Static website of Optical Commercial International LLC (Oman), in English and Arabic.
Google Play and Apple Developer organization accounts need a live website on the company
domain with a privacy policy; this is it.

```
index.html, privacy.html, terms.html            English
ar/index.html, ar/privacy.html, ar/terms.html   Arabic (RTL)
assets/                                         style.css, slider.js, logo and slide art (SVG)
robots.txt, sitemap.xml
```

No build step. Netlify deploys every push to `main` (settings in `netlify.toml`).
DNS for opticalcommercial.com is at Squarespace: `@` A 75.2.60.5, `www` CNAME to the
Netlify site; email (Google Workspace MX/SPF/DKIM) is untouched.

Privacy Policy and Terms are general templates; have them reviewed by a lawyer in Oman.
