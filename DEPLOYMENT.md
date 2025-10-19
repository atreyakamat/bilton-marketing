# Deployment Guide - Bilton Technologies

## 🚀 Deploying to Vercel (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js.

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Bilton Technologies website"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard
   - Example: `NEXT_PUBLIC_API_URL`, `CALENDLY_LINK`, etc.

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes
   - Auto-deployments on every push to main

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

## 📦 Deploying to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Netlify Configuration**
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy**
   - Connect GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

## 🐳 Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Build Docker image
docker build -t bilton-technologies .

# Run container
docker run -p 3000:3000 bilton-technologies
```

## 🌐 Custom Domain Setup

### On Vercel

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `bilton.tech`)
3. Configure DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### SSL Certificate
- Automatically provided by Vercel/Netlify
- Renews automatically

## ⚡ Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use Next.js Image component
   - Convert to WebP format
   - Implement lazy loading

2. **Code Splitting**
   - Already handled by Next.js
   - Use dynamic imports for large components

3. **Bundle Analysis**
   ```bash
   npm install @next/bundle-analyzer
   ```
   
   Add to `next.config.js`:
   ```javascript
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   })
   
   module.exports = withBundleAnalyzer(nextConfig)
   ```

### Performance Checklist

- [ ] Enable compression (Gzip/Brotli)
- [ ] Set cache headers
- [ ] Optimize fonts loading
- [ ] Minify CSS/JS (automatic in production)
- [ ] Enable CDN (automatic on Vercel/Netlify)

## 🔒 Environment Variables

Create `.env.local` for local development:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CALENDLY_URL=your_calendly_link
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

**Production variables** (set in hosting platform):
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CALENDLY_URL`
- `NEXT_PUBLIC_GA_ID`

## 📊 Analytics Setup

### Google Analytics

1. **Install package**
   ```bash
   npm install @next/third-parties
   ```

2. **Add to layout.jsx**
   ```javascript
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         </body>
       </html>
     )
   }
   ```

## 🔍 SEO Configuration

### robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### sitemap.xml
Create `app/sitemap.js`:
```javascript
export default function sitemap() {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://yourdomain.com/marketing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add more pages...
  ]
}
```

## 🔧 Build Optimization

### Production Build

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

### Build Output Analysis

```bash
# Analyze bundle size
npm run build -- --analyze
```

## 🚨 Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Meta tags (title, description) set for all pages
- [ ] Open Graph images added
- [ ] Favicon and app icons added
- [ ] 404 and error pages created
- [ ] Contact form tested
- [ ] All links verified
- [ ] Mobile responsiveness checked
- [ ] Cross-browser testing done
- [ ] Performance audit passed (Lighthouse)
- [ ] Accessibility audit passed
- [ ] Security headers configured

## 📈 Post-Deployment

1. **Verify Deployment**
   - Check all pages load correctly
   - Test forms and interactions
   - Verify 3D elements render properly

2. **Monitor Performance**
   - Use Vercel Analytics
   - Monitor Core Web Vitals
   - Check error logs

3. **Set Up Monitoring**
   - Configure uptime monitoring
   - Set up error tracking (Sentry)
   - Enable real user monitoring

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
```

## 📞 Support

For deployment issues:
- Email: connect.bilton@gmail.com
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js deployment: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

**Last Updated**: October 2025  
**Maintained by**: Bilton Technologies
