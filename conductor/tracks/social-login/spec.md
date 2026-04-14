# Specification: Social Login & Registration

This specification defines the implementation for the Login/Registration screen with social authentication.

## Visual Reference
- **Resource:** `resources/social_login_and_registration/code.html`
- **Resource:** `resources/social_login_and_registration/screen.png`

## Functional Requirements
- **Branding:** Centered LuxeEstate icon and welcome message.
- **Social Login:** "Continue with Google" and "Continue with GitHub" buttons with brand SVG icons.
- **Registration Link:** "Don't have an account? Sign up" text with link.
- **Footer Links:** Privacy Policy, Terms of Service, Help Center.

## Technical Requirements
- **Auth Service:** Centralized `authService` for login/logout/session management (mocked).
- **Background Effects:** Decorative gradient blobs with blur for visual depth.
- **Button Animations:** Hover translate-y, shadow transitions, and fill animations.
- **Dark Mode:** Full dark mode support with different card and background colors.

## Constraints
- **Security:** Do not store actual passwords (even in a mock).
- **Simplicity:** Minimal, frictionless login flow.
- **Responsiveness:** Card centers on all screen sizes with proper padding.
