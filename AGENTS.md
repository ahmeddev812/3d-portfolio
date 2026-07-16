# 3D Portfolio — Project Context

## Tech Stack
- Next.js 15.5.20, TypeScript, Tailwind CSS, Framer Motion
- React Three Fiber, @react-three/drei (3D mesh background)
- react-hook-form + zod (contact form)
- sonner (toasts)

## Visual Design (as of Jul 2026)

### 3D Mesh Background
- 6 3D components in `components/3d/`: CrystalCluster, FloatingShapes, OrganicMesh, TechGrid, SceneContent, HeroScene
- Blue/cyan palette: #2563EB, #3B82F6, #38BDF8, #06B6D4, #60A5FA
- Reduced opacity (~15% lower than original), reduced emissiveIntensity
- All mesh structure, movement, blur preserved — only colors changed from original pink/purple

### Color System (`tailwind.config.ts`)
- accent-primary: #3B82F6
- accent-secondary: #38BDF8
- accent-tertiary: #60A5FA
- accent-gradient: linear-gradient(135deg, #3B82F6, #38BDF8)
- Shadows: glow-primary (rgba(59,130,246)), glow-secondary (rgba(56,189,248))

### Dark Theme (`globals.css` .dark)
- bg-primary: #020617
- bg-elevated: #0F172A
- bg-surface: #111827
- text-primary: #F8FAFC (headings)
- text-secondary: #CBD5E1 (paragraphs)
- text-muted: #888888
- border-color: rgba(255,255,255,0.1)
- glass-bg: rgba(255,255,255,0.06), glass-border: rgba(255,255,255,0.1)

### Text Hierarchy
- Hero heading: #FFFFFF, font-black (900), text-shadow-hero (0 4px 20px rgba(0,0,0,0.35))
- Section headings: gradient-text (from-#3B82F6 to-#38BDF8) via GradientText component
- Subtitle/subheading: text-secondary (#CBD5E1)
- Labels/badges: text-accent-primary (#60A5FA)
- gradient-text utility: blue gradient (from-[#3B82F6] to-[#38BDF8])

### Key Components
- `SectionTitle` — wraps title in `<GradientText>`, used by About, Skills, Services, Experience, OpenSource, Contact
- `GradientText` — applies bg-clip-text gradient
- `Button` — primary: blue gradient from-#3B82F6 to-#38BDF8
- `GlassCard` — glass class + blue hover shadow
- `Input`/`Textarea` — blue focus accent, blue gradient glow on focus
- `SocialLinks` — uses glass + accent-primary hover
- `Navigation` — gradient-text logo, accent-primary/accent-secondary underline

### All Section Components
- Hero (HeroText, HeroBadge, HeroCTA, HeroStats)
- About
- Skills (tabbed skill bars)
- Services
- Projects (ProjectFilter + ProjectCard)
- Experience
- OpenSource (animated counters + repo cards)
- Testimonials (carousel, gradient heading "What People Say", blue accent badge)
- Contact (ContactInfo + ContactForm)

### Layout
- `app/(routes)/layout.tsx` — ThemeProvider wraps everything, Toaster, Analytics
- `app/(routes)/page.tsx` — all sections in order
- Each section uses section-padding / section-container classes

## Build
- `npx next build` — compiles clean with 0 errors

## Important Notes for Future Sessions
- All original old colors (#6C63FF, #FF6B9D, #FFD93D, #7C3AED, #00D4FF) have been replaced
- To run dev: `npx next dev` (or npm scripts)
- ThemeProvider + ThemeToggle still in codebase for light/dark mode
- The 3D mesh in `components/3d/` is the live background — components like `Background.tsx` were reverted
