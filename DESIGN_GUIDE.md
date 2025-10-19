# Bilton Technologies - Visual Design Guide

## 🎨 Color System

### Primary Colors
- **Bilton Blue** (`#0066CC`): Parent brand, technology, trust
- **Bilton Orange** (`#FFA64D`): Marketing division, creativity, energy
- **Bilton Black** (`#0D0D0D`): Typography, professionalism
- **White** (`#FFFFFF`): Clean backgrounds, clarity

### Usage Guidelines
- **Homepage**: Blue gradients with orange accents
- **Marketing Division**: Orange-dominant with blue CTAs
- **ColonyOne**: Blue-dominant with clean white space

## 📐 Typography Scale

### Headings
- **XL**: 5xl-7xl (Hero titles)
- **LG**: 4xl-6xl (Section titles)
- **MD**: 3xl-5xl (Sub-section titles)
- **SM**: 2xl-3xl (Card titles)

### Body Text
- **LG**: lg-xl (Intro paragraphs)
- **MD**: base-lg (Body copy)

### Font Family
- **Primary**: Inter, SF Pro Display
- **Weight**: 400 (regular), 600 (semibold), 700 (bold)

## 🎭 Animation Variants

### Framer Motion Presets
```javascript
fadeIn: { opacity: 0 → 1, duration: 0.8s }
slideUp: { y: 30 → 0, opacity: 0 → 1, duration: 0.6s }
slideInLeft: { x: -50 → 0, opacity: 0 → 1, duration: 0.6s }
slideInRight: { x: 50 → 0, opacity: 0 → 1, duration: 0.6s }
scaleIn: { scale: 0.8 → 1, opacity: 0 → 1, duration: 0.5s }
```

## 🎯 3D Elements

### Hero3D Component
- **Orbit Scene**: Interconnected spheres with orange/blue colors
- **Purpose**: Represent connected marketing systems
- **Location**: Homepage hero, Marketing page hero

### Future 3D Elements
- Rotating cube for About page
- Apartment block for ColonyOne
- Floating particles for ambient effect

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🔲 Component Patterns

### Cards
- **Background**: White with shadow
- **Padding**: 32px (p-8)
- **Border Radius**: 16px (rounded-2xl)
- **Hover**: Scale 1.05 or translate -8px

### Buttons
- **Primary**: Black bg, white text, full rounded
- **Secondary**: Orange bg, white text, full rounded
- **Outline**: Border 2px, transparent bg, full rounded

### Sections
- **Padding**: py-20 px-6 (mobile), py-20 px-24 (desktop)
- **Max Width**: 1280px (7xl)
- **Margin**: Auto center

## 🎬 Page Transitions

- **Duration**: 0.6-0.8s
- **Easing**: ease-out
- **Viewport**: Trigger at 20-30% visibility
- **Once**: true (animate only once)

## 🌟 Special Effects

### Scroll Animations
- Fade in on scroll (viewport-based)
- Stagger children animations (0.1-0.2s delay)
- Parallax effects on large screens

### Hover States
- 3D tilt on cards (perspective-1000)
- Scale and shadow increase
- Color transitions (300ms)

## 📊 Layout Grid

### Home Divisions
- 2 columns on desktop
- 1 column on mobile
- Gap: 32px

### Services Grid
- 2 columns on desktop
- 1 column on mobile
- Equal height cards

### Values Grid
- 4 columns on desktop
- 2 columns on tablet
- 1 column on mobile

## ✨ Brand Voice

### Bilton Technologies
**Tone**: Visionary, professional, innovative
**Keywords**: Innovation, digital, ecosystem, scale

### Bilton Marketing
**Tone**: Confident, results-driven, corporate
**Keywords**: Movement, clarity, precision, growth

### ColonyOne
**Tone**: Smart, community-focused, approachable
**Keywords**: Community, engagement, belonging, smart

## 🎪 Micro-interactions

- Button hover: scale 1.05, active 0.95
- Link hover: color transition + underline
- Card hover: shadow increase + translate
- Nav scroll: transparent → white background
- Scroll indicator: bounce animation

## 📐 Spacing System

- **xs**: 4px (1)
- **sm**: 8px (2)
- **md**: 16px (4)
- **lg**: 24px (6)
- **xl**: 32px (8)
- **2xl**: 48px (12)
- **3xl**: 64px (16)

## 🖼️ Image Guidelines

### Aspect Ratios
- Hero images: 16:9
- Portfolio items: 4:3
- Profile images: 1:1

### Optimization
- WebP format preferred
- Max width: 1920px
- Lazy loading enabled
- Blur placeholder on load

---

**Last Updated**: October 2025  
**Maintained by**: Bilton Technologies Design Team
