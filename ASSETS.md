# Assets Guide

## Required Assets

This document lists all the assets you'll need to add for a complete Bilton Technologies website.

### 🎨 Logos

**Location**: `public/`

- `logo.svg` - Main Bilton Technologies logo
- `logo-white.svg` - White version for dark backgrounds
- `logo-marketing.svg` - Bilton Marketing logo
- `logo-colonyone.svg` - ColonyOne logo

**Specifications**:
- Format: SVG (vector)
- Size: Scalable
- Colors: As per brand guidelines

### 🖼️ Images

**Location**: `public/images/`

#### Homepage
- `hero.jpg` - Hero background (1920x1080px)
- `tech-abstract.jpg` - Technology abstract imagery

#### Marketing Division
- `marketing/hero.jpg` - Marketing hero image
- `marketing/social-dashboard.jpg` - Social media dashboard mockup
- `marketing/team-work.jpg` - Team collaboration image

#### ColonyOne
- `colonyone/community.jpg` - Community living imagery
- `colonyone/residential.jpg` - Residential complex photos
- `colonyone/engagement.jpg` - Community engagement visuals

#### Portfolio Items
- `portfolio/goa-cafe.jpg` - Portfolio project 1
- `portfolio/casa-amora.jpg` - Portfolio project 2
- `portfolio/nova-realtors.jpg` - Portfolio project 3

**Image Specifications**:
- Format: JPEG/WebP
- Resolution: High-res (1920px width recommended)
- Optimization: Compressed for web
- Aspect Ratio: 16:9 for hero images

### 🎭 3D Models

**Location**: `public/3d/`

These are optional - the site works with built-in 3D components, but you can add custom models:

- `orbit-model.glb` - Custom orbit visualization
- `social-dashboard.glb` - 3D social media dashboard
- `colonyone-building.glb` - Apartment building model
- `bilton-cube.glb` - Rotating brand cube

**3D Model Specifications**:
- Format: GLB/GLTF
- File size: < 2MB each
- Optimized: Low poly for web performance

### 📱 Favicons & App Icons

**Location**: `public/`

- `favicon.ico` - 32x32px, 16x16px
- `favicon.svg` - Vector version (already created ✅)
- `apple-touch-icon.png` - 180x180px
- `icon-192.png` - 192x192px (PWA)
- `icon-512.png` - 512x512px (PWA)

### 🎬 Optional: Video Assets

**Location**: `public/videos/`

- `hero-bg.mp4` - Hero background video (optional)
- `process.mp4` - Process showcase video

**Video Specifications**:
- Format: MP4 (H.264)
- Resolution: 1920x1080px
- Duration: 10-30 seconds
- File size: < 5MB

### 📄 Documents

**Location**: `public/documents/`

- `bilton-brochure.pdf` - Company brochure
- `service-packages.pdf` - Service offerings

## 🎨 Asset Creation Tips

### For Images:
1. Use high-quality stock photos from:
   - Unsplash
   - Pexels
   - Adobe Stock

2. Optimize images:
   ```bash
   # Using imagemagick
   convert input.jpg -quality 85 -resize 1920x output.jpg
   ```

3. Convert to WebP:
   ```bash
   # Using cwebp
   cwebp -q 85 input.jpg -o output.webp
   ```

### For 3D Models:
1. Create in Blender (free)
2. Export as GLB format
3. Optimize with gltf-pipeline:
   ```bash
   npm install -g gltf-pipeline
   gltf-pipeline -i input.gltf -o output.glb
   ```

### For Logos:
1. Create vector versions (SVG)
2. Ensure scalability
3. Test on both light and dark backgrounds

## 📂 Current Assets

✅ `favicon.svg` - Basic favicon created  
⏳ All other assets pending

## 🔄 Adding Assets

1. Place files in appropriate directories
2. Update image references in components
3. Test responsive rendering
4. Verify loading performance

## 📊 Asset Checklist

- [ ] Main logo (SVG)
- [ ] Division logos (Marketing, ColonyOne)
- [ ] Hero images (Homepage, Marketing, ColonyOne)
- [ ] Portfolio images (3 items)
- [ ] Team photos (optional)
- [ ] Favicon set (ico, png, svg)
- [ ] 3D models (optional)
- [ ] Video assets (optional)
- [ ] PDF documents (optional)

---

**Note**: The website is fully functional without these assets. They enhance the visual experience but are not required for development/testing.
