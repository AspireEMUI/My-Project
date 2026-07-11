# Customization Guide for Lumineux Beauty

This guide walks you through customizing the template for your own cosmetics brand.

## 1. Brand Identity

### Update Company Information
Edit `cosmetics-landing.html`:

```html
<!-- Change brand name -->
<h1>Your Brand Name</h1>
<span class="tagline">Your Tagline</span>

<!-- Update meta tags for SEO -->
<meta name="description" content="Your brand description">
<meta property="og:title" content="Your Brand - Premium Cosmetics">
```

### Change Colors
Edit `:root` in `styles.css`:

```css
:root {
    --primary: #your-primary-hex;        /* Main brand color */
    --primary-dark: #your-darker-shade;  /* Hover state */
    --secondary: #your-light-color;      /* Background accents */
    --accent: #your-accent-color;        /* Gold/bronze for text */
    --text-dark: #your-text-color;
    --text-light: #your-text-gray;
}
```

**Pro Tip**: Use a color palette generator like [Coolors.co](https://coolors.co) to create harmonious color schemes.

### Change Fonts
Replace in `<head>` of HTML:

```html
<!-- Add your Google Font links -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Your+Display+Font&family=Your+Body+Font&display=swap" rel="stylesheet">
```

Then update in `styles.css`:

```css
:root {
    --font-display: 'Your Display Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

## 2. Product Customization

### Add Your Products

1. **Replace Images**
   - Use high-quality product photos (JPG/PNG)
   - Minimum 400x400px for thumbnails
   - Host on your server or use Cloudinary, Imgix
   - Aspect ratio should be 1:1 (square)

2. **Update Product Cards**

```html
<article class="product-card">
    <div class="product-image">
        <img src="your-product-image.jpg" alt="Your Product Name">
        <span class="badge">Your Tag</span>  <!-- e.g., "Best Seller", "New" -->
    </div>
    <div class="product-info">
        <h3>Your Product Name</h3>
        <p class="category">Category Name</p>
        <div class="rating">
            <span class="stars">★★★★★</span>
            <span class="review-count">(123 reviews)</span>
        </div>
        <p class="price">$XX</p>
        <p class="description">Your product description</p>
        
        <!-- Optional: Shade/Variant Selector -->
        <div class="shades">
            <button class="shade" style="background-color: #hex1;" title="Shade 1"></button>
            <button class="shade" style="background-color: #hex2;" title="Shade 2"></button>
            <button class="shade" style="background-color: #hex3;" title="Shade 3"></button>
        </div>
        
        <button class="cta-secondary">Add to Cart</button>
    </div>
</article>
```

3. **Product Category Tags**

Modify `.category` class in `styles.css` if you need different styles for categories:

```css
.category {
    color: var(--accent);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}
```

## 3. Content Updates

### Hero Section
Edit the headline and CTA text:

```html
<h2>Your Headline</h2>
<p>Your value proposition goes here</p>
<button class="cta-primary">Your CTA Text</button>
```

### Trust Signals
Replace with your certifications/benefits:

```html
<div class="signal">
    <div class="signal-icon">🌿</div>
    <h3>Your Benefit</h3>
    <p>Description of this benefit</p>
</div>
```

### About Section
Update your brand story:

```html
<h2>Our Story</h2>
<p>Your company origin story and mission</p>
<p>Your values and commitment</p>
<p>Call-to-action or impact statement</p>
```

Replace the about image with your team/studio photo.

### Testimonials
Update with real customer reviews:

```html
<article class="testimonial">
    <div class="stars">★★★★★</div>
    <p class="quote">"Customer's exact words here"</p>
    <div class="reviewer">
        <div class="avatar">😊</div>  <!-- Or use emoji for brand personality -->
        <div>
            <strong>Customer Name</strong>
            <span>Verified Buyer</span>
        </div>
    </div>
</article>
```

### Footer Links
Update all footer links to point to your pages:

```html
<div class="footer-section">
    <h4>Your Section</h4>
    <ul>
        <li><a href="/your-page">Your Link</a></li>
        <li><a href="/another-page">Another Link</a></li>
    </ul>
</div>
```

## 4. Functionality Setup

### Newsletter Integration

#### Option A: Mailchimp
```html
<!-- Replace the newsletter form with Mailchimp embed -->
<form action="https://mailchimp.com/your-list-id" method="post">
    <input type="email" name="EMAIL" placeholder="Enter your email" required>
    <button type="submit" class="cta-primary">Subscribe</button>
</form>
```

#### Option B: ConvertKit
```html
<!-- Add ConvertKit script to <head> -->
<script async data-uid="YOUR_UID" src="https://YOUR_DOMAIN.ck.page/YOUR_ID/index.js"></script>
```

#### Option C: Custom API
Update `script.js`:

```javascript
async function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value;
    
    try {
        const response = await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        
        if (response.ok) {
            showNotification('Thanks for subscribing!', 'success');
            event.target.reset();
        }
    } catch (error) {
        showNotification('Error subscribing. Try again.', 'error');
    }
}
```

### Payment Integration

#### Stripe Checkout
```javascript
// Add Stripe script to <head>
<script src="https://js.stripe.com/v3/"></script>

// Update checkout button in script.js
document.querySelector('.cta-primary').addEventListener('click', async () => {
    const stripe = Stripe('YOUR_PUBLISHABLE_KEY');
    
    const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart.items })
    });
    
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
});
```

#### Shopify Buy Button
```html
<!-- Add to <head> -->
<script src="https://cdn.shopify.com/s/files/1/0247/7118/4051/t/13/assets/shop-js.js"></script>

<!-- Add to product section -->
<div id="product-component-YOUR_ID"></div>

<script>
/*{%- if shop.enabled_currencies.size > 1 -%}*/
  ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('product', {
      id: YOUR_PRODUCT_ID,
      node: document.getElementById('product-component-YOUR_ID'),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
    });
  });
/*{%- endif -%}*/
</script>
```

### Analytics Setup

#### Google Analytics 4
```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_YOUR_ID');
</script>
```

#### Facebook Pixel
```html
<!-- Add to <head> -->
<script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 5. SEO Optimization

### Update Meta Tags

```html
<meta name="description" content="Your unique brand description, under 160 chars">
<meta property="og:title" content="Your Brand Name">
<meta property="og:description" content="What makes your products special">
<meta property="og:image" content="https://your-domain.com/og-image.jpg">
<meta property="og:url" content="https://your-domain.com">
<meta name="keywords" content="cosmetics, makeup, skincare, your-niche">
```

### Add Structured Data (Schema.org)

```html
<!-- Add to <head> -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Brand Name",
  "url": "https://your-domain.com",
  "logo": "https://your-domain.com/logo.png",
  "description": "Your brand description",
  "sameAs": [
    "https://instagram.com/your-handle",
    "https://facebook.com/your-page",
    "https://tiktok.com/@your-handle"
  ]
}
</script>

<!-- For each product, add: -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "image": "https://your-domain.com/product.jpg",
  "description": "Product description",
  "brand": "Your Brand Name",
  "offers": {
    "@type": "Offer",
    "price": "29.99",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "248"
  }
}
</script>
```

## 6. Performance Optimization

### Image Optimization
1. **Use WebP format** with JPG fallback
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.jpg" alt="Product">
   </picture>
   ```

2. **Compress images** using:
   - [TinyPNG](https://tinypng.com)
   - [ImageOptim](https://imageoptim.com)
   - [Squoosh](https://squoosh.app)

3. **Lazy load off-screen images**:
   ```html
   <img src="image.jpg" loading="lazy" alt="Product">
   ```

### Font Optimization
```css
/* Load only what you need */
@import url('https://fonts.googleapis.com/css2?family=Font:wght@400;600;700&display=swap');

/* Limit font weights */
--font-body: 'Font', sans-serif; /* 400, 600 only */
--font-display: 'Font', serif;   /* 700 only */
```

### CSS Optimization
```bash
# Minify CSS for production
# Use an online tool or build process:
# - PurgeCSS to remove unused styles
# - CSSNano to compress
# - PostCSS for vendor prefixes
```

## 7. Mobile Optimization

### Test Responsive Design
- Chrome DevTools (F12) → Device Toolbar
- iOS Simulator (Mac)
- Android Emulator
- Real devices (iPhone, Android)

### Mobile-Specific Adjustments
```css
/* Add to styles.css if needed */
@media (max-width: 640px) {
    /* Stack navigation vertically */
    .nav {
        display: flex;
        flex-direction: column;
    }
    
    /* Larger touch targets */
    button {
        min-height: 44px;
        min-width: 44px;
    }
    
    /* Reduce padding on small screens */
    .container {
        padding: 0 var(--spacing-sm);
    }
}
```

## 8. Accessibility Enhancements

### Add Skip Navigation Link
```html
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <header>...</header>
    <main id="main-content">...</main>
</body>
```

```css
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary);
    color: white;
    padding: 8px;
    z-index: 100;
}

.skip-link:focus {
    top: 0;
}
```

### Keyboard Navigation
Ensure all interactive elements are accessible:
```html
<!-- Add tabindex only when necessary -->
<button tabindex="0">Click me</button>

<!-- Use semantic HTML for better keyboard support -->
<a href="/">Home</a>
<button type="submit">Submit</button>
```

### Screen Reader Testing
- NVDA (Windows, free)
- JAWS (Windows, paid)
- VoiceOver (Mac, built-in)

## 9. Security

### Add Security Headers (Server-side)

If using Netlify, add `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Form Validation
Always validate on both client and server:
```javascript
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function handleNewsletterSubmit(event) {
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (!validateEmail(email)) {
        showNotification('Invalid email address', 'error');
        return;
    }
    
    // Proceed with submission
}
```

## 10. Launch Checklist

Before going live:

- [ ] Brand colors and fonts applied
- [ ] All product images uploaded and optimized
- [ ] Product info (names, prices, descriptions) updated
- [ ] Team photos/about section updated
- [ ] Testimonials replaced with real reviews
- [ ] Newsletter email provider connected
- [ ] Payment gateway integrated
- [ ] Analytics set up and tracking
- [ ] SEO meta tags customized
- [ ] Mobile responsiveness tested
- [ ] Accessibility audit passed
- [ ] Performance checked (Lighthouse)
- [ ] SSL certificate installed
- [ ] Security headers configured
- [ ] Contact/support email configured
- [ ] Social media links updated
- [ ] Privacy policy written and linked
- [ ] Terms of service written and linked
- [ ] Cookie consent (if needed in your region)

## Need Help?

Common customization questions:

**Q: How do I add more products?**
A: Duplicate a `.product-card` and update the content. The JavaScript will automatically detect it.

**Q: Can I change the layout?**
A: Yes! Edit grid columns in media queries. Change `grid-template-columns: repeat(3, 1fr)` to whatever you need.

**Q: How do I add product filters?**
A: Add category buttons above the product grid and filter with JavaScript:
```javascript
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.target.dataset.category;
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.display = 
                card.dataset.category === category || category === 'all' ? 'block' : 'none';
        });
    });
});
```

**Q: Can I add a blog?**
A: Yes! Create a `/blog` directory with a similar structure. Use the same CSS for consistency.

---

Happy customizing! 🎨✨
