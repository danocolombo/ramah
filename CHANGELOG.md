# Changelog

Branch comparison reference:

- `git log 2026.05.02..2026.05.03 --oneline` — current branch only
- `git log main..2026.05.02 --oneline` — predecessor branch vs `main`

---

## 2026.05.02 → 2026.05.03

**Commits:** `a2f6595` — *packages updated, react to 19.2*

### Tooling

- Replaced **Create React App** (`react-scripts`) with **Vite** (`vite`, `@vitejs/plugin-react`).
- Switched tests to **Vitest** (`vitest`, `jsdom`); `npm test` runs `vitest run`.
- Added root **`index.html`**, **`vite.config.js`**, **`jsconfig.json`**; removed **`public/index.html`** (Vite uses the root template).
- **`package.json`:** `"type": "module"`; scripts `start` / `dev` → `vite`, `build` → `vite build`, `preview` → `vite preview`.
- Regenerated **`package-lock.json`** for the new dependency graph.

### Dependencies (high level)

- **React** 17 → **19**; **React DOM** aligned; **React Router DOM** 5 → **7**.
- **MUI** consolidated on **`@mui/material`** and **`@mui/icons-material`** **v9** (removed **`@material-ui/*`** from declared dependencies).
- **Emotion** bumped; **Testing Library** packages moved to **devDependencies** and upgraded.
- Dropped **`web-vitals`** and CRA **`eslintConfig`** from the manifest (tooling is Vite-centric now).

### Application code

- **Entry:** `src/index.js` → **`src/main.jsx`** using **`createRoot`** from `react-dom/client` (and `StrictMode`).
- **Routing (`App`):** `Switch` / `Redirect` / `Route` `render` → **`Routes`** / **`Route element`** / **`Navigate`** for React Router v7; removed duplicate stub routes that never matched under v5.
- **Env:** `.env.example` added; client config uses **`VITE_*`** and **`import.meta.env`** (e.g. contact flow).
- **Filenames:** React modules that contain JSX renamed **`.js` → `.jsx`** for Vite/Rollup; **`theme.js`** and Lottie **`data.js`** files kept as `.js`.
- **UI components:** broad updates across pages and layout (`header`, `footer`, AWS, contact, hobbies, landing, recovery, P8, NotFound, Kitchen, Woodshop, theme`, etc.) for MUI v9 / Emotion and router usage.
- **`.gitignore`:** `dist` added; **`README.md`** adjusted for Vite.

---

## main → 2026.05.02

**Commits:** `d1ce044` — *starting dev* · `5b1d8a9` — *working locally* · `d07beaf` — *audit fixes in place*

### Tooling & repo layout

- **Node:** added **`.nvmrc`** and **`engines.node`** (`>=24.11.0 <25`).
- **Package manager:** removed **`yarn.lock`**; added **`package-lock.json`** for npm.
- **CRA:** **`react-scripts`** **4.0.3 → 5.0.1** (React 17–compatible toolchain on this branch).
- **Dependencies:** removed **`axios`**; aligned **`react-dom`** to **`^17.0.2`** (on `main` it was **`^16.9.0`** while **`react`** was 17 — inconsistent peers).
- **Security / supply chain:** added npm **`overrides`** (e.g. `nth-check`, `postcss`, `uuid`, `serialize-javascript`, …) as part of audit-driven fixes.

### Removed / retired from the tree

- **Firebase hosting & Cloud Functions:** `.firebaserc`, `firebase.json`, **`functions/`** package and sources removed.
- **`dano.js`** (large standalone script) removed.
- **`README.old.md`** removed; **`README.md`** updated.

### Application & assets

- **`contactme`**, **`header`** (and **`header copy`**), **`HobbiesPage`**, Lottie **`data.js`** animation JSON: edits and cleanups.
- **`EnterprisePage`**, **`LandingPage`**, **`RecoveryPage`**, **`P8ProjectPage copy`:** reductions or tidy-ups per diff.
- **`AWSFlash`** / **`AWSPage`:** small line removals.
- **`.gitignore`:** extended; **`.env`** touched (local env; still not for version control).

---

## Earlier history

Changes before `main` (e.g. merged PRs) are not listed here; see `git log main --oneline`.
