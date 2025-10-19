# Bilton Technologies

A modern, multi-brand digital ecosystem built with Next.js 14, featuring **Bilton Technologies** as the parent brand with two specialized divisions:

- **Bilton Marketing** - Make Brands Move
- **ColonyOne** - Smart Marketing for Smart Communities

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Drei
- **Icons**: Lucide React
- **Language**: JavaScript/JSX

## 📁 Project Structure

```
bilton-marketing/
├── src/
│   ├── app/
│   │   ├── layout.jsx              # Root layout
│   │   ├── page.jsx                # Bilton Technologies homepage
│   │   ├── marketing/
│   │   │   └── page.jsx            # Bilton Marketing division
│   │   ├── colonyone/
│   │   │   └── page.jsx            # ColonyOne division
│   │   ├── about/
│   │   │   └── page.jsx            # About page
│   │   └── contact/
│   │       └── page.jsx            # Contact page
│   │
│   ├── components/
│   │   ├── Navbar.jsx              # Global navigation
│   │   ├── Footer.jsx              # Global footer
│   │   ├── Hero3D.jsx              # 3D hero component
│   │   ├── Card.jsx                # Reusable card component
│   │   ├── CTASection.jsx          # Call-to-action sections
│   │   ├── AnimatedText.jsx        # Animated text wrapper
│   │   └── SectionWrapper.jsx      # Section animation wrapper
│   │
│   ├── styles/
│   │   └── globals.css             # Global styles with Tailwind
│   │
│   └── utils/
│       └── constants.js            # Site-wide constants
│
├── public/                         # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🎨 Brand Colors

- **Primary Blue**: `#0066CC` - Parent brand (Bilton Technologies)
- **Primary Orange**: `#FFA64D` - Marketing division
- **Black**: `#0D0D0D` - Typography
- **White**: `#FFFFFF` - Base background

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📄 Pages Overview

### Home (/)
The main landing page for **Bilton Technologies**, featuring:
- 3D tech orbit hero section
- About snapshot
- Divisions grid (Marketing & ColonyOne)
- Vision statement
- Contact CTA

### Marketing (/marketing)
**Bilton Marketing** division page with:
- "Make Brands Move" hero
- Core values grid
- Services overview
- Portfolio preview
- ColonyOne highlight
- Final CTA

### ColonyOne (/colonyone)
**ColonyOne** platform page featuring:
- "Smart Marketing for Smart Communities" hero
- Features showcase
- Benefits section
- Use cases
- Partnership CTA

### About (/about)
Unified about page for the entire Bilton ecosystem:
- Brand story
- What we do
- Core values
- Team philosophy
- Location & culture

### Contact (/contact)
Global contact page with:
- Contact form
- Contact information
- Division quick links

## 🔧 Configuration

### Update Site Information

Edit `src/utils/constants.js`:

```javascript
export const SITE_CONFIG = {
  name: 'Bilton Technologies',
  email: 'connect.bilton@gmail.com',
  phone: '+91 XXXXX XXXXX',
  location: 'Goa, India',
  calendlyLink: 'https://calendly.com/bilton-technologies',
  social: {
    instagram: 'https://instagram.com/biltontechnologies',
    linkedin: 'https://linkedin.com/company/biltontechnologies',
    twitter: 'https://twitter.com/biltontechnologies',
  },
};
```

## 🎭 Design Philosophy

- **Apple-inspired**: Clean, minimal, corporate aesthetic
- **Motion-first**: Smooth animations using Framer Motion
- **3D accents**: Subtle 3D elements for visual interest
- **Mobile-responsive**: Fully responsive design
- **Performance-optimized**: Fast loading, optimized assets

## 📦 Key Dependencies

- `next`: ^14.2.3
- `react`: ^18.3.1
- `framer-motion`: ^11.2.10
- `@react-three/fiber`: ^8.16.8
- `@react-three/drei`: ^9.106.0
- `three`: ^0.164.1
- `lucide-react`: ^0.379.0
- `tailwindcss`: ^3.4.3

## 🚀 Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any Node.js hosting platform

## 📧 Contact

**Email**: connect.bilton@gmail.com  
**Location**: Goa, India  

---

Built with ❤️ in Goa 🌴
