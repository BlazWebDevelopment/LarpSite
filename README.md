# LarpSite - Fake News Website

A Next.js-based news website frontend for demonstration purposes.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

The homepage will automatically redirect to `/article/98437239` which displays a fake news article about CZ.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Structure

- `/src/app/page.tsx` - Homepage (redirects to article)
- `/src/app/article/[id]/page.tsx` - Article page with dynamic ID
