# steady.lixlink.com

Brochure site for **Steady: Sobriety & Habit Tracker**. A static site — no build
step, no framework — that introduces the app and hosts a self-help FAQ that
in-app "Contact support" / help links can point to.

## Pages

- `index.html` — landing page: what Steady does, features, privacy, pricing, download CTA
- `faq.html` — searchable Help Center (getting started, the clock & check-ins,
  notifications, privacy, backup, exporting/deleting data, premium, troubleshooting)
- `privacy.html` — privacy policy (useful for App Store / Play Store listing requirements)
- `404.html` — not-found page

## Structure

```
assets/css/style.css   shared stylesheet
assets/js/main.js      mobile nav toggle + FAQ search/filter
assets/img/            favicons, app icon, hero image (cropped from the brand assets)
```

## Deployment

Hosted with GitHub Pages via the workflow in `.github/workflows/pages.yml`,
which deploys the repository root on every push to `main`.

One-time setup in the repo settings:

1. **Settings → Pages → Build and deployment → Source**: select **GitHub
   Actions** (not "Deploy from a branch").
2. **Settings → Pages → Custom domain**: set to `steady.lixlink.com` (the
   `CNAME` file in this repo already declares it) and add the corresponding
   DNS record at your domain provider pointing to GitHub Pages.

After that, merging to `main` deploys automatically.

## Updating content

This is plain HTML/CSS — edit the `.html` files directly. Keep FAQ answers
grounded in what the app actually does (check `bitPimps/steady` if a feature
changes) so the Help Center doesn't drift from the real app behavior.

Before publishing, swap the placeholder App Store / Google Play links in
`index.html`'s `#download` section for the real listing URLs once the app is
live.
