# Track Plan: TODO — Todas las Pantallas del Proyecto

Goal: Track maestro que consolida la información de todos los tracks individuales del proyecto LuxeEstate.

## Status: [~]

---

## Resumen de Progreso

| # | Track | Status | Phase |
|---|---|---|---|
| 1 | Home & Discover Screen | ✅ Completado | 4/4 |
| 2 | Property Details & Navigation | ✅ Completado | 4/4 |
| 3 | Search Filters | ✅ Completado | 4/4 |
| 4 | Favorites List | ✅ Completado | 4/4 |
| 5 | Social Login & Registration | ✅ Completado | 4/4 |
| 6 | User Profile | ✅ Completado | 4/4 |
| 7 | Property Management Dashboard | ✅ Completado | 4/4 |
| 8 | Add/Edit Property Form | 🟡 En progreso | 1/4 |
| 9 | Admin User Directory | ⬜ Pendiente | 0/4 |
| 10 | Schedule Visit | ✅ Completado | 4/4 |

---

## 1. Home & Discover Screen
*Link: [./home-discover/plan.md](./home-discover/plan.md)*
- [x] Hero section with "Find your sanctuary" title and search bar. `[x]`
- [x] Property type filter pills (All, House, Apartment, Villa, Penthouse). `[x]`
- [x] Featured Collections section (2 large cards). `[x]`
- [x] "New in Market" property grid (4 columns). `[x]`
- [x] Sticky Header with navigation and user profile. `[x]`
- [x] Footer component. `[x]`

## 2. Property Details & Navigation
*Link: [./property-details/plan.md](./property-details/plan.md)*
- [x] Dynamic route `app/property/[id]/page.tsx`. `[x]`
- [x] Image gallery with thumbnail navigation. `[x]`
- [x] Property info (price, beds, baths, area, description). `[x]`
- [x] Agent contact section with Schedule Visit / Contact Agent buttons. `[x]`
- [x] Amenities list. `[x]`
- [x] Related properties section. `[x]`
- [x] Mortgage calculator. `[x]`

## 3. Search Filters
*Link: [./search-filters/plan.md](./search-filters/plan.md)*
- [x] Filter modal with blur backdrop overlay. `[x]`
- [x] Location search input. `[x]`
- [x] Price range dual slider with min/max inputs. `[x]`
- [x] Property type dropdown. `[x]`
- [x] Bedroom/bathroom stepper controls. `[x]`
- [x] Amenities toggle chips (Pool, Gym, Parking, AC, WiFi, Patio). `[x]`
- [x] "Show X Homes" and "Clear all" buttons. `[x]`

## 4. Favorites List
*Link: [./favorites-list/plan.md](./favorites-list/plan.md)*
- [x] Favorites page with header and saved count. `[x]`
- [x] Sort dropdown and grid/list view toggle. `[x]`
- [x] Property cards with filled heart, status badges, and Book Visit CTA. `[x]`
- [x] "Discover More" placeholder card. `[x]`
- [x] localStorage persistence via favoritesService. `[x]`

## 5. Social Login & Registration
*Link: [./social-login/plan.md](./social-login/plan.md)*
- [x] Centered login card with LuxeEstate branding. `[x]`
- [x] "Continue with Google" button with SVG. `[x]`
- [x] "Continue with GitHub" button with SVG. `[x]`
- [x] Sign up link and footer navigation. `[x]`
- [x] Decorative background gradient blobs. `[x]`
- [x] Mocked authService for session management. `[x]`

## 6. User Profile
*Link: [./user-profile/plan.md](./user-profile/plan.md)*
- [x] Profile header with avatar, name, location, stats. `[x]`
- [x] Tab navigation (Saved Properties, Scheduled Visits, Preferences). `[x]`
- [x] Saved properties grid. `[x]`
- [x] Upcoming visits list with reschedule/directions buttons. `[x]`
- [x] Account preferences (email, notification toggle). `[x]`

## 7. Property Management Dashboard
*Link: [./property-management/plan.md](./property-management/plan.md)*
- [x] Stats cards (Total Listings, Active, Pending). `[x]`
- [x] Property table with image, details, price, status, actions. `[x]`
- [x] Status badges: Active (green), Pending (orange), Sold (gray). `[x]`
- [x] Edit/Delete actions per property. `[x]`
- [x] Pagination footer. `[x]`
- [x] "Add New Property" CTA. `[x]`

## 8. Add/Edit Property Form
*Link: [./add-edit-property/plan.md](./add-edit-property/plan.md)*
- [~] Two-column form layout (8/4 grid). `[ ]`
- [~] Basic Information section (Title, Price, Status, Type). `[ ]`
- [ ] Description textarea with rich text toolbar. `[ ]`
- [ ] Gallery with drag-drop upload and image management. `[ ]`
- [ ] Location sidebar with address and map preview. `[ ]`
- [ ] Details sidebar with room steppers and amenities. `[ ]`
- [ ] Form validation for required fields. `[ ]`

## 9. Admin User Directory
*Link: [./admin-users/plan.md](./admin-users/plan.md)*
- [ ] User directory with search and "Add User" button. `[ ]`
- [ ] Tab filters (All Users, Agents, Brokers, Admins). `[ ]`
- [ ] User cards with avatar, role badge, status, performance. `[ ]`
- [ ] "Change Role" dropdown with role options. `[ ]`
- [ ] Pagination footer. `[ ]`

## 10. Schedule Visit
*Link: [./schedule-visit/plan.md](./schedule-visit/plan.md)*
- [x] Split-panel layout (property info + scheduling form). `[x]`
- [x] Monthly calendar with selectable dates. `[x]`
- [x] Time slot grid with available/unavailable states. `[x]`
- [x] Agent info section. `[x]`
- [x] Confirm/Cancel buttons. `[x]`
- [x] ScheduleVisitModal alternative inline version. `[x]`

---

## Recursos Visuales

Cada track tiene su referencia visual en la carpeta `resources/`:

| Track | Resource Folder |
|---|---|
| Home & Discover | `resources/home_discover_screen/` |
| Property Details | `resources/property_details_screen/` |
| Search Filters | `resources/search_filters_screen/` |
| Favorites List | `resources/favorites_list_screen/` |
| Social Login | `resources/social_login_and_registration/` |
| User Profile | `resources/user_profile_screen/` |
| Property Management | `resources/property_management_dashboard/` |
| Add/Edit Property | `resources/add_edit_property_form/` |
| Admin Users | `resources/admin_user_directory_cards/` |
| Schedule Visit | `resources/schedule_visit_screen/` |

---

## Metadata
- **Track ID:** `todo`
- **Total Screens:** 10
- **Completed:** 8/10
- **In Progress:** 1/10
- **Pending:** 1/10
