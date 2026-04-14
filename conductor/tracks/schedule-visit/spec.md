# Specification: Schedule Visit

This specification defines the implementation for the Schedule Visit / Viewing screen.

## Visual Reference
- **Resource:** `resources/schedule_visit_screen/code.html`
- **Resource:** `resources/schedule_visit_screen/screen.png`

## Functional Requirements
### Property Panel (Left)
- **Property Image:** Large thumbnail with "For Sale" badge.
- **Property Info:** Title, address with location icon, price.
- **Stats:** Beds, Baths, Square footage in a horizontal layout.
- **Agent Info:** Agent photo, name, and chat button.

### Scheduling Panel (Right)
- **Title:** "Schedule a Viewing" with subtitle.
- **Calendar:** Monthly grid (Mon-Sun) with selectable days, disabled past dates, and highlighted selected date with dot indicator.
- **Time Slots:** Grid of available times (09:00 AM - 03:30 PM) with selected/unavailable states.
- **Message:** Optional textarea for agent communication.
- **Actions:** "Cancel" and "Confirm Visit" buttons with arrow icon.

## Technical Requirements
- **Two-Panel Layout:** 5/7 split on desktop, stacked on mobile.
- **Date Logic:** Disable past dates, highlight available dates.
- **State Management:** Track selected date, time, and form data.
- **Shadow & Card:** Large shadow card with border for premium feel.

## Constraints
- **Gradient:** Subtle gradient overlay on property panel background.
- **Responsiveness:** Panels stack vertically on mobile.
- **Animations:** Hover scale on calendar buttons, smooth transitions.
