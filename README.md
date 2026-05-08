# Rishabh Keshari — Portfolio

A modern, scroll-animated developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- Dark mode terminal/neon aesthetic with grid background and glow effects
- Smooth scroll-triggered animations using Framer Motion + react-intersection-observer
- Sections: Hero, About, Projects, Experience, Resume, Contact
- Animated typewriter role rotator
- PDF resume viewer + download button
- Contact form that opens mail client
- Fully responsive (mobile + desktop)
- Vercel-ready deployment

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## 📁 Add Your Resume

Place your resume PDF at:
```
/public/resume.pdf
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Vercel auto-detects Next.js — click **Deploy**

That's it. No env vars needed.

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts` — `neon`, `neonBlue`, `neonPurple`
- **Projects**: Edit `src/components/Projects.tsx` → `projects` array
- **Experience**: Edit `src/components/Experience.tsx`
- **Skills/Education**: Edit `src/components/About.tsx`
- **Personal info**: Update name, email, GitHub URLs across components

## 🗂 Project Structure

```
src/
├── app/
│   ├── globals.css       # Custom CSS, animations, neon effects
│   ├── layout.tsx        # Root layout + fonts (Syne + JetBrains Mono)
│   └── page.tsx          # Main page — assembles all sections
└── components/
    ├── Navbar.tsx         # Sticky nav with mobile drawer
    ├── Hero.tsx           # Full-screen hero with typewriter
    ├── About.tsx          # Bio, skills grid, education timeline
    ├── Projects.tsx       # Project cards with hover glow
    ├── Experience.tsx     # Work experience + certifications
    ├── Resume.tsx         # PDF viewer + download
    ├── Contact.tsx        # Social links + contact form
    ├── Footer.tsx         # Footer
    ├── FadeIn.tsx         # Reusable scroll-triggered animation wrapper
    └── SectionHeading.tsx # Consistent section header component
```

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework + App Router |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| react-type-animation | Typewriter hero effect |
| react-intersection-observer | Scroll trigger for FadeIn |
| JetBrains Mono | Code/mono font |
| Syne | Display/heading font |
