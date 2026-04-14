# Specification: Admin User Directory

This specification defines the implementation for the Admin User Directory with role management.

## Visual Reference
- **Resource:** `resources/admin_user_directory_cards/code.html`
- **Resource:** `resources/admin_user_directory_cards/screen.png`

## Functional Requirements
- **Search:** Search input for filtering by name or email.
- **Add User:** Button to create new user accounts.
- **Tab Filters:** Tabs for All Users, Agents, Brokers, Admins.
- **User Cards:** Rows with avatar (with online status dot), name, email, user ID, role badge, status, and performance metrics.
- **Role Badges:** Color-coded: Senior Broker (primary/10), Agent (gray), Administrator (nordic bg/white text), Viewer (gray/muted).
- **Status Indicators:** Active (green dot + checkmark), Away (yellow dot + clock), Inactive (gray + remove icon).
- **Change Role:** Dropdown menu per user with role options and "Suspend User" danger option.
- **Pagination:** Footer with page numbers and previous/next navigation.

## Technical Requirements
- **User Service:** Create `agentService` or extend for full user management.
- **Dropdown:** Custom dropdown component with primary-colored background.
- **Responsive:** 12-column grid on desktop, stacked cards on mobile.
- **Hover State:** Cards highlight with hint-green background on hover.

## Constraints
- **Role-based UI:** Different styling for highlighted/selected users.
- **Accessibility:** Proper ARIA roles for dropdown menus.
