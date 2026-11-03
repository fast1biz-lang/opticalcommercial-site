# opticalcommercial.com

Static company website for Optical Commercial International LLC (Oman), in English and Arabic.
Google Play and Apple Developer organization accounts need a live website on the company domain
with a privacy policy; this is it.

```
index.html, privacy.html, terms.html      English
ar/index.html, ar/privacy.html, ar/terms.html   Arabic (RTL)
assets/style.css, assets/logo.svg
robots.txt, sitemap.xml
```

No build step: any static host serves the folder as is.

## Publish on Cloudflare Pages (free)

1. dash.cloudflare.com -> Workers & Pages -> Create -> Pages -> Upload assets
   (or "Connect to Git": repository cyperio, build command empty, output directory `company-site`).
2. Project -> Custom domains -> add `opticalcommercial.com` and `www.opticalcommercial.com`.
   If the domain's DNS is on Cloudflare the records are created automatically; otherwise add the
   CNAME records Cloudflare shows at the domain registrar.

## Verify in Google Search Console (needed by Play Console)

1. search.google.com/search-console -> Add property -> Domain -> `opticalcommercial.com`.
2. Add the `google-site-verification=...` TXT record it shows to the domain's DNS, then Verify.
3. Use the same Google account that owns the Play Console developer account.

## Before publishing

- Privacy Policy and Terms are general templates; have them reviewed by a lawyer in Oman.
- When an app collects something not covered here, add an app-specific section or page and link
  it from the app's store listing.
