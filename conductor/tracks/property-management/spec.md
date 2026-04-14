# Specification: Property Management Dashboard

This specification defines the implementation for the admin Property Management Dashboard.

## Visual Reference
- **Resource:** `resources/property_management_dashboard/code.html`
- **Resource:** `resources/property_management_dashboard/screen.png`

## Functional Requirements
- **Stats Overview:** Three cards showing Total Listings, Active Properties, and Pending Sale with icons.
- **Property Table:** List of properties with thumbnail image, name, address, beds/baths/sqft, price (sale + monthly), status badge, and action buttons.
- **Status Badges:** Color-coded: Active (green/hint-green), Pending (orange), Sold (gray).
- **Actions:** Edit (pencil icon) and Delete (trash icon) per property.
- **Pagination:** Footer with "Showing X to Y of Z results" and Previous/Next buttons.
- **Add Property:** Primary CTA button to navigate to add property form.

## Technical Requirements
- **Admin Layout:** Separate admin navigation with Dashboard, Listings, Tenants, Finance tabs.
- **Data Source:** `propertyService` for CRUD operations.
- **Hover Effects:** Row highlight on hover with smooth transitions.

## Constraints
- **Role-based Access:** Simulation of admin-only access.
- **Responsive:** Table view on desktop, card view on mobile.
