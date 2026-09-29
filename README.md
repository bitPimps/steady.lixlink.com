# steady.lixlink.com

Brochure site for **Steady: Sobriety & Habit Tracker**. A static site with no build
step and no framework that introduces the app and hosts a self-help FAQ that
in-app "Contact support" / help links can point to.

## Pages

- `index.html`: landing page: what Steady does, features, privacy, pricing, download CTA
- `faq.html`: searchable Help Center (getting started, the clock & check-ins,
  notifications, privacy, backup, exporting/deleting data, premium, troubleshooting)
- `privacy.html`: privacy policy (useful for App Store / Play Store listing requirements)
- `404.html`: not-found page

## Structure

```
assets/css/style.css   shared stylesheet
assets/js/main.js      mobile nav toggle + FAQ search/filter
assets/img/            favicons, app icon, og-image.jpg (1200x630 social share card)
assets/img/screens/    app screenshots, converted from the store screenshots
```

## Deployment

Hosted with GitHub Pages, deploying from a branch: **Settings → Pages → Build
and deployment → Source** is **Deploy from a branch**, `main`, `/ (root)`.
Every push to `main` publishes the site; there's no deploy workflow.

The custom domain `steady.lixlink.com` is declared in the `CNAME` file and set
under **Settings → Pages → Custom domain**, with a DNS record at the domain
provider pointing to GitHub Pages.

## Checks

`.github/workflows/check.yml` runs [lychee](https://github.com/lycheeverse/lychee)
on every PR and push to `main`. It fails if any page links to a missing page,
image, or `#anchor`. It only checks internal links. To run it locally:

```
lychee --offline --root-dir "$PWD" --index-files index.html --include-fragments '*.html'
```

Dependabot (`.github/dependabot.yml`) opens a monthly PR to bump the GitHub
Actions versions used by the workflows.

## Updating content

This is plain HTML/CSS, so edit the `.html` files directly. Keep FAQ answers
grounded in what the app actually does (check `bitPimps/steady` if a feature
changes) so the Help Center doesn't drift from the real app behavior.

The images in `assets/img/screens/` come from
`store/google-play/screenshots/` in `bitPimps/steady` (resized to WebP; the
`*-phone.webp` files are cropped to the phone frame). When the store
screenshots change, regenerate these too so the site shows the current app.

Before publishing, swap the placeholder App Store / Google Play links in
`index.html`'s `#download` section for the real listing URLs once the app is
live.
