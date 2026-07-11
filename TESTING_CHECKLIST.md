# Pre-Launch Testing Checklist

Use this comprehensive checklist before launching your cosmetics landing page to production.

## 🎨 Design & Branding

- [ ] Brand colors applied correctly (check `:root` in CSS)
- [ ] Logo/brand name displays properly
- [ ] Fonts render correctly across devices
- [ ] No placeholder text remaining
- [ ] Images are high quality and properly optimized
- [ ] Layout is visually balanced (no overflow, proper spacing)
- [ ] Color contrast meets accessibility standards (WCAG AA: 4.5:1)
- [ ] Consistent spacing and alignment throughout

## 📱 Responsive Design

### Mobile (375px - iPhone SE)
- [ ] Text is readable without zooming
- [ ] Buttons are easily clickable (44px minimum)
- [ ] Images scale appropriately
- [ ] Navigation is accessible
- [ ] Cart icon visible and functional
- [ ] Forms are full width and easy to use
- [ ] No horizontal scrolling

### Tablet (768px - iPad)
- [ ] Two-column product grid shows correctly
- [ ] Spacing is appropriate for screen size
- [ ] Touch targets are adequate (44px minimum)
- [ ] Images display at good quality

### Desktop (1024px+)
- [ ] Three-column product grid displays
- [ ] Navigation bar shows all links
- [ ] Maximum content width enforced
- [ ] Hover effects work smoothly

## 🛒 Shopping Cart

- [ ] "Add to Cart" button works
- [ ] Cart count updates in header
- [ ] Cart persists after page refresh
- [ ] Cart modal opens/closes properly
- [ ] Can adjust quantities with +/− buttons
- [ ] Can remove items from cart
- [ ] Cart total calculates correctly
- [ ] Cart works on mobile devices
- [ ] Empty cart shows proper message

## 📝 Forms & Input

### Newsletter Form
- [ ] Email input accepts valid emails
- [ ] Submit button works
- [ ] Success message displays
- [ ] Error handling for invalid email
- [ ] Form clears after submission
- [ ] Works on all browsers

### Product Filters (if added)
- [ ] Search by product name works
- [ ] Category filters work
- [ ] Price filters work (if added)
- [ ] Results update in real-time

## ♿ Accessibility

### Keyboard Navigation
- [ ] Tab key navigates all interactive elements
- [ ] Shift+Tab goes backwards
- [ ] Enter activates buttons
- [ ] Links are keyboard accessible
- [ ] Focus indicators visible
- [ ] Modal can be closed with Escape key (if applicable)

### Screen Reader
- [ ] All images have descriptive alt text
- [ ] Headings use proper hierarchy (h1 → h2 → h3)
- [ ] Form labels are associated with inputs
- [ ] Button purposes are clear
- [ ] Links describe their destination
- [ ] No content hidden from screen readers

### Visual
- [ ] Color contrast: Text vs background (4.5:1 minimum)
- [ ] Text size is readable (16px minimum body text)
- [ ] No information conveyed by color alone
- [ ] Links are underlined or visually distinct
- [ ] Dark mode support works

### Motion
- [ ] Animations respect `prefers-reduced-motion`
- [ ] No auto-playing videos
- [ ] No flashing content (> 3 flashes/second)

## 🔍 SEO

- [ ] Meta title is descriptive and under 60 characters
- [ ] Meta description under 160 characters
- [ ] H1 tag present and unique
- [ ] Heading hierarchy is proper (no skipped levels)
- [ ] All images have alt text
- [ ] Internal links have descriptive anchor text
- [ ] Mobile viewport meta tag present
- [ ] Open Graph tags configured
- [ ] Schema.org markup for Product (if using)
- [ ] No duplicate content
- [ ] URLs are clean and descriptive

## 🔐 Security

- [ ] HTTPS enabled (green lock icon)
- [ ] No sensitive data in localStorage
- [ ] Form validation works on client-side
- [ ] No hardcoded API keys or passwords
- [ ] CORS headers configured properly
- [ ] Content Security Policy headers set
- [ ] X-Frame-Options header set to SAMEORIGIN
- [ ] No console errors or warnings
- [ ] No JavaScript vulnerabilities

## ⚡ Performance

### Lighthouse Audit
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

### Load Time
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.8s

### Images
- [ ] All images optimized (< 200KB each)
- [ ] WebP format used where possible
- [ ] Responsive images with srcset
- [ ] Lazy loading enabled
- [ ] No oversized images

### Code
- [ ] CSS is minified (production)
- [ ] JavaScript is minified (production)
- [ ] Unused CSS removed
- [ ] No render-blocking resources
- [ ] Fonts are optimized
- [ ] No console errors

## 🔗 Links & Navigation

- [ ] All internal links work (no 404s)
- [ ] External links open in new tab (if applicable)
- [ ] Navigation links go to correct sections
- [ ] Header logo links to home
- [ ] Footer links all functional
- [ ] Contact information is correct
- [ ] Social media links are correct

## 📧 Email & Forms

### Newsletter
- [ ] Email provider connected (Mailchimp, ConvertKit, etc.)
- [ ] Signup emails received
- [ ] Confirmation email sent to subscriber
- [ ] No errors in email service

### Contact/Support (if applicable)
- [ ] Contact form submits successfully
- [ ] Confirmation email sent to user
- [ ] Admin receives notification
- [ ] Validation messages display properly

## 🌐 Cross-Browser Testing

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, if Mac available)
- [ ] Mobile Chrome
- [ ] Mobile Safari
- [ ] No browser-specific errors

## 📊 Analytics

- [ ] Google Analytics tracking code added
- [ ] Tracking shows page views in GA dashboard
- [ ] Conversion events fire correctly
- [ ] Goal tracking works
- [ ] UTM parameters work (if using)

## 🎬 User Experience

- [ ] Page scrolls smoothly
- [ ] Animations don't feel janky
- [ ] Click feedback is immediate
- [ ] Loading states are visible
- [ ] Error messages are helpful
- [ ] Success messages are clear
- [ ] No infinite loops or hangs
- [ ] Mobile hamburger menu works (if applicable)

## 📱 Device Testing

### iOS
- [ ] iPhone 12 mini (375px)
- [ ] iPhone 12 (390px)
- [ ] iPhone 12 Pro Max (428px)
- [ ] iPad (768px)
- [ ] Landscape orientation

### Android
- [ ] Pixel 5 (393px)
- [ ] Galaxy S21 (360px)
- [ ] Large phone (480px+)
- [ ] Landscape orientation
- [ ] High DPI screen

## 🎯 Content Quality

- [ ] No typos or grammar errors
- [ ] Product descriptions accurate
- [ ] Pricing is correct
- [ ] Images represent products accurately
- [ ] Testimonials are genuine/credible
- [ ] Brand story is compelling
- [ ] Calls-to-action are clear
- [ ] No outdated information

## 🔄 Functionality

- [ ] Shopping cart completes workflow
- [ ] Newsletter signup completes
- [ ] Product details display correctly
- [ ] Filters/search work (if implemented)
- [ ] Wishlist works (if implemented)
- [ ] Reviews display (if implemented)
- [ ] Product comparisons work (if implemented)

## 📋 Documentation

- [ ] README.md is complete and accurate
- [ ] CUSTOMIZATION_GUIDE.md is helpful
- [ ] DEPLOYMENT_GUIDE.md has correct instructions
- [ ] QUICK_START.md is clear
- [ ] Code comments are present where needed
- [ ] Contact/support information is clear

## 🚀 Pre-Deployment

- [ ] All files committed to git
- [ ] Environment variables configured
- [ ] Database backups created (if applicable)
- [ ] SSL certificate ready
- [ ] Domain DNS configured
- [ ] Hosting account tested
- [ ] Email service configured
- [ ] Payment processor tested (if applicable)
- [ ] Analytics account created
- [ ] Google Search Console set up
- [ ] Sitemap created and submitted (if applicable)

## 🎉 Launch Day

- [ ] Final visual inspection
- [ ] Final functionality test
- [ ] Page loads without errors
- [ ] Monitor analytics for first hour
- [ ] Check for errors in browser console
- [ ] Verify emails are being sent
- [ ] Test payment processing (if applicable)
- [ ] Have support contact info visible

## 📈 Post-Launch Monitoring (First Week)

- [ ] Check analytics daily
- [ ] Monitor for errors (console, hosting)
- [ ] Verify email deliverability
- [ ] Check social media mentions
- [ ] Respond to customer inquiries quickly
- [ ] Monitor site performance
- [ ] Check for broken links
- [ ] Review user feedback

---

## Testing Tools

| Tool | Purpose | Link |
|------|---------|------|
| Lighthouse | Performance & accessibility audit | Built into Chrome DevTools (F12) |
| WebAIM Contrast Checker | Color contrast testing | https://webaim.org/resources/contrastchecker/ |
| WAVE | Accessibility checker | https://wave.webaim.org/ |
| Google Mobile-Friendly Test | Mobile responsiveness | https://search.google.com/test/mobile-friendly |
| GTmetrix | Performance analysis | https://gtmetrix.com/ |
| NVDA | Screen reader (Windows) | https://www.nvaccess.org/ |
| CSS Validator | CSS validation | https://jigsaw.w3.org/css-validator/ |
| HTML Validator | HTML validation | https://validator.w3.org/ |
| Responsively App | Device simulator | https://responsively.app/ |
| Canva Color Contrast | Contrast checker | https://www.canva.com/colors/color-wheel/ |

## Quick Checklist Command

Print this and check off as you go:

```
DESIGN:     [ ] Colors  [ ] Fonts  [ ] Images  [ ] Spacing
RESPONSIVE: [ ] Mobile  [ ] Tablet [ ] Desktop
CART:       [ ] Add     [ ] View   [ ] Persist [ ] Calculate
FORMS:      [ ] Valid   [ ] Submit [ ] Confirm
ACCESSIBILITY: [ ] Keyboard [ ] Screen Reader [ ] Contrast
SEO:        [ ] Title   [ ] Meta   [ ] H1      [ ] Alt Text
SECURITY:   [ ] HTTPS   [ ] No Keys [ ] Forms
PERFORMANCE: [ ] Lighthouse > 90  [ ] LCP < 2.5s
LINKS:      [ ] Internal [ ] External [ ] Navigation
EMAILS:     [ ] Newsletter [ ] Confirmations
BROWSERS:   [ ] Chrome  [ ] Firefox [ ] Safari [ ] Mobile
CONTENT:    [ ] No Typos [ ] Accurate [ ] Clear CTAs
DEVICES:    [ ] iPhone  [ ] Android [ ] Tablet
MONITORING: [ ] Analytics [ ] Errors [ ] Performance
```

---

**Pro Tip:** Run through this checklist a few days before launch, and again the day of. Don't rush — a polished launch beats a fast one!

Last Updated: July 2026
