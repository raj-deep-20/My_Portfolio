# Rajdeep Portfolio

A modern, single-page portfolio built with Next.js (App Router), Tailwind CSS, Framer Motion, and Lucide icons. The site highlights academics, projects, extra-curriculars, certifications, and contact links in a clean, animated layout.

## Features

- Responsive, single-page layout with section anchors
- Animated hero text and subtle motion transitions
- Tech stack cards, academic records, and project highlights
- Extra-curriculars with hover-reveal descriptions
- Certifications with direct links to certificates
- Clean, minimalist dark theme

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- Lucide React icons

## Sections

- About / Hero
- Tech Stack
- Academic Record
- Projects
- Extra Curriculars
- Certifications
- Contact

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm (or yarn/pnpm/bun)

### Install & Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000

### Production Build

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
public/
	profile.jpeg
	marksheets/
	projects/
src/
	app/
		globals.css
		layout.tsx
		page.tsx
```

## Customization

- Update hero text, cards, and sections in `src/app/page.tsx`.
- Replace images in `public/` and update their paths in the page data.
- Add or remove projects and certifications by editing their data arrays.

## Deployment

The app can be deployed to Vercel or any platform that supports Next.js.

## License

All rights reserved.
