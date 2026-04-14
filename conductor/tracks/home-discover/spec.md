# Specification: Home & Discover Screen

This specification defines the implementation for the main landing page, including the hero search section, property type filters, featured collections, and the property grid.

## Visual Reference
- **Resource:** `resources/home_discover_screen/code.html`
- **Resource:** `resources/home_discover_screen/screen.png`

## Functional Requirements
- **Hero Section:** Large title "Find your sanctuary" with an underline accent on "sanctuary".
- **Search Bar:** Full-width search input with placeholder text and a "Search" button.
- **Type Filters:** Horizontal scrollable pills for property types (All, House, Apartment, Villa, Penthouse) plus a "Filters" button.
- **Featured Collections:** Two large property cards side-by-side with image zoom on hover, badge labels, and favorite buttons.
- **New in Market:** Responsive grid (1-4 columns) of property cards with price, name, address, beds, baths, and area.
- **Load More:** Button at the bottom to load additional properties.

## Technical Requirements
- **Components:** `Header`, `Footer`, `HomeContent`, `PropertyCard`.
- **Tailwind CSS 4:** Use project design tokens (Nordic Minimalist palette).
- **Responsive:** Full mobile/tablet/desktop support with proper breakpoints.
- **Animations:** Image zoom on hover (`group-hover:scale-105`), smooth transitions.

## Constraints
- **Design:** Must match the styling and layout of the provided HTML/CSS reference.
- **Performance:** Lazy load images where possible.
