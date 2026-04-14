# Specification: TODO — Proyecto Completo LuxeEstate

Este documento consolida las especificaciones de todas las pantallas del proyecto LuxeEstate.

---

## Stack Técnico
- **Framework:** Next.js 16.2.0 con React 19
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS 4 con tema Nordic Minimalist
- **Persistencia:** localStorage (mocked) con servicios dedicados
- **Testing:** Jest

## Paleta de Colores
| Token | Hex | Uso |
|---|---|---|
| `nordic-dark` | `#19322F` | Texto principal |
| `mosque` | `#006655` | Acento primario, botones CTA |
| `clear-day` | `#EEF6F6` | Fondo claro |
| `hint-green` | `#D9ECC8` | Badges, highlights |
| `background-light` | `#f6f7f7` | Fondo alternativo |

## Servicios Core
- **`propertyService.ts`** — CRUD de propiedades (localStorage)
- **`authService.ts`** — Gestión de sesión de usuario (localStorage)
- **`favoritesService.ts`** — Gestión de favoritos (localStorage)
- **`agentService.ts`** — Gestión de agentes (localStorage)

## Pantallas del Proyecto

### 1. Home & Discover Screen
- **Ruta:** `/` (app/page.tsx)
- **Referencia:** `resources/home_discover_screen/`
- **Componentes:** Header, Footer, HomeContent, PropertyCard
- **Descripción:** Página principal con hero search, filtros por tipo, colecciones destacadas y grid de propiedades.

### 2. Property Details & Navigation
- **Ruta:** `/property/[id]` (app/property/[id]/page.tsx)
- **Referencia:** `resources/property_details_screen/`
- **Componentes:** PropertyPageContent, PropertyImageGallery, PropertyInfo, PropertyAgentInfo, PropertyAmenities, RelatedProperties, MortgageCalculator
- **Descripción:** Página dinámica de detalle con galería, información, calculadora hipotecaria y propiedades relacionadas.

### 3. Search Filters
- **Ruta:** Modal overlay desde Home
- **Referencia:** `resources/search_filters_screen/`
- **Componentes:** FilterModal
- **Descripción:** Modal de filtros avanzados (ubicación, precio, tipo, habitaciones, amenidades).

### 4. Favorites List
- **Ruta:** `/favorites` (app/favorites/page.tsx)
- **Referencia:** `resources/favorites_list_screen/`
- **Componentes:** FavoritesContent
- **Descripción:** Página de propiedades guardadas con grid, sort, y CTA de "Discover More".

### 5. Social Login & Registration
- **Ruta:** Modal o `/login` 
- **Referencia:** `resources/social_login_and_registration/`
- **Componentes:** LoginModal
- **Descripción:** Login con Google y GitHub, diseño minimalista con efectos de fondo.

### 6. User Profile
- **Ruta:** `/profile` (app/profile/page.tsx)
- **Referencia:** `resources/user_profile_screen/`
- **Componentes:** ProfileHeader, ProfileContent
- **Descripción:** Perfil de usuario con propiedades guardadas, visitas programadas y preferencias.

### 7. Property Management Dashboard
- **Ruta:** `/admin` (app/admin/page.tsx)
- **Referencia:** `resources/property_management_dashboard/`
- **Componentes:** StatsCard, PropertyTable
- **Descripción:** Dashboard admin con stats, tabla de propiedades, estados y acciones CRUD.

### 8. Add/Edit Property Form
- **Ruta:** `/admin/properties/new` (app/admin/properties/new/page.tsx)
- **Referencia:** `resources/add_edit_property_form/`
- **Componentes:** PropertyForm
- **Descripción:** Formulario completo para crear/editar propiedades con upload de imágenes.

### 9. Admin User Directory
- **Ruta:** `/admin/users` (pendiente)
- **Referencia:** `resources/admin_user_directory_cards/`
- **Componentes:** UserDirectory, UserCard (pendientes)
- **Descripción:** Directorio de usuarios con gestión de roles y permisos.

### 10. Schedule Visit
- **Ruta:** Modal desde Property Details / Pantalla dedicada
- **Referencia:** `resources/schedule_visit_screen/`
- **Componentes:** ScheduleVisitModal, ScheduleVisitPage
- **Descripción:** Calendario y selección de horario para agendar visitas a propiedades.

---

## Requisitos Generales
- **Responsive:** Todas las pantallas deben funcionar en mobile, tablet y desktop.
- **Dark Mode:** Soporte completo de modo oscuro (via TailwindCSS 4 `dark:` prefix).
- **Animaciones:** Hover effects, transiciones suaves, micro-animaciones.
- **Tipografía:** Inter/SF Pro Display como fuente principal.
- **Iconos:** Material Icons / Material Symbols Outlined.
