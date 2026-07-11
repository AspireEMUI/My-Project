# 🎨 30-Minute Brand Customization Checklist

**Goal:** Transform the template into YOUR brand in 30 minutes.  
**Time:** Exactly 30 minutes if you follow this in order.

---

## ⏱️ PART 1: Brand Basics (10 minutes)

### 1️⃣ Change Brand Name (2 min)
**File:** `cosmetics-landing.html`

Find and replace **3 instances:**
```html
OLD:  <h1>Lumineux</h1>
NEW:  <h1>Your Brand Name</h1>

OLD:  <span class="tagline">Beauty Essentials</span>
NEW:  <span class="tagline">Your Tagline Here</span>

OLD:  <title>Lumineux Beauty - Premium Cosmetics</title>
NEW:  <title>Your Brand - Your Description</title>
```

### 2️⃣ Change Brand Colors (3 min)
**File:** `styles.css` — Find `:root {` at the TOP

Replace these 4 hex codes with YOUR colors:
```css
OLD COLOR               NEW COLOR (Your Choice)
--primary: #d4a5a5;  → --primary: #YOUR_COLOR;
--primary-dark: #b8858a; → --primary-dark: #DARKER;
--secondary: #f5e6e0; → --secondary: #LIGHT_COLOR;
--accent: #8b6f47;   → --accent: #ACCENT_COLOR;
```

**🎨 Quick Color Picker:**
- Go to [coolors.co](https://coolors.co)
- Generate a palette
- Copy the hex codes
- Paste into `:root` section

### 3️⃣ Update Meta Tags (2 min)
**File:** `cosmetics-landing.html` — Find `<head>` section

```html
<meta name="description" content="CHANGE THIS - Your brand description (under 160 chars)">
<meta property="og:title" content="CHANGE THIS - Your Brand Name">
```

### 4️⃣ Update Footer (3 min)
**File:** `cosmetics-landing.html` — Find `<footer>` section

Replace with YOUR info:
```html
OLD: <p>&copy; 2026 Lumineux Beauty. All rights reserved.</p>
NEW: <p>&copy; 2026 Your Company Name. All rights reserved.</p>

<!-- Update social links -->
<a href="https://instagram.com/YOUR-HANDLE" aria-label="Instagram">📱</a>
<a href="https://facebook.com/YOUR-PAGE" aria-label="Facebook">👍</a>
<a href="https://tiktok.com/@YOUR-HANDLE" aria-label="TikTok">🎵</a>
```

---

## ⏱️ PART 2: Products & Content (12 minutes)

### 5️⃣ Update Hero Section (2 min)
**File:** `cosmetics-landing.html` — Find `<section class="hero">`

```html
OLD: <h2>Radiance Redefined</h2>
NEW: <h2>Your Main Headline</h2>

OLD: <p>Cruelty-free, vegan cosmetics...</p>
NEW: <p>Your value proposition</p>
```

### 6️⃣ Update First Product (3 min)
**File:** `cosmetics-landing.html` — Find first `<article class="product-card">`

```html
<img src="https://YOUR-IMAGE-URL" alt="Your Product">
<span class="badge">Your Tag</span>  <!-- e.g., "New", "Best Seller" -->

<h3>Your Product Name</h3>
<p class="category">Category</p>  <!-- e.g., "Lips", "Eyes", "Face" -->

<div class="rating">
    <span class="stars">★★★★★</span>
    <span class="review-count">(YOUR NUMBER reviews)</span>
</div>

<p class="price">$YOUR_PRICE</p>
<p class="description">Your product description</p>
```

**💡 Tip:** Once you update the FIRST product, copy that entire `<article>` block to replace the other 5 products quickly.

### 7️⃣ Update Trust Signals (2 min)
**File:** `cosmetics-landing.html` — Find `<section class="trust-signals">`

Change the 4 benefits to match YOUR brand:
```html
<!-- Example: If your brand focuses on sustainability -->
<div class="signal">
    <div class="signal-icon">♻️</div>
    <h3>100% Recyclable</h3>
    <p>Packaging made from recycled materials</p>
</div>
```

### 8️⃣ Update Testimonials (2 min)
**File:** `cosmetics-landing.html` — Find `<section class="testimonials">`

Replace 3 testimonials:
```html
OLD: <p class="quote">"The quality is incredible..."</p>
NEW: <p class="quote">"YOUR CUSTOMER'S ACTUAL QUOTE"</p>

<strong>Customer Name</strong>
<span>Verified Buyer</span>
```

### 9️⃣ Update About Section (3 min)
**File:** `cosmetics-landing.html` — Find `<section class="about">`

```html
<h2>Our Story</h2>
<p>YOUR BRAND ORIGIN STORY - 2-3 sentences</p>
<p>YOUR VALUES AND MISSION</p>
<p>YOUR CALL TO ACTION</p>
```

Replace the image URL too:
```html
<img src="https://YOUR-TEAM-OR-STUDIO-PHOTO" alt="Our team">
```

---

## ⏱️ PART 3: Optional Enhancements (5-8 minutes)

### 🔟 Setup Newsletter Email (3 min)
**File:** `cosmetics-landing.html` — Find `<form class="newsletter-form">`

If using **Mailchimp:**
```html
<form action="YOUR-MAILCHIMP-FORM-ACTION-URL" method="POST">
    <input type="email" name="EMAIL" placeholder="Enter your email" required>
    <input type="hidden" name="u" value="YOUR_U_VALUE">
    <input type="hidden" name="id" value="YOUR_LIST_ID">
    <button type="submit" class="cta-primary">Subscribe</button>
</form>
```

**Get URL from:** Mailchimp → Audience → Signup Forms → Hosted Forms

### 1️⃣1️⃣ Update Fonts (Optional, 2 min)
**File:** `styles.css`

Go to [fonts.google.com](https://fonts.google.com), select fonts, then:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap');

:root {
    --font-display: 'Your Font Name', serif;
    --font-body: 'Your Font Name', sans-serif;
}
```

### 1️⃣2️⃣ Add Google Analytics (Optional, 2 min)
**File:** `cosmetics-landing.html` — Add to `<head>`

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

Get your ID from [analytics.google.com](https://analytics.google.com)

---

## ✅ Quick Verification Checklist

After each section, check these:

```
PART 1 (Colors & Branding)
  [ ] Brand name changed everywhere
  [ ] Colors look good (not Lumineux's rose gold)
  [ ] Meta tags updated
  [ ] Footer has your info

PART 2 (Products & Content)
  [ ] Hero text is yours
  [ ] Products show your items (not sample products)
  [ ] Trust signals match your brand
  [ ] Testimonials are yours (or removed)
  [ ] About section tells YOUR story

OPTIONAL
  [ ] Newsletter connected (if you set it up)
  [ ] Analytics added (if you set it up)
  [ ] Fonts customized (if you changed them)
```

---

## 🎯 Before & After Example

### BEFORE (Default Lumineux):
```
🌐 Brand: Lumineux Beauty
🎨 Color: Rose gold (#d4a5a5)
💄 First Product: Velvet Matte Lipstick - $28
✨ Story: "Founded in 2020, Lumineux Beauty..."
```

### AFTER (Your Brand):
```
🌐 Brand: Your Beauty Brand Name
🎨 Color: Your chosen color palette
💄 First Product: Your actual product - $your price
✨ Story: "Your actual company origin story..."
```

---

## ⏱️ Time Breakdown

| Step | Time | Status |
|------|------|--------|
| Brand name & colors | 5 min | ✅ Critical |
| Hero & products | 8 min | ✅ Critical |
| About & testimonials | 4 min | ✅ Critical |
| Newsletter setup | 3 min | ⚠️ Optional |
| Analytics | 2 min | ⚠️ Optional |
| Fonts | 2 min | ⚠️ Optional |
| **TOTAL** | **30 min** | ✅ Done! |

---

## 🚀 Next Steps

### Once you finish customizing:

1. **Save all files** (Ctrl+S in your text editor)
2. **Verify it works:** Open `cosmetics-landing.html` in browser
3. **Run:** `bash deploy-netlify.sh` (or see DEPLOYMENT_GUIDE.md)
4. **Share:** Your site is live! 🎉

---

## 💡 Pro Tips

1. **Use Find & Replace** (Ctrl+H) to change multiple instances at once
2. **Copy/Paste Products** — Update first product, copy entire block 5 more times
3. **Placeholder Images** — Unsplash URLs work great until you upload your own
4. **Color Tools** — [Coolors.co](https://coolors.co) or [Adobe Color](https://color.adobe.com)
5. **Keep This Checklist** — Reference it when customizing

---

## ❌ Common Mistakes to Avoid

- ❌ Only changing brand name in one place (find all instances!)
- ❌ Using placeholder images in production (swap for your product photos)
- ❌ Forgetting to change colors in `:root` (one location = everywhere)
- ❌ Not testing on mobile (always check responsiveness)
- ❌ Leaving sample testimonials (update or remove them)

---

## ✨ You've Got This!

**30 minutes from now, you'll have a customized cosmetics landing page ready to deploy.**

**Current time check:**
- Started: Now
- Finish by: 30 minutes from now

**Go!** ⏰
