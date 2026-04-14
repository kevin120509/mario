# Specification: User Authentication & Profile

This specification defines the implementation for User Authentication (Login/Register) and the User Profile management.

## Visual Reference
- **Resource:** `resources/social_login_and_registration/code.html`
- **Resource:** `resources/user_profile_screen/code.html`

## Functional Requirements
### Authentication
- **Login Modal:** A clean, minimal login modal with email/password and social login options.
- **Registration:** A way for new users to sign up.
- **Mocked Session:** For now, implement a simple `localStorage`-based session to simulate being logged in.

### User Profile
- **Profile Page:** Display user name, email, and a placeholder for profile picture.
- **Settings:** Allow users to toggle preferences (mocked).
- **Listing History:** Show properties recently viewed or managed (mocked).

## Technical Requirements
- **Auth Service:** A centralized service to handle login, logout, and current user state.
- **Context API:** Use React Context to share user state across the application.
- **Responsive Profile:** Ensure the profile page looks great on all devices.

## Constraints
- **Security:** Do not store actual passwords (even in a mock).
- **Simplicity:** Keep the authentication flow as frictionless as possible.
