# Specification: Add/Edit Property Form

This specification defines the implementation for the property creation and editing form.

## Visual Reference
- **Resource:** `resources/add_edit_property_form/code.html`
- **Resource:** `resources/add_edit_property_form/screen.png`

## Functional Requirements
### Basic Information
- **Title:** Text input for property title.
- **Price:** Number input with dollar sign prefix.
- **Status:** Dropdown (For Sale, For Rent, Sold).
- **Property Type:** Dropdown (Apartment, House, Villa, Commercial).

### Description
- **Rich Text:** Textarea with formatting toolbar (Bold, Italic, List) and character counter (0/2000).

### Gallery
- **Upload Area:** Drag-and-drop zone with cloud upload icon.
- **Image Grid:** Thumbnails with delete/edit overlays and "Main" badge on primary image.
- **Add More:** Dashed-border button to add additional images.

### Sidebar - Location
- **Address Input:** Text input for street address.
- **Map Preview:** Static map image with hover effect.

### Sidebar - Details
- **Numeric Fields:** Area (m²) and Year Built inputs.
- **Room Steppers:** Increment/decrement controls for Bedrooms, Bathrooms, Parking.
- **Amenities:** Checkbox list (Swimming Pool, Garden, AC, Smart Home).

## Technical Requirements
- **Form Validation:** Client-side validation for required fields (marked with *).
- **Image Upload:** Simulated upload with preview (mocked).
- **Two-Column Layout:** 8/4 grid on desktop, stacked on mobile.
- **Mobile Footer:** Fixed bottom bar with Cancel/Save buttons on mobile.

## Constraints
- **Data Integrity:** New properties must follow `PropertyDetails` type.
- **File Types:** Accepted formats: JPG, PNG, WEBP. Max 5MB per image.
