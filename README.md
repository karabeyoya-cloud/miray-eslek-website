# Miray Eslek — Website

Next.js portfolio site for Miray Eslek.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If the port is busy, stop other Node processes or run `npm run dev -- -p 3001`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Sign in at [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). No extra build settings needed.
4. Deploy. Vercel assigns a `*.vercel.app` URL.
5. Optional: add custom domain in Vercel → **Domains** (e.g. `mirayeslek.com`).
6. Optional env var: `NEXT_PUBLIC_SITE_URL=https://your-domain.com` for sitemap/OG canonical URLs.

### CLI deploy (alternative)

```bash
npx vercel login
npx vercel
npx vercel --prod
```

## Contact form (direct email)

The form sends messages to `mirayeslek@gmail.com` via [Web3Forms](https://web3forms.com) (free tier).

1. Go to [web3forms.com](https://web3forms.com) and create an access key for `mirayeslek@gmail.com`.
2. In Vercel → **Project → Settings → Environment Variables**, add:
   - **Name:** `WEB3FORMS_ACCESS_KEY`
   - **Value:** your access key from Web3Forms
   - **Environment:** Production (and Preview if you want)
3. **Redeploy** the project.

Until this key is set, the form shows a configuration error on submit.

## Content

Edit `src/data/content.ts` and images in `public/images/`.
