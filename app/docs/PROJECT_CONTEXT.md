# PROJECT_CONTEXT — Geriátrico Jean Baptiste Marie Vianey

## Stack
- Next.js (App Router)
- TypeScript
- CSS Modules
- Hosting: AWS Amplify (CI/CD from GitHub)

## Design system
### Fonts
- Noto Sans Display (global)

### Color palette (CSS variables)
- --green: rgb(138, 186, 78)
- --blue: rgb(25, 100, 126)
- --teal: rgb(40, 175, 176)
- --beige: rgb(238, 150, 75)
- --dark: rgb(31, 39, 27)
- --white: rgb(250, 255, 248)

### UI conventions
- Rounded corners: --radius-lg/md/sm
- Prefer high contrast + clear focus states
- Respect prefers-reduced-motion
- Buttons and interactive elements must be keyboard accessible

## Pages & Sections (Home)
Order:
1) Navbar
2) Hero
3) Purpose
4) Assessment
5) Classification
6) Cognitive
7) Emotional
8) Modalities
9) Services
10) Footer

## Folder structure (important)
src/
  components/
    Navbar/
      Navbar.tsx
      Navbar.module.css
    hero/
    sections/
    ui/
  app/
    layout.tsx
    page.tsx
public/
  logo.png
  images/
  icons/

## Components notes
### Navbar
- Desktop links + mobile burger overlay
- Tolima-style SVG burger animation (stroke dasharray)
- ESC closes, click outside closes, body scroll locked while open

### SectionLayout / SectionImage
- Used to keep consistent spacing and responsive behavior
- Images must have meaningful alt text

## Accessibility checklist (must follow)
- All images: meaningful alt (or alt="" if decorative)
- Focus-visible styling on links/buttons
- No content only by color (use text/icons)
- Reduced-motion support for animations

## Deployment (Amplify)
- Connected to GitHub
- Build command: npm run build
- Output: .next (handled by Amplify for Next.js)
