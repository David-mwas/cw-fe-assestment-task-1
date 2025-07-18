### Header

- Extracted to `src/components/Navbar.tsx` for reusability.
- Toggles the search input on mobile via `useIsMobile()` for better responsive UX.
- Added `aria-label` on input and `alt=""` on logo image to satisfy accessibility.

### HeroSearch

- Moved into its own component with typed props (`HeroSearchProps`).
- Wrapped in a `<form>` so users can hit Enter to submit.
- Added `aria-label` on the form and input; `aria-hidden` on decorative icon.

### HeroBanner

- Extracted to `src/components/HeroBanner.tsx`.
- Marked background image as decorative (`alt=""`, `aria-hidden`).
- Responsive headline sizing (`text-2xl md:text-5xl`).
