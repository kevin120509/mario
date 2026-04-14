# Specification: Admin Dashboard & Property Management

This specification defines the implementation for the Admin Dashboard and Property Management features.

## Visual Reference
- **Resource:** `resources/property_management_dashboard/code.html`
- **Resource:** `resources/add_edit_property_form/code.html`

## Functional Requirements
### Admin Dashboard
- **Overview Stats:** Show key metrics (Total Properties, Active Listings, Sold, Monthly Views).
- **Property Table:** A table list of all managed properties with status, price, and actions (Edit, Delete, Change Status).
- **Search & Sort:** Filter the property table by name or price.

### Property Management
- **Add/Edit Form:** A comprehensive form to create or update a property listing.
- **Fields:** Title, Address, Price, Type (Buy/Rent), Bedrooms, Bathrooms, Area, Description, Amenities.
- **Image Upload:** Simulation of property image uploads.

## Technical Requirements
- **Table Component:** A reusable table component with sorting and pagination (mocked).
- **Form Validation:** Client-side validation for required fields and data formats.
- **Status Badges:** Color-coded badges for Active, Pending, and Sold status.

## Constraints
- **Role-based Access:** Simulation of admin-only access (checking for `isAdmin` flag on user).
- **Data Integrity:** Ensure new properties follow the `PropertyDetails` type.
