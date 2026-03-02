# saiganeshakula.com — Personal Portfolio

My personal portfolio site built with React, Vite, Tailwind CSS, and Framer Motion. Live at [saiganeshakula.com](https://saiganeshakula.com).

## Stack

- **React + Vite + TypeScript** — frontend
- **Tailwind CSS v4** — styling
- **Framer Motion** — animations
- **Gemini 2.0 Flash** — AI chatbot (CAG with resume context)
- **EmailJS** — contact form
- **AWS S3 + CloudFront** — hosting & CDN
- **GitHub Actions** — CI/CD (auto-deploy on push to `main`)

## Running locally

```bash
npm install
npm run dev
```

Create a `.env.local` with:

```
VITE_GEMINI_API_KEY=...
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```
