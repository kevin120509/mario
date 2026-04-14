# Specification: Favorites List

This specification defines the implementation for the Favorites/Saved Homes page.

## Visual Reference
- **Resource:** `resources/favorites_list_screen/code.html`
- **Resource:** `resources/favorites_list_screen/screen.png`

## Functional Requirements
- **Header:** Title "Your Favorites" with count of saved properties.
- **Sort & View:** Dropdown for sorting (Date Added) and grid/list view toggle buttons.
- **Property Cards:** Cards showing image, price, address, beds/baths/sqft, status badge (For Sale/For Rent), and special tags (New Listing, Price Drop).
- **Favorite Button:** Filled heart icon (already favorited) with hover-to-remove interaction.
- **Book Visit:** CTA button on each card ("Book Visit" or "Schedule Tour").
- **Discover More:** Dashed-border placeholder card encouraging users to browse more listings.
- **Loading Skeleton:** Animated placeholder card for async loading states.

## Technical Requirements
- **LocalStorage:** Persist favorites across sessions using `favoritesService`.
- **Custom Events:** Sync favorites state across components via browser events.
- **Responsive:** Grid adapts from 1 to 4 columns based on screen size.

## Constraints
- **Empty State:** Show a friendly message when no favorites exist.
- **Consistency:** Reuse `PropertyCard` component where possible.
