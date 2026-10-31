# Lush Shine - Next.js

Premium natural skincare landing page built with Next.js, React, and modern CSS.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.js           # Root layout with metadata
│   ├── page.js             # Main page component
│   ├── globals.css         # Global styles (header, buttons, etc)
│   └── page.module.css     # Component-specific styles
├── components/
│   ├── Header.js           # Navigation & cart button
│   ├── Hero.js             # Hero banner section
│   ├── TrustSignals.js     # Trust signal cards
│   ├── ProductsSection.js  # Product grid
│   ├── ProductDetailModal.js # Product detail with gallery
│   ├── CartModal.js        # Shopping cart modal
│   ├── Testimonials.js     # Customer reviews
│   ├── About.js            # Brand story
│   ├── Newsletter.js       # Email signup
│   └── Footer.js           # Footer with contact info
├── hooks/
│   └── useCart.js          # Shopping cart logic (localStorage-backed)
├── lib/
│   └── products.js         # Product database
├── public/
│   └── images/             # Product images (from original)
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## Key Features

- ✨ **Server-Side Rendering** — Fast page loads with Next.js
- 🛒 **Shopping Cart** — localStorage-persisted, no backend needed
- 📱 **Responsive Design** — Mobile-first, works on all devices
- 🎨 **Customizable** — CSS variables for easy theme changes
- ⚡ **Fast** — Image optimization, lazy loading
- ♿ **Accessible** — Semantic HTML, ARIA labels

## Cart Management

The `useCart()` hook provides:
- `addItem(product)` — Add to cart
- `removeItem(productId)` — Remove from cart
- `updateQuantity(productId, qty)` — Change quantity
- `getTotal()` — Calculate cart total
- `getCount()` — Get item count

Cart data persists in `localStorage` under key `lush-cart`.

## Product Data

Products are defined in `lib/products.js` with fields:
- `id`, `name`, `category`, `price`
- `mainImage`, `additionalImages`
- `features`, `sizes`
- `rating`, `badge`, `isNew`, `isActive`

To add/edit products, update the array in `lib/products.js`.

## Images

Product images should be placed in `public/images/` and referenced by filename:
```javascript
mainImage: 'images/02-Charcoal-Cleanser.jpeg'
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments.

### Other Platforms
- Netlify: `vercel build && netlify deploy --prod`
- AWS, Azure, DigitalOcean: Standard Node.js deployment

## Customization

### Brand Colors
Edit CSS variables in `app/globals.css`:
```css
--primary: #d4a5a5;        /* Rose gold */
--accent: #8b6f47;         /* Gold-brown */
```

### Contact Info
Update in `components/Footer.js`:
```javascript
<p><strong>Phone:</strong> +92-91-2210646</p>
```

### Products
Edit `lib/products.js` and add/remove items in the `productsDatabase` array.

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint

## Environment Variables

No external APIs required by default. If adding backend features, create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## License

© 2026 Lush Shine. All rights reserved.
