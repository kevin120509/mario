# GEMINI.md - LuxeEstate Real Estate Project

This file provides context and instructions for AI agents working on the LuxeEstate project.

## Project Overview
**LuxeEstate** is a premium real estate application built with a modern web stack. The project is currently in the initial scaffolding phase, with a comprehensive set of UI designs available as reference HTML/CSS files.

- **Main Technologies:**
  - **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
  - **Library:** [React 19](https://react.dev/)
  - **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
  - **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Architecture:** 
  - Uses the **App Router** for routing and layouts.
  - Prioritizes **React Server Components (RSC)** for data fetching and performance.
  - Global styles are managed in `app/globals.css` using Tailwind CSS 4's new `@import` syntax.

## Building and Running
The following commands are available for development and deployment:

- **Development Server:** `npm run dev` (Runs on [http://localhost:3000](http://localhost:3000))
- **Build for Production:** `npm run build`
- **Start Production Server:** `npm run start`
- **Linting:** `npm run lint`

## Project Structure
- `app/`: Contains the Next.js application routes, layouts, and global styles.
  - `layout.tsx`: Root layout with Geist font and global styles.
  - `page.tsx`: Current landing page (placeholder).
- `public/`: Static assets like SVG logos.
- `resources/`: **CRITICAL REFERENCE.** This directory contains the UI/UX design prototypes in HTML/CSS and screen images.
  - `home_discover_screen/`: Main landing and search page.
  - `property_details_screen/`: Detailed view of a specific property.
  - `property_management_dashboard/`: Admin view for managing listings.
  - `search_filters_screen/`: Advanced search and filtering UI.
  - `user_profile_screen/`, `favorites_list_screen/`, etc.

## Development Conventions
1. **Component Implementation:** When implementing screens from `resources/`, convert the provided HTML/CSS into reusable React components.
2. **Styling:** Adhere to Tailwind CSS 4 standards. Use the color palette defined in `resources/` (e.g., Primary: `#06f9d0`, Background Light: `#EEF6F6`, Nordic Dark: `#19322F`).
3. **TypeScript:** Ensure all components are strongly typed.
4. **Icons:** The design references Material Icons and Material Symbols Outlined. Ensure these are integrated via a suitable React library (e.g., `lucide-react` or direct SVG imports) if standard icon fonts are not preferred.
5. **Responsiveness:** Ensure all components are mobile-first and responsive, following the patterns in the `resources/` files.

## Immediate Tasks (TODO)
- [x] Migrate the Home Discover Screen from `resources/home_discover_screen/code.html` to `app/page.tsx`.
- [x] Create a reusable `Header` and `Footer` component based on the reference designs.
- [x] Set up a components directory (e.g., `components/ui`) for shared elements like buttons, cards, and inputs.
- [x] Implement the property search and filtering logic.
