# HAVI Project Overview

## Overall Summary

HAVI is an oncology information platform designed to empower patients and caregivers with trusted cancer information, tools for symptom triage, and pathways to clinical resources. The project is a React + Vite single-page app with an emphasis on clear patient-facing UX, privacy-preserving authentication, and extensible integrations (hospital records, AI triage).

## Technical Stack

- Frontend: React 19, Vite
- Bundler / Dev server: Vite
- Styling: CSS (component CSS files, currently `src/App.css`)
- Routing: (recommended) `react-router-dom`
- Authentication (options): Firebase Auth / OAuth / custom JWT (backend)
- Optional services: Firebase, Sentry (errors), Analytics (GA4)

Current dependencies (from `package.json`): `react`, `react-dom`, dev: `vite`, `@vitejs/plugin-react`, eslint tooling.

## Key Features

- Login / Authentication (Feature 1): Sign in / Sign up flow, session management, social login options. Enables saved articles, personalized recommendations, and protected actions like booking appointments.
- Title / Landing Page Optimization (Feature 2): A stronger hero section, clearer CTAs, trust signals, responsive layout, and accessibility improvements.
- Personalization & Saved Content (Feature 3): Bookmark articles, reading history, and tailored recommendations. (Planned)
- Medical UX Enhancements (Feature 4): Glossary, AI symptom triage flow, guided questionnaires, and clear clinical disclaimers.

## TO-DO List

- [ ] Feature 1 — Login / Authentication
  - [ ] Choose auth approach (prototype via mock, or Firebase for quick integration)
  - [ ] Add dependency: `react-router-dom` and (optional) `firebase`
  - [ ] Implement `AuthProvider` context to manage auth state
  - [ ] Create `Login` page/component with client-side validation
  - [ ] Create `SignUp` and `ResetPassword` flows (optional initial stub)
  - [ ] Implement `ProtectedRoute` for guarded pages
  - [ ] Persist session for dev (localStorage) and plan for secure httpOnly cookies for production
  - [ ] Add basic unit/e2e tests for auth flows

- [ ] Feature 2 — Title / Landing Page Optimization
  - [ ] Update `index.html` meta title and description (`HAVI — Oncology Information Platform`) and Open Graph tags
  - [ ] Refactor `App.jsx` into `Home` + smaller components (`Header`, `Hero`, `Search`, `Recommendations`)
  - [ ] Move inline styles into `App.css` (or CSS modules) and add responsive rules
  - [ ] Implement accessible form controls and labels for the search input
  - [ ] Add trust signals (sources, editorial board) and primary CTA ('Search' / 'Get Started')
  - [ ] Performance: lazy-load heavy components (AI triage), optimize images, preload fonts

- [ ] Feature 4 — Medical UX Enhancements
  - [ ] Design a step-by-step symptom-triage flow (modal or separate route)
  - [ ] Create a medical glossary and FAQ component
  - [ ] Implement an AI Triage stub component (mocked responses) for prototyping
  - [ ] Add clinical disclaimers and privacy notices in UI flows
  - [ ] Plan for hospital integration (SMART on FHIR / OAuth) — design API contract
  - [ ] Validate UX with accessibility and readability checks (large fonts, spacing)

## Notes

(blank)
