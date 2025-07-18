## Changes Made

---

### Navbar

- Extracted header markup into a reusable `Navbar` component (`src/components/Navbar.tsx`).
- Replaced raw layout with semantic `<header>` and `<nav>`-like structure using Tailwind CSS.
- Used `useIsMobile()` hook to hide the search bar on small screens for better responsive behavior.
- Added `aria-label` to search input and `alt=""` to logo image to improve accessibility.
- Ensured all interactive elements (input, avatar) are focusable and usable with keyboard navigation.

---

### HeroBanner

- Extracted hero image section into a new `HeroBanner` component (`src/components/HeroBanner.tsx`).
- Wrapped the entire block in a `<section>` for semantic structure and accessibility.
- Marked the background image as decorative using `alt=""` and `aria-hidden="true"`.
- Applied a black overlay and centered headline content using Tailwind utilities.
- Ensured responsive typography (`text-3xl md:text-5xl`) for clean scaling across devices.

---

### HeroSearch

- Extracted search form into a `HeroSearch` component (`src/components/HeroSearch.tsx`) with typed props.
- Removed unnecessary `useEffect` that triggered `onSearch()` on every keystroke — replaced with clean form submission.
- Search now only runs when the user submits the form via Enter key or clicking the Search button.
- Added `aria-label` to the input and made icons decorative (`aria-hidden`).
- Used semantic `<form>` element for better accessibility and keyboard support.
- Simplified state logic and applied consistent Tailwind styling for visual clarity.

---

### TagList

- Extracted the tag list into a reusable `TagList` component (`src/components/TagList.tsx`) with typed props.
- Used semantic elements: `<section>` as wrapper, `<h2>` for title, and `<ul>`/`<li>` for tag items.
- Converted `Badge` components into interactive tag buttons with `role="button"`, `tabIndex={0}`, and `aria-label` for screen readers.
- Added keyboard support (trigger `onClick` with Enter key) for accessibility.
- Applied consistent spacing and wrapping via `flex-wrap` and responsive layout utilities.

---

### General

- Broke down large `App.tsx` into modular, reusable components for improved readability and maintainability.
- Ensured consistent use of Tailwind utility classes across components.
- Applied accessibility best practices across UI elements (form inputs, icons, badges, images).
- Verified responsive behavior across desktop and mobile breakpoints.
