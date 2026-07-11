# Quick Start Guide - Lumineux Beauty

Get your cosmetics landing page up and running in minutes.

## 📦 What You Have

Your project includes:

```
cosmetics-landing/
├── cosmetics-landing.html          # Main page (open this in browser)
├── styles.css                      # Responsive styling
├── script.js                       # Cart, forms, analytics
├── advanced-features.js            # Optional: search, wishlist, etc.
├── README.md                       # Full documentation
├── CUSTOMIZATION_GUIDE.md          # How to customize
├── DEPLOYMENT_GUIDE.md             # How to deploy
└── QUICK_START.md                  # This file
```

## ⚡ 30-Second Setup

1. **Open in browser**
   ```bash
   # Windows: Double-click cosmetics-landing.html
   # Or drag the file into your browser
   ```

2. **Test everything works**
   - Click "Add to Cart" button
   - Click cart icon (should show count)
   - Click "Subscribe" in newsletter
   - Scroll and check responsive layout

3. **Customize**
   - Edit brand name in `cosmetics-landing.html`
   - Update colors in `styles.css` (`:root` section)
   - Replace product images with your own

4. **Deploy** (see DEPLOYMENT_GUIDE.md for full steps)
   - Upload files to Netlify, Vercel, or your hosting
   - Configure domain

## 🎨 Customization Checklist

### Essential (Do These First)
- [ ] Change brand name (`.logo h1`)
- [ ] Update brand colors (`:root` in `styles.css`)
- [ ] Replace product images
- [ ] Update product names/prices
- [ ] Change hero section text

### Important
- [ ] Update testimonials with real reviews
- [ ] Write your brand story (About section)
- [ ] Add your social media links (footer)
- [ ] Configure newsletter email service
- [ ] Update meta tags (for SEO)

### Nice-to-Have
- [ ] Set up payment gateway integration
- [ ] Add analytics tracking
- [ ] Implement live chat
- [ ] Add product filters/search
- [ ] Set up loyalty program

## 🔧 Common Edits

### Change Brand Color
In `styles.css`, find `:root` and update:
```css
--primary: #d4a5a5;        /* Change this hex code */
--accent: #8b6f47;         /* And this one */
```

### Add Your Product
1. Copy a product card in `cosmetics-landing.html`
2. Update the image URL
3. Change product name, price, description
4. Done! JavaScript handles it automatically

### Update Hero Section
In `cosmetics-landing.html`, find:
```html
<h2>Radiance Redefined</h2>
<p>Your tagline here</p>
```

### Connect Newsletter
Find this in `cosmetics-landing.html`:
```html
<form class="newsletter-form" onsubmit="handleNewsletterSubmit(event)">
```

Replace the form with your email provider's code:
- **Mailchimp**: Get embed code from list settings
- **ConvertKit**: Add script tag with your ID
- **Custom**: Update `handleNewsletterSubmit()` in `script.js`

## 🛒 Shopping Cart

**Features included:**
- Add/remove products
- Adjust quantities
- Persistent storage (survives page refresh)
- Cart total calculation
- Modal view

**To integrate with payment:**
Replace checkout button handler in `script.js`:
```javascript
// Find this line around line 140
<button class="cta-primary" style="width: 100%; margin-top: 1.5rem;">Proceed to Checkout</button>

// Add onclick handler:
onclick="window.location.href='https://your-payment-provider.com/checkout'"
```

## 📱 Test Responsive Design

Open in browser and:
1. Press F12 (DevTools)
2. Click device icon (toggle device toolbar)
3. Test at different screen sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1024px)

## ♿ Accessibility Check

Quick accessibility audit:
1. **Keyboard navigation** — Tab through entire page
2. **Color contrast** — Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
3. **Screen reader** — Test with NVDA (Windows) or VoiceOver (Mac)
4. **Images** — All have alt text ✓

## 🔍 SEO Setup

Your page already has:
- Semantic HTML structure ✓
- Mobile meta viewport ✓
- Image alt text ✓
- Proper heading hierarchy ✓

**Still need to do:**
1. Update meta description in `<head>`
2. Add your domain to Google Search Console
3. Set up Google Analytics
4. Submit XML sitemap

## 🚀 Deploy in 5 Minutes

### Option 1: Netlify (Recommended)
```bash
# 1. Create GitHub repo and push files
# 2. Go to netlify.com
# 3. Click "New site from Git"
# 4. Select your repo
# 5. Done! Auto-deploys on push
```

### Option 2: Simple File Upload
```bash
# FTP to your hosting and upload:
# - cosmetics-landing.html → index.html
# - styles.css
# - script.js
# Done!
```

## 🐛 Troubleshooting

### Cart doesn't work
- Check browser console (F12)
- Verify localStorage is enabled
- Make sure `script.js` is loaded

### Images don't show
- Check image URLs are correct
- Use absolute URLs (http://...) not relative
- Open image URL in new tab to verify

### Styling looks wrong
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is linked properly
- Verify `:root` variables in `styles.css`

### Forms don't submit
- Check email service is connected
- Verify API endpoint in `script.js`
- Check browser console for JavaScript errors

## 📊 Analytics

**Set up Google Analytics:**
1. Create account at analytics.google.com
2. Get Measurement ID
3. Add to `<head>` in HTML (see CUSTOMIZATION_GUIDE.md)
4. Wait 24 hours for data

**Track key metrics:**
- Unique visitors
- Newsletter signups
- Product views
- Cart additions
- Conversion rate

## 💡 Pro Tips

1. **Use high-quality images** — 400x400px minimum, optimized under 200KB
2. **Keep text short** — Use bullet points and short paragraphs
3. **Use white space** — Don't cram too much on page
4. **Test on real devices** — Mobile testing is crucial
5. **Update frequently** — Add new products, testimonials, blog posts
6. **Monitor analytics** — See what users like, remove what they don't

## 🔒 Security Reminders

- [ ] Enable HTTPS (all hosts provide this)
- [ ] Set strong passwords for hosting account
- [ ] Don't expose API keys in JavaScript (use backend)
- [ ] Validate form inputs
- [ ] Keep dependencies updated

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/) — Web standards
- [CSS Tricks](https://css-tricks.com/) — CSS tutorials
- [Web.dev](https://web.dev/) — Performance & best practices
- [Google Analytics Help](https://support.google.com/analytics/)
- [Netlify Docs](https://docs.netlify.com/)

## 🎯 Next Steps

1. ✅ Open `cosmetics-landing.html` in browser
2. ✅ Customize brand colors and text
3. ✅ Replace product images
4. ✅ Test cart and forms
5. ✅ Deploy to web hosting
6. ✅ Set up analytics
7. ✅ Launch and promote!

## 📞 Need Help?

1. **Check the documentation**
   - README.md — Full feature list
   - CUSTOMIZATION_GUIDE.md — Detailed customization
   - DEPLOYMENT_GUIDE.md — Hosting options

2. **Debug in browser**
   - F12 → Console for errors
   - F12 → Network for failed requests
   - F12 → Sources to check loaded files

3. **Validate code**
   - HTML: validator.w3.org
   - CSS: jigsaw.w3.org/css-validator
   - Performance: lighthouse (in DevTools)

---

## Project Structure Summary

| File | Purpose | Edit? |
|------|---------|-------|
| `cosmetics-landing.html` | Main page, structure | Yes - add content |
| `styles.css` | All styling | Yes - customize colors |
| `script.js` | Cart, forms, interactions | Usually not needed |
| `advanced-features.js` | Optional extras | Use as needed |
| `README.md` | Full documentation | Reference only |
| `CUSTOMIZATION_GUIDE.md` | How to customize | Reference only |
| `DEPLOYMENT_GUIDE.md` | How to deploy | Reference only |

---

**You're all set!** Your cosmetics landing page is ready to customize and deploy. Start by opening `cosmetics-landing.html` in your browser. 🎉

Last Updated: July 2026
