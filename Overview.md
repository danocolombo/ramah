# Ramah — Portfolio Site Overview

## Summary

Ramah is a personal portfolio website for Dano Colombo, a software engineer and recovery advocate. It is a client-side single-page application (SPA) built with React 19 and Vite, using Material-UI v9 for design and React Router v7 for navigation. The site showcases professional engineering services, AWS expertise, a software project portfolio, recovery advocacy work, and personal hobbies. The application has no backend — content is static and the contact flow delegates to the user's email client via `mailto:` links.

The project was recently migrated from a Create React App stack (React 17, MUI v8, Jest) to a modern Vite stack (React 19, MUI v9, Vitest).

---

## Tech Stack

| Layer      | Technology                     |
| ---------- | ------------------------------ |
| Framework  | React 19.2.5                   |
| Build Tool | Vite 8.0.10                    |
| Routing    | React Router v7                |
| UI Library | Material-UI (MUI) v9 + Emotion |
| Animations | React Lottie                   |
| Language   | JavaScript (JSX), ES modules   |
| Testing    | Vitest 4 + Testing Library     |
| Linting    | ESLint (flat config)           |
| CI/CD      | GitHub Actions                 |

---

## Application Architecture

### Entry Points

- [index.html](index.html) — Root HTML template; mounts the React app at `#root`
- [src/main.jsx](src/main.jsx) — React entry; wraps the app in `<BrowserRouter>`
- [src/components/App.jsx](src/components/App.jsx) — Root component; provides `<ThemeProvider>`, persistent `<Header>` / `<Footer>`, and lazily-loaded `<Routes>`

### Layout

Every page shares a persistent layout composed of:

- **Header** ([src/components/ui/header.jsx](src/components/ui/header.jsx)) — AppBar with ElevationScroll behavior, desktop tab navigation, Engineering dropdown submenu, and a collapsible Drawer for mobile.
- **Footer** ([src/components/ui/footer.jsx](src/components/ui/footer.jsx)) — Site-wide footer with grouped navigation links, LinkedIn social link, and contact email.

All pages are code-split via `React.lazy()` and wrapped in a `<Suspense>` fallback, enabling on-demand chunk loading.

### State Management

State is managed locally with `useState` hooks. App-level navigation state (`value`, `selectedIndex`) is lifted into `App.jsx` and passed as props to the Header, Footer, and page components so the active tab and submenu selection stay synchronized. There is no global state library (no Redux, Zustand, or Context API).

### Theme

A centralized MUI theme is defined in [src/components/ui/theme.js](src/components/ui/theme.js). It establishes:

- **Primary color:** `#0000FF` (Fortson Blue)
- **Secondary color:** `#FFBA60` (Arc Orange)
- **Additional palette colors:** Orange, Red, Black, Grey, White
- **Custom breakpoints:** xs (0px), sm (320px), md (360px), lg (750px), xl (1200px)
- **Typography variants:** `tab`, `estimate`, `learnButton`, `goButton`, plus overrides for `h2`–`h6`, `subtitle1/2`, `body1`, `caption`
- **Component overrides:** `MuiInputLabel`, `MuiInput`

All components consume the theme via `useTheme()` and apply styles through MUI's `sx` prop. Style objects are memoized with `useMemo` to avoid recalculation on re-renders.

---

## Pages and Routes

| Route             | Page Component                                                  | Purpose                                                         |
| ----------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `/`               | [LandingPage.jsx](src/components/LandingPage.jsx)               | Homepage — hero intro, recovery advocate card, hobbies teaser   |
| `/engineering`    | [EngineeringPage.jsx](src/components/EngineeringPage.jsx)       | Engineering services overview                                   |
| `/customsoftware` | [CustomSoftwarePage.jsx](src/components/CustomSoftwarePage.jsx) | Custom software development services                            |
| `/enterprise`     | [EnterprisePage.jsx](src/components/EnterprisePage.jsx)         | Enterprise solutions and technology stack                       |
| `/aws`            | [AWSPage.jsx](src/components/AWSPage.jsx)                       | AWS cloud services and certifications                           |
| `/p8RallyProject` | [P8ProjectPage.jsx](src/components/P8ProjectPage.jsx)           | P8 Rally project portfolio showcase                             |
| `/recovery`       | [RecoveryPage.jsx](src/components/RecoveryPage.jsx)             | Recovery advocacy and sobriety-focused content                  |
| `/hobbies`        | [HobbiesPage.jsx](src/components/HobbiesPage.jsx)               | Hobbies portfolio — woodshop and kitchen projects               |
| `/contact`        | [contactme.jsx](src/components/contactme.jsx)                   | Contact form with client-side validation and mailto integration |
| `/notfound`       | [NotFoundPage.jsx](src/components/NotFoundPage.jsx)             | 404 page with Lottie animation                                  |
| `*`               | Redirect to `/notfound`                                         | Catch-all for unmapped routes                                   |

### Page Descriptions

**Landing Page** — Serves as the first impression. Contains a hero section with an introduction, a recovery advocate highlight card, and a hobbies teaser block. Sets the tone for the personal and professional blend of the site.

**Engineering Page** — Presents professional engineering services with descriptive sections and visual call-to-action cards linking to deeper service pages (Custom Software, Enterprise, AWS).

**Custom Software Page** — Details custom software development capabilities. Features descriptive sections, technology icons, and a prominent call-to-action.

**Enterprise Page** — Covers enterprise-grade solutions, technology stack highlights, and relevant positioning content. The lightest page at ~150 lines.

**AWS Page** — The most visually detailed service page. Showcases AWS certifications (Solutions Architect, Developer Associate, Cloud Practitioner), service capabilities (Lambda, DynamoDB, RDS, API Gateway, Amplify, Serverless), and feature cards via the `AWSFlash` component.

**P8 Rally Project Page** — A focused portfolio showcase for a single project, with descriptions, imagery, and project context.

**Recovery Page** — Presents recovery advocacy messaging, educational content on sobriety, and personal narrative. Tonally distinct from the engineering pages.

**Hobbies Page** — Showcases personal hobbies through a card-based layout with images. Sub-sections include woodshop projects and kitchen/cooking content, with dedicated sub-components (`Woodshop.jsx`, `Kitchen.jsx`).

**Contact Page** — The most interactive page. Includes a form with fields for name, phone, email, and message. Client-side validation uses regex for phone and email fields. Successful validation opens the user's email client via a composed `mailto:` URI. Feedback is provided via a confirmation dialog and a snackbar alert.

**Not Found Page** — A 404 page that renders a Lottie JSON animation to communicate the error state engagingly.

---

## Key Functionality

### Responsive Navigation

The header adapts across breakpoints: a full tab bar with a dropdown submenu (Engineering) on desktop, and a slide-in Drawer with grouped navigation links on mobile. The `ElevationScroll` wrapper adds an AppBar drop-shadow on scroll. Active tab state is persisted across page loads by reading the current pathname and syncing it to `value`/`selectedIndex`.

### Contact Form

The contact form in [contactme.jsx](src/components/contactme.jsx) provides:

- Inline validation for email (regex) and phone (regex) on `onBlur`
- User feedback via `helperText` error messages beneath fields
- A confirmation `<Dialog>` before composing the mailto
- A `<Snackbar>` alert for success/failure feedback
- Environment-variable–driven recipient: `VITE_CONTACT_EMAIL` (defaults to `danocolombo@gmail.com`)

### Code Splitting

All page components are loaded lazily with `React.lazy()` wrapped in `<Suspense>`. This reduces the initial JS bundle and defers loading of page code until first navigation to that route.

### Lottie Animations

Lottie JSON animation files in [src/animations/](src/animations/) are rendered via `react-lottie`. Used on the 404 page and within feature card components for visual richness without heavy video assets.

### Breadcrumb Navigation

Several pages implement MUI `<Breadcrumbs>` to provide secondary navigation and orientation within the site hierarchy.

### Environment Configuration

Sensitive or deployment-specific values are externalized via Vite environment variables (prefixed `VITE_`). See [.env.example](.env.example) for the full list.

---

## CI/CD Pipeline

Defined in [.github/workflows/ci.yaml](.github/workflows/ci.yaml):

1. **Lint job** — Runs ESLint on the source tree.
2. **Build job** (depends on lint) — Runs `npm test` then `npm run build`. Times out at 20 minutes.

A CodeQL security scanning workflow is also configured at [.github/codeql/codeql-config.yml](.github/codeql/codeql-config.yml).

---

---

## Appendix A — Reusable Components

The following components are either already reused across multiple pages or are well-positioned for extraction into a shared component library.

### Currently Reused

| Component           | Location                                                               | Used By                            |
| ------------------- | ---------------------------------------------------------------------- | ---------------------------------- |
| `Header`            | [src/components/ui/header.jsx](src/components/ui/header.jsx)           | All pages (via `App.jsx`)                                                                        |
| `Footer`            | [src/components/ui/footer.jsx](src/components/ui/footer.jsx)           | All pages (via `App.jsx`)                                                                        |
| `ButtonArrow`       | [src/components/ui/ButtonArrow.jsx](src/components/ui/ButtonArrow.jsx) | Multiple pages for CTA buttons                                                                   |
| `FeatureCard`       | [src/components/ui/FeatureCard.jsx](src/components/ui/FeatureCard.jsx) | `EngineeringPage.jsx` (AWS, Custom Software sections); `LandingPage.jsx` (Recovery card) |
| `AWSFlash`          | [src/components/AWSFlash.jsx](src/components/AWSFlash.jsx)             | `AWSPage.jsx` (multiple instances)                                                               |
| Theme configuration | [src/components/ui/theme.js](src/components/ui/theme.js)               | All components via `ThemeProvider`                                                               |

### Candidates for Extraction

These patterns repeat across pages but have not been formally extracted into shared components:

**Section Hero / Page Banner**
Every service page (Engineering, AWS, Custom Software, Enterprise) renders a top hero block with a headline, subheadline, and optional CTA button. The markup and `sx` structure are nearly identical across pages. A `<PageHero title subtitle ctaLabel ctaRoute />` component would eliminate this duplication.

**Section Divider / Content Row**
Pages consistently use a two-column `Grid` layout pattern — image on one side, text + CTA on the other, sometimes reversed at smaller breakpoints. Extracting a `<ContentRow image text reversed />` component would reduce repeated layout code.

**Breadcrumb Bar**
Multiple pages implement a `<Breadcrumbs>` block at the top with the same structure: Home → Current Page. A `<PageBreadcrumb label />` component would standardize this and reduce boilerplate.

**Form Field with Validation**
The contact form builds each controlled input with an `onChange`, `onBlur`, `helperText`, and `error` prop manually. A `<ValidatedTextField />` wrapper component would encapsulate this pattern and make the form easier to extend or test.

**Hobby Card**
The `Woodshop` and `Kitchen` sub-components in HobbiesPage share a card-with-image-and-text structure. A single `<HobbyCard image title description />` component could replace both.

---

---

## Appendix B — Areas Needing Improvement

The following pages, components, and design patterns have been identified as incomplete, inconsistent, or below the quality bar of the rest of the site.

### Testing

**Severity: High**

No tests exist. The test infrastructure (Vitest, Testing Library, jsdom) is fully configured and the CI pipeline runs `npm test`, but the `/src/` directory contains zero test files. The suite passes today only because `passWithNoTests: true` is set. Critical paths with no coverage include the contact form validation logic, header navigation state, and routing behavior. If `passWithNoTests` is ever disabled, the build will fail.

**Recommendation:** Write unit tests for the contact form's validation helpers and at least smoke-render tests for each page component.

---

### Contact Page — No Real Email Delivery

**Severity: High**

The contact form does not send email. It composes a `mailto:` URI and opens the user's local email client. This breaks silently for users who have no email client configured (common on desktop browsers), and the `VITE_API_URL` environment variable that suggests a backend integration is defined but unused. From a visitor's perspective, the form looks functional but may not result in a delivered message.

**Recommendation:** Integrate a backend email service (AWS SES, SendGrid, Resend, or a serverless API endpoint) to deliver form submissions reliably.

---

### Enterprise Page — Thin Content

**Severity: Medium**

At ~150 lines, `EnterprisePage.jsx` is significantly shorter and less detailed than the other service pages. It lacks the visual depth, icon treatments, and feature breakdowns present on the AWS and Custom Software pages. It currently reads more like a placeholder than a finished page.

**Recommendation:** Expand with concrete enterprise use cases, a technology stack visual, client outcomes or testimonials, and a stronger CTA.

---

### Custom Breakpoints — Non-Standard Values

**Severity: Medium**

The theme defines custom MUI breakpoints at non-standard values: `sm: 320`, `md: 360`, `lg: 750`. These deviate significantly from MUI defaults (sm: 600, md: 900, lg: 1200) and from common device widths. The `md` breakpoint at 360px fires at essentially the same time as `sm` (320px), creating a 40px window that is unlikely to trigger meaningful layout changes. This can produce confusing responsive behavior and makes it harder to reason about layouts.

**Recommendation:** Revisit breakpoint values to align more closely with standard device widths or document the rationale clearly if the custom values are intentional.

---

### P8 Rally Project Page — Limited Portfolio Detail

**Severity: Medium**

The P8 Project page is 208 lines but reads as sparse relative to its purpose as a portfolio showpiece. It lacks a technology stack breakdown, screenshots or mockups, problem/solution narrative, and any links to live demo or source repository. Portfolio pages are a primary tool for impressing prospective clients or employers.

**Recommendation:** Add a structured case-study layout: problem statement, role and approach, tech stack used, outcomes or metrics, and links to the project.

---

### Hobbies Page — Image Loading and Performance

**Severity: Medium**

The Hobbies page at ~494 lines is the largest page component and renders multiple image-heavy cards. There is no evidence of lazy image loading (`loading="lazy"`) or image optimization (WebP formats, responsive `srcset`). This page is likely the slowest to fully paint, especially on mobile connections.

**Recommendation:** Add `loading="lazy"` to `<img>` elements, compress and serve images in WebP format, and consider using an image CDN or Vite's asset pipeline for automatic optimization.

---

### Not Found Page — Generic Fallback Text

**Severity: Low**

The 404 page renders a Lottie animation but the surrounding copy and navigation options are minimal. Users who land on a broken or mistyped URL get limited guidance on where to go next.

**Recommendation:** Add a short message, a prominent "Go to Home" button, and optionally a search or top-level nav links to orient lost visitors.

---

### Header — Active State Sync Fragility

**Severity: Low**

The active tab and submenu index are tracked in `App.jsx` state and passed as props through to the Header. Syncing this state with the current URL on direct navigation or browser back/forward relies on `useEffect` logic within page components calling `setValue`/`setSelectedIndex`. This is error-prone and can result in the wrong tab appearing highlighted if a page forgets to call its setter or calls it with the wrong value.

**Recommendation:** Derive active navigation state directly from `useLocation()` within the Header rather than relying on each page to push state upward. This makes the highlighted tab always authoritative and eliminates the prop-threading.

---

### Environment Variables — Unused Definitions

**Severity: Low**

`.env.example` defines `VITE_API_URL` and `VITE_SOME_KEY` which are not referenced anywhere in the source code. Unused env vars add noise to the configuration and imply incomplete features.

**Recommendation:** Remove unused variable definitions from `.env.example` (and any `.env` files) until a concrete use is implemented.

---

### No Loading State for Lazy Routes

**Severity: Low**

The `<Suspense>` fallback for lazily-loaded page components is a bare `<div>Loading...</div>`. On slower connections, users see an unstyled plain-text loading message rather than a spinner, skeleton, or any branded experience consistent with the site's design.

**Recommendation:** Replace the fallback with a centered MUI `<CircularProgress />` or a skeleton layout that matches the site's visual identity.
