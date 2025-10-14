# Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### 2. Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### 3. GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

### 4. Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
npm run build
firebase deploy
```

## Environment Setup

1. Make sure Node.js 16+ is installed
2. Run `npm install` to install dependencies
3. Run `npm run dev` for development
4. Run `npm run build` for production build

## Custom Domain Setup

After deployment, you can configure a custom domain through your hosting provider's dashboard.

## Performance Tips

- The site is already optimized for performance
- All images should be optimized (WebP format recommended)
- Consider adding a CDN for global performance
- Enable gzip compression on your server