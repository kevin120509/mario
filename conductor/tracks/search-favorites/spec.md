# Specification: Search & Favorites

This specification defines the implementation for the Advanced Search Filters and the Favorites system.

## Visual Reference
- **Resource:** `resources/search_filters_screen/code.html`
- **Resource:** `resources/favorites_list_screen/code.html`

## Functional Requirements
### Search Filters
- **Filter Modal:** Provide a modal for setting advanced filters (Price Range, Property Type, Bed/Bath Count, Area).
- **Real-time Filtering:** Update the property list dynamically based on selected filters.
- **Search Bar:** Ensure the main search bar in `HomeContent` works in conjunction with advanced filters.

### Favorites
- **Save Property:** Allow users to "heart" a property from the `PropertyCard` or `PropertyDetails` page.
- **Persistent Storage:** Use `localStorage` to persist saved properties across sessions.
- **Favorites List:** Dedicated page (`/favorites`) to view all saved properties.

## Technical Requirements
- **State Management:** Use React `useState` and `useMemo` for filtering logic.
- **Local Storage Service:** Create a service to handle favorites persistence.
- **Responsive Modal:** Ensure the filter modal works well on mobile.

## Constraints
- **Performance:** Filtering should be fast and not cause unnecessary re-renders.
- **Consistency:** Use existing UI components (`Button`, `Input`) where possible.
