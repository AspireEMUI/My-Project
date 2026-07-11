# Code Snippets & Common Tasks

Quick copy-paste snippets for common customization tasks.

## 🎨 Customize Brand Colors

### Find & Replace in styles.css

**Current colors:**
```css
:root {
    --primary: #d4a5a5;           /* Rose gold - main brand color */
    --primary-dark: #b8858a;      /* Darker shade for hover states */
    --secondary: #f5e6e0;         /* Cream - light backgrounds */
    --accent: #8b6f47;            /* Gold-brown - text accents */
}
```

**To change to your colors:**
1. Find hex color value for your brand
2. Use find & replace (Ctrl+H in most editors)
3. Replace old hex with new hex
4. Save and refresh browser

**Example - Purple theme:**
```css
--primary: #9b59b6;           /* Purple */
--primary-dark: #8e44ad;      /* Dark purple */
--secondary: #f4ecf7;         /* Light purple */
--accent: #d35400;            /* Orange accent */
```

---

## 📝 Add Custom Fonts

### Import from Google Fonts

**Step 1: Find your fonts**
1. Go to [fonts.google.com](https://fonts.google.com)
2. Select fonts you like
3. Copy the `@import` code

**Step 2: Add to styles.css**
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font+Name:wght@400;600;700&display=swap');
```

**Step 3: Update font variables**
```css
:root {
    --font-display: 'Your Font Name', serif;
    --font-body: 'Your Other Font', sans-serif;
}
```

**Popular font combinations for cosmetics:**
```css
/* Elegant */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Lato:wght@400;500&display=swap');
:root {
    --font-display: 'Cormorant Garamond', serif;
    --font-body: 'Lato', sans-serif;
}

/* Modern */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
:root {
    --font-display: 'Poppins', sans-serif;
    --font-body: 'Poppins', sans-serif;
}

/* Luxury */
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&family=Raleway:wght@300;400;500&display=swap');
:root {
    --font-display: 'Montserrat Subrayada', sans-serif;
    --font-body: 'Raleway', sans-serif;
}
```

---

## 🛍️ Add New Product

### Minimal Product Card

Copy this entire block and paste it in the `.product-grid` section:

```html
<article class="product-card">
    <div class="product-image">
        <img src="https://images.unsplash.com/photo-YOUR-IMAGE?w=400&q=80"
             alt="Your Product Name"
             loading="lazy">
        <span class="badge">Your Tag</span>
    </div>
    <div class="product-info">
        <h3>Your Product Name</h3>
        <p class="category">Category</p>
        <div class="rating">
            <span class="stars">★★★★★</span>
            <span class="review-count">(123 reviews)</span>
        </div>
        <p class="price">$XX</p>
        <p class="description">Your product description</p>
        <button class="cta-secondary">Add to Cart</button>
    </div>
</article>
```

### With Shade Selector

```html
<article class="product-card">
    <div class="product-image">
        <img src="IMAGE_URL" alt="Product Name" loading="lazy">
        <span class="badge">New</span>
    </div>
    <div class="product-info">
        <h3>Lipstick Name</h3>
        <p class="category">Lips</p>
        <div class="rating">
            <span class="stars">★★★★★</span>
            <span class="review-count">(248 reviews)</span>
        </div>
        <p class="price">$28</p>
        <div class="shades">
            <button class="shade" style="background-color: #c9956c;" title="Shade 1" aria-label="Shade 1"></button>
            <button class="shade" style="background-color: #8b4238;" title="Shade 2" aria-label="Shade 2"></button>
            <button class="shade" style="background-color: #d4a5a5;" title="Shade 3" aria-label="Shade 3"></button>
        </div>
        <button class="cta-secondary">Add to Cart</button>
    </div>
</article>
```

---

## 📧 Connect Mailchimp Newsletter

### Get Your Form Action URL

1. Go to Mailchimp dashboard
2. Click "Audience"
3. Go to "Signup forms" → "Hosted forms"
4. Copy the form action URL

### Replace Newsletter Form

In `cosmetics-landing.html`, find and replace:

```html
<!-- BEFORE -->
<form class="newsletter-form" onsubmit="handleNewsletterSubmit(event)">
    <input type="email" placeholder="Enter your email" required>
    <button type="submit" class="cta-primary">Subscribe</button>
</form>

<!-- AFTER (Mailchimp) -->
<form action="YOUR_MAILCHIMP_FORM_ACTION" method="POST" class="newsletter-form">
    <input type="email" name="EMAIL" placeholder="Enter your email" required>
    <input type="hidden" name="u" value="YOUR_U_VALUE">
    <input type="hidden" name="id" value="YOUR_LIST_ID">
    <button type="submit" class="cta-primary">Subscribe</button>
</form>
```

---

## 💳 Add Stripe Checkout

### Simple Stripe Integration

In `script.js`, replace the checkout button handler:

```javascript
// Add Stripe script to HTML head first:
// <script src="https://js.stripe.com/v3/"></script>

// Then add this to script.js:
async function initiateCheckout() {
    const stripe = Stripe('YOUR_PUBLISHABLE_KEY');
    
    const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: cart.items
        })
    });
    
    const session = await response.json();
    await stripe.redirectToCheckout({sessionId: session.id});
}

// Update button:
// <button onclick="initiateCheckout()" class="cta-primary">Proceed to Checkout</button>
```

---

## 🔍 Add Product Search

### Quick Search Implementation

Add this to `script.js`:

```javascript
function initSearch() {
    const searchInput = document.querySelector('#product-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase();
        const products = document.querySelectorAll('.product-card');
        
        products.forEach(product => {
            const name = product.querySelector('h3').textContent.toLowerCase();
            const matches = name.includes(query);
            product.style.display = matches ? 'block' : 'none';
        });
    });
}

// Call when page loads:
document.addEventListener('DOMContentLoaded', initSearch);
```

Add this HTML to product section:
```html
<input type="text" id="product-search" placeholder="Search products..." 
       style="width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px;">
```

---

## ⭐ Add Product Ratings

### Update Product Card with Rating

```html
<div class="rating">
    <span class="stars">★★★★☆</span>
    <span class="review-count">(156 reviews)</span>
</div>
```

**Star options:**
- 5 stars: `★★★★★`
- 4.5 stars: `★★★★☆`
- 4 stars: `★★★★☆` (same visual)
- 3.5 stars: `★★★☆☆`
- 3 stars: `★★★☆☆`

---

## 📱 Add Mobile Menu

### Hamburger Menu Implementation

Add to HTML (in `<header>`):
```html
<button class="mobile-menu-toggle" id="mobile-menu-btn" aria-label="Toggle menu">
    <span></span>
    <span></span>
    <span></span>
</button>
```

Add to `styles.css`:
```css
.mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
}

.mobile-menu-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background: var(--text-dark);
    margin: 5px 0;
    transition: 0.3s;
}

@media (max-width: 768px) {
    .mobile-menu-toggle {
        display: block;
    }
    
    .nav {
        display: none;
    }
    
    .nav.open {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        background: white;
        padding: 20px;
        border-bottom: 1px solid var(--border-light);
    }
}
```

Add to `script.js`:
```javascript
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');
});
```

---

## 🎯 Track Events in Google Analytics

### Add to Cart Tracking

In `script.js`, add to your cart button click handler:

```javascript
gtag('event', 'add_to_cart', {
    product_name: 'Velvet Matte Lipstick',
    product_price: 28,
    product_category: 'Lips'
});
```

### Newsletter Signup Tracking

In `script.js`, add to newsletter submit:

```javascript
gtag('event', 'newsletter_signup', {
    email: emailValue
});
```

### Page View Tracking (already included)

```javascript
gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href
});
```

---

## 🔐 Add Contact Form

### Simple Contact Form HTML

```html
<section id="contact" class="contact">
    <div class="container">
        <h2>Get In Touch</h2>
        <form onsubmit="handleContactSubmit(event)" style="max-width: 600px; margin: 0 auto;">
            <input type="text" placeholder="Your Name" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 4px;">
            <input type="email" placeholder="Your Email" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 4px;">
            <textarea placeholder="Your Message" rows="5" required style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 4px;"></textarea>
            <button type="submit" class="cta-primary" style="width: 100%;">Send Message</button>
        </form>
    </div>
</section>
```

### Handle Contact Form Submission

Add to `script.js`:

```javascript
async function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            showNotification('Message sent! We\'ll get back to you soon.', 'success');
            form.reset();
        } else {
            showNotification('Error sending message. Please try again.', 'error');
        }
    } catch (error) {
        showNotification('Error sending message. Please try again.', 'error');
    }
}
```

---

## 💰 Display Pricing Tiers

### Multiple Pricing Options

```html
<section class="pricing">
    <div class="container">
        <h2>Shop By Bundle</h2>
        <div class="pricing-grid">
            <div class="pricing-card">
                <h3>Starter</h3>
                <p class="price">$49</p>
                <ul>
                    <li>3 lipsticks</li>
                    <li>Free shipping</li>
                    <li>Premium packaging</li>
                </ul>
                <button class="cta-primary">Choose Bundle</button>
            </div>
            
            <div class="pricing-card featured">
                <span class="badge">Most Popular</span>
                <h3>Essentials</h3>
                <p class="price">$89</p>
                <ul>
                    <li>5 products</li>
                    <li>Free shipping</li>
                    <li>Gift box included</li>
                    <li>15% off next order</li>
                </ul>
                <button class="cta-primary">Choose Bundle</button>
            </div>
            
            <div class="pricing-card">
                <h3>Complete</h3>
                <p class="price">$149</p>
                <ul>
                    <li>Complete collection</li>
                    <li>Free express shipping</li>
                    <li>VIP access to new launches</li>
                    <li>20% loyalty rewards</li>
                </ul>
                <button class="cta-primary">Choose Bundle</button>
            </div>
        </div>
    </div>
</section>
```

### Pricing Card Styles

Add to `styles.css`:

```css
.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.pricing-card {
    border: 1px solid var(--border-light);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    position: relative;
}

.pricing-card.featured {
    border-color: var(--primary);
    box-shadow: 0 0 20px rgba(212, 165, 165, 0.2);
    transform: scale(1.05);
}

.pricing-card .price {
    font-size: 2rem;
    color: var(--accent);
    font-weight: 700;
    margin: 1rem 0;
}

.pricing-card ul {
    list-style: none;
    text-align: left;
    margin: 1.5rem 0;
}

.pricing-card li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-light);
}

.pricing-card li:before {
    content: "✓ ";
    color: var(--primary);
    font-weight: 700;
}
```

---

## 🎁 Add Testimonial

### New Testimonial Card

```html
<article class="testimonial">
    <div class="stars">★★★★★</div>
    <p class="quote">"This is the best product I've ever tried. I'm obsessed!"</p>
    <div class="reviewer">
        <div class="avatar">😍</div>
        <div>
            <strong>Customer Name</strong>
            <span>Verified Buyer</span>
        </div>
    </div>
</article>
```

---

## 🌍 Translate to Multiple Languages

### Language Toggle (Basic)

Add to HTML:
```html
<div class="language-selector">
    <button onclick="setLanguage('en')">English</button>
    <button onclick="setLanguage('es')">Español</button>
    <button onclick="setLanguage('fr')">Français</button>
</div>
```

Add to `script.js`:
```javascript
const translations = {
    en: {
        'shop': 'Shop',
        'about': 'About',
        'cta': 'Shop Collection'
    },
    es: {
        'shop': 'Tienda',
        'about': 'Acerca de',
        'cta': 'Comprar Colección'
    },
    fr: {
        'shop': 'Boutique',
        'about': 'À Propos',
        'cta': 'Acheter Collection'
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    // Update text elements here
}
```

---

## 📊 Display Sales Counter

### Live Counter (Fake Real-Time)

```html
<div class="counter" style="text-align: center; padding: 2rem; background: var(--secondary); border-radius: 8px;">
    <p style="font-size: 2rem; font-weight: 700; color: var(--primary);">
        <span id="sales-count">1,247</span> Happy Customers
    </p>
    <p>Joined the Lumineux family this month</p>
</div>
```

Add to `script.js`:
```javascript
function animateCounter() {
    let count = 0;
    const target = 1247;
    const counter = document.getElementById('sales-count');
    
    const increment = setInterval(() => {
        count += Math.random() * 50;
        if (count >= target) {
            count = target;
            clearInterval(increment);
        }
        counter.textContent = Math.floor(count).toLocaleString();
    }, 100);
}

document.addEventListener('DOMContentLoaded', animateCounter);
```

---

Last Updated: July 2026
