# Specification: Property Details & Navigation

This specification defines the implementation for the Property Details screen, allowing users to view in-depth information about a property.

## Visual Reference
- **Resource:** `resources/property_details_screen/code.html`
- **Resource:** `resources/property_details_screen/screen.png`

## Functional Requirements
- **Dynamic Route:** Implement a dynamic route at `app/property/[id]/page.tsx`.
- **Image Gallery:** Display a main property image and a scrollable gallery of additional photos.
- **Detailed Info:** Show price, address, number of beds, baths, area, and a full description.
- **Amenities List:** Display a list of features (e.g., "Parking," "Pool," "Gated Community").
- **Agent Section:** Display agent name, photo, and "Contact Agent" or "Schedule Visit" buttons.
- **Navigation:** Link `PropertyCard` from the home screen to the details page.

## Technical Requirements
- **RSC:** Use React Server Components for data fetching where possible.
- **Tailwind CSS 4:** Adhere to project styling conventions (Nordic Minimalist).
- **TypeScript:** Fully typed components and data fetching.
- **Testing:** Unit tests for individual components (`PropertyInfo`, `PropertyGallery`, etc.).

## Constraints
- **Design:** Must match the styling and layout of the provided HTML/CSS reference.
- **Responsiveness:** Ensure full mobile compatibility.
