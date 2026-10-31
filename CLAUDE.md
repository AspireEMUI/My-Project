# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Lush Shine** — a static cosmetics landing page (HTML/CSS/JavaScript) customizable as both a B2C product site and a sellable template. No build tools, no dependencies, no database.

- **Main files:** `cosmetics-landing.html` (350+ lines), `styles.css` (1000+ lines), `script.js`
- **No build step:** Open HTML directly in browser or serve locally
- **Status:** Production-ready, extensively documented (18+ guides)

## Quick Start Commands

```bash
# Serve locally on http://localhost:8000
npm run serve

# Or manually with Python
python -m http.server 8000

# Linting (optional, eslint installed)
npm run lint
```

## Architecture & Key Patterns

### Static Site Structure
- **HTML:** Semantic structure with 9 product cards, hero section, testimonials, newsletter signup, contact footer
- **CSS:** Mobile-first responsive design, CSS variables for theming, dark mode support via `prefers-color-scheme`
- **JavaScript:** Shopping cart (localStorage-backed), form validation, smooth scroll handlers

### Product Management
- **Products defined in HTML** — 9 product cards in the products section (~line 50–150)
- **Image paths:** Local images in `images/` folder named sequentially (e.g., `images/01-vitamin-c-serum.jpeg`)
- **Note:** Images are currently being mapped to products; verify product-to-image correspondence in HTML before deployment

### Shopping Cart
- Vanilla JS, no dependencies
- Persisted in localStorage as JSON
- **Cart methods:** `cart.addItem(product)`, `cart.getTotal()`, `cart.removeItem(id)`, `cart.updateQuantity(id, qty)`
- Checkout button in modal can be wired to Stripe, PayPal, or custom backend

### Design System (CSS Variables)
- **Primary colors:** `--primary: #d4a5a5` (rose gold), `--accent: #8b6f47` (gold-brown)
- **Typography:** Playfair Display (display), system fonts (body)
- **Responsive grid:** 1 column (mobile), 2 (tablet), 3+ (desktop)

## Customization Hotspots

Edit these in `cosmetics-landing.html`:

| What | Where | Example |
|------|-------|---------|
| Brand name | Line ~19 | `<h1>Lush Shine</h1>` |
| Tagline | Line ~20 | `Natural Skincare for Radient Glow` |
| Page title | Line ~10 | `<title>...</title>` |
| Meta description | Line ~6 | For SEO & social sharing |
| Social links | Footer (~line 320+) | Instagram, Facebook, TikTok URLs |
| Contact info | Footer | Address, phone, email |
| Product prices | Product cards | Update `$XX` in card markup |
| Product images | Product cards | Change `images/XX-productname.jpeg` paths |

## Image Asset Management

- **Folder:** `images/` at project root
- **Current files:** 9 JPEG files (`01-*.jpeg` through `09-*.jpeg`)
- **Naming convention:** Sequential by file order (may not match product names — verify mapping)
- **Absolute paths required if moving folder** — currently referenced as relative paths (`images/XX.jpeg`)

**Action item:** Confirm each image file matches its intended product before deployment.

## Responsive Design Breakpoints

| Breakpoint | Device | Grid Columns |
|-----------|--------|--------------|
| < 640px | Mobile | 1 |
| 640px–768px | Tablet | 2 |
| 768px–1024px | Large tablet | 3 |
| > 1024px | Desktop | 4 |

Adjust in CSS media queries if needed.

## Deployment

- **Hosting:** Netlify (scripts provided: `deploy-netlify.bat` for Windows, `deploy-netlify.sh` for Mac/Linux)
- **Static files only** — no server-side logic required
- **Checkout integration:** Stripe, PayPal, or custom backend can be wired via cart modal button
- **Newsletter:** Email validation done, but backend endpoint must be added in `script.js` (currently POSTs to `/api/newsletter`)

## Testing & Verification

Before deploying:

1. **Visual check:** Open `cosmetics-landing.html` in browser (Chrome, Firefox, Safari)
2. **Responsive test:** Resize browser or use mobile device view (DevTools)
3. **Cart flow:** Add/remove items, verify count updates, check localStorage
4. **Form validation:** Try newsletter signup with invalid/valid email
5. **Accessibility:** Tab through page, check color contrast (WCAG AA)

Run linter if needed:
```bash
npx eslint script.js
```

## Git Workflow

- **Branch:** Always use feature branches, PR to main
- **Commit convention:** Descriptive messages (e.g., "Add product images and update pricing")
- **Current status:** 2 files have uncommitted changes (`settings.local.json`, `QUICK_CUSTOMIZE_CHECKLIST.md`)

## Related Documentation

For deeper dives, see:
- `README.md` — Full feature list, SEO, accessibility
- `QUICK_CUSTOMIZE_CHECKLIST.md` — Step-by-step brand customization
- `DEPLOYMENT_GUIDE.md` — Netlify deployment walkthrough
- `FAQ.md` — 50+ answers to common questions

## Current Work Notes

- **Lush Shine brand:** Natural skincare, 9 products (serums, face washes, sunblock, cleansers, acne treatment)
- **Contact:** +92-91-2210646, Suit#9/B-1 Ground Floor Nasir Mansion Shoba Bazar Peshawar City
- **Social handles:** Instagram @LushShine, TikTok @LushShine, Facebook "Lush Shine"
- **Active issue:** Verify product-to-image mapping (images may be assigned to wrong products)

---

**For new Claude Code instances:** Start with the brand/product customization, verify images map correctly to products, then test locally before deployment to Netlify.
