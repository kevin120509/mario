# Specification: User Profile

This specification defines the implementation for the User Profile management page.

## Visual Reference
- **Resource:** `resources/user_profile_screen/code.html`
- **Resource:** `resources/user_profile_screen/screen.png`

## Functional Requirements
### Profile Header
- **Avatar:** Large profile photo with edit overlay button.
- **User Info:** Name, location, and "Member since" date.
- **Stats Card:** Saved count, Visits count, Sold count in white card.

### Tabbed Content
- **Saved Properties:** Grid of favorited property cards with prices, details, and favorite buttons.
- **Scheduled Visits:** List of upcoming visits with thumbnail, date/time, property name, agent name, and action buttons (Reschedule, Get Directions).
- **Preferences & Settings:** Tab placeholder for future settings.

### Account Preferences
- **Email:** Readonly email with "Change" button.
- **Notifications:** Toggle switch for "New Property Alerts".

## Technical Requirements
- **Profile Data:** Fetched from `authService` current user.
- **Tab State:** Use React `useState` for active tab management.
- **Responsive:** Adapts from 1 to 3 columns for property grid.

## Constraints
- **Design:** Hint-green background for profile header section.
- **Consistency:** Reuse existing `PropertyCard` and layout patterns.
