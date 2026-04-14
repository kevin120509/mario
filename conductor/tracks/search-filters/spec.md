# Specification: Search Filters

This specification defines the implementation for the advanced search filters modal overlay.

## Visual Reference
- **Resource:** `resources/search_filters_screen/code.html`
- **Resource:** `resources/search_filters_screen/screen.png`

## Functional Requirements
- **Modal Overlay:** Full-screen overlay with blur backdrop and centered modal card.
- **Location Input:** Text input with location icon for city/neighborhood search.
- **Price Range:** Dual-handle slider with min/max price inputs and formatted currency.
- **Property Type:** Dropdown selector (Any Type, House, Apartment, Condo, Townhouse).
- **Rooms:** Stepper controls for bedrooms and bathrooms with +/- buttons.
- **Amenities:** Toggle chips with icons (Swimming Pool, Gym, Parking, AC, WiFi, Patio/Terrace).
- **Actions:** "Clear all filters" link and "Show X Homes" primary button.

## Technical Requirements
- **State Management:** Use React `useState` for all filter values.
- **Custom Slider:** Custom styled range input with Tailwind.
- **Responsive:** Modal adapts to mobile with scrollable content area.
- **Accessibility:** Proper labels, focus states, and keyboard navigation.

## Constraints
- **Performance:** Filtering should not cause unnecessary re-renders.
- **Animation:** Smooth open/close transitions for the modal.
