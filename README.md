# Upliftmarketing

Marketing site for **Uplift Advertising** (React + Vite).

- Assets load from **Cloudinary** (cloud name in `src/config/cloudinary.js`; optional `VITE_CLOUDINARY_CLOUD_NAME` for builds).
- **Netlify:** `npm run build`, publish `dist` — see `netlify.toml`.
- Local portfolio uploads (needs API key in `.env.local`, not committed): `npm run upload:portfolio`.

```bash
npm install
npm run dev
npm run build
```
