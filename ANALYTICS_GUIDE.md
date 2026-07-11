# Analytics & Conversion Tracking Guide

Complete setup guide for tracking visitors, conversions, and customer behavior.

## 🎯 Google Analytics 4 (GA4) Setup

### Step 1: Create GA4 Account
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Start measuring"
3. Enter property name (e.g., "Lumineux Beauty")
4. Set timezone and currency to your location
5. Create property

### Step 2: Get Measurement ID
1. In left menu: Admin → Property → Data Streams
2. Click your website data stream
3. Copy Measurement ID (format: G-XXXXXXXX)

### Step 3: Add GA4 to Your Site
Add this to the `<head>` of `cosmetics-landing.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

Replace `G-YOUR_ID` with your actual Measurement ID.

### Step 4: Verify Setup
1. Open your site in browser
2. Open DevTools (F12)
3. Go to Network tab
4. Search for "collect"
5. You should see successful requests
6. Wait 24 hours for data in GA dashboard

---

## 📊 Key Metrics to Track

### Acquisition
- **New Users**: First-time visitors
- **Sessions**: Visits to your site
- **Bounce Rate**: Percentage who leave immediately
- **Traffic Source**: Where visitors come from (organic, direct, referral, etc.)

### Engagement
- **Pages/Session**: Average pages viewed per visit
- **Avg. Session Duration**: How long users stay
- **Scroll Depth**: How far down the page users scroll
- **Click-Through Rate**: Percentage who click buttons

### Conversion
- **Newsletter Signups**: Email subscriptions
- **Add to Cart**: Products added to cart
- **Cart Value**: Total value of items in cart
- **Checkout Initiation**: Users who start checkout
- **Product Views**: Individual product page visits

### Technical
- **Page Load Time**: How fast pages load
- **Mobile vs Desktop**: Device breakdown
- **Browser**: Which browsers users use
- **Top Exit Pages**: Where users leave

---

## 🎬 Custom Events in GA4

### Track Button Clicks
Add to your buttons:

```html
<button onclick="gtag('event', 'button_click', {button_name: 'Add to Cart'})">
  Add to Cart
</button>
```

### Track Form Submissions
```javascript
document.querySelector('form').addEventListener('submit', function() {
  gtag('event', 'form_submit', {
    form_name: 'newsletter'
  });
});
```

### Track Video Plays (if applicable)
```javascript
gtag('event', 'video_start', {
  video_title: 'Product Tutorial'
});
```

### Track Scroll Depth
```javascript
window.addEventListener('scroll', function() {
  const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  
  if (scrollPercentage > 25 && !scrollTracked25) {
    gtag('event', 'scroll_depth', {depth_percentage: 25});
    scrollTracked25 = true;
  }
  if (scrollPercentage > 50 && !scrollTracked50) {
    gtag('event', 'scroll_depth', {depth_percentage: 50});
    scrollTracked50 = true;
  }
});
```

---

## 🛒 E-commerce Tracking

### Track Product Views
```javascript
gtag('event', 'view_item', {
  items: [{
    item_id: 'product-1',
    item_name: 'Velvet Matte Lipstick',
    price: 28,
    item_category: 'Lips'
  }]
});
```

### Track Add to Cart
```javascript
gtag('event', 'add_to_cart', {
  items: [{
    item_id: 'product-1',
    item_name: 'Velvet Matte Lipstick',
    price: 28,
    quantity: 1
  }]
});
```

### Track Purchase
```javascript
gtag('event', 'purchase', {
  transaction_id: 'TX123456',
  value: 89.99,
  currency: 'USD',
  items: [{
    item_id: 'product-1',
    item_name: 'Velvet Matte Lipstick',
    price: 28,
    quantity: 1
  }]
});
```

---

## 📧 Email Tracking

### Mailchimp
1. Sign up at [mailchimp.com](https://mailchimp.com)
2. Create audience
3. Add subscription form to HTML
4. Monitor stats in Mailchimp dashboard

**Metrics to track:**
- Signup rate (% of visitors who subscribe)
- Email open rate
- Click rate
- Unsubscribe rate

### ConvertKit (for creators)
1. Sign up at [convertkit.com](https://convertkit.com)
2. Create form
3. Add to landing page
4. Track subscriber growth

---

## 🔗 UTM Parameters for Campaign Tracking

Add parameters to links to track campaign performance:

```
Format: ?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN

Examples:
https://your-domain.com?utm_source=instagram&utm_medium=social&utm_campaign=launch
https://your-domain.com?utm_source=google&utm_medium=cpc&utm_campaign=summer-sale
https://your-domain.com?utm_source=newsletter&utm_medium=email&utm_campaign=promo
```

**Components:**
- `utm_source`: Where traffic comes from (instagram, google, newsletter, etc.)
- `utm_medium`: Type of traffic (social, cpc, email, referral, etc.)
- `utm_campaign`: Campaign name (launch, sale, promo, etc.)
- `utm_content`: (Optional) A/B testing variant
- `utm_term`: (Optional) Keyword for paid search

---

## 📱 Mobile App Analytics (Optional)

For app promotion tracking:

```javascript
gtag('event', 'app_download', {
  app_name: 'Lumineux Beauty App',
  app_store: 'iOS'
});
```

---

## 💡 Conversion Funnels to Track

### Newsletter Signup Funnel
1. Landing page view
2. Scroll to newsletter
3. Click newsletter input
4. Enter email
5. Click subscribe
6. Confirmation page

### Shopping Funnel
1. Product page view
2. Add to cart
3. View cart
4. Proceed to checkout
5. Enter payment info
6. Order confirmation

### Browse Funnel
1. Landing page
2. Scroll products
3. Click product
4. View details
5. Add to cart (or leave)

---

## 📊 Reports to Create

### Daily Dashboard
- New users
- Sessions
- Bounce rate
- Top pages
- Conversion rate

### Weekly Report
- Traffic trends
- Device breakdown
- Traffic sources
- Top products
- Newsletter signups

### Monthly Report
- Month-over-month growth
- User cohort analysis
- Lifetime value (LTV)
- Customer acquisition cost (CAC)
- Return on ad spend (ROAS)

---

## 🎯 Goals & Conversions

### Set Up Conversion Goals
1. In GA4, go to Admin → Conversions
2. Create new conversion event
3. Name it (e.g., "newsletter_signup")
4. Choose what triggers it

**Common goals:**
- Newsletter signup → Conversion event
- Add to cart → Conversion event
- Reach checkout → Conversion event
- Product purchase → Conversion event

### Calculate Key Metrics
```
Conversion Rate = (Conversions / Users) × 100
Email Signup Rate = (Signups / Visitors) × 100
Cart Abandonment = ((Add to Cart - Purchases) / Add to Cart) × 100
Customer Lifetime Value = (Customer Value × Customer Lifespan)
```

---

## 🔄 Attribution Models

GA4 automatically tracks multiple attribution models:

- **Last Click**: Credit goes to last touchpoint
- **First Click**: Credit to first touchpoint
- **Linear**: Credit distributed equally
- **Time Decay**: Credit weighted toward most recent touchpoints
- **Position-Based**: 40% first, 40% last, 20% middle

Choose based on your marketing strategy.

---

## 🚨 Alerts & Notifications

### Set Up GA4 Alerts
1. Go to Admin → Alerts
2. Create new alert
3. Select condition (e.g., "Traffic drops 50%")
4. Set frequency (immediate or daily)
5. Get email notifications

**Useful alerts:**
- Bounce rate increases 20%
- Session duration drops 30%
- Conversions drop 50%
- Traffic drops during business hours

---

## 🔐 Privacy & Compliance

### GDPR Compliance
```javascript
// Add consent mode
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied'
});

// After user consents
gtag('consent', 'update', {
  'analytics_storage': 'granted',
  'ad_storage': 'granted'
});
```

### Add Privacy Policy
1. Include link in footer
2. Explain what data you collect
3. Explain why you collect it
4. Explain how users can opt-out
5. Keep updated

### Implement Cookie Consent
```html
<div id="cookie-consent" style="position: fixed; bottom: 0; width: 100%; background: #333; color: white; padding: 20px; text-align: center;">
  <p>We use cookies to improve your experience. By continuing, you accept our use of cookies.</p>
  <button onclick="acceptCookies()">Accept</button>
  <a href="/privacy">Learn more</a>
</div>

<script>
function acceptCookies() {
  localStorage.setItem('cookies-accepted', 'true');
  document.getElementById('cookie-consent').style.display = 'none';
}
</script>
```

---

## 📈 Advanced Analytics

### Cohort Analysis
Track how groups of users behave over time:
- Users from Month 1 vs Month 2
- Mobile vs Desktop users
- Newsletter subscribers vs non-subscribers

### Retention Analysis
What percentage of users return?
- Day 1 retention
- Week 1 retention
- Month 1 retention

### Revenue Analytics
- Revenue per user
- Revenue per session
- Average order value
- Revenue by product

---

## 🔄 Integration with Other Tools

### Integrate with CRM
Send GA data to Mailchimp, HubSpot, or other CRM:
1. Set up webhook
2. Map GA events to CRM events
3. Create automated workflows

### Integrate with Email Marketing
Track email opens and clicks:
1. Add tracking pixels to emails
2. Correlation analysis with GA
3. Measure email ROI

### Integrate with Ads
Track if ads drive conversions:
1. Connect Google Ads account
2. Enable conversion tracking
3. Set up conversion goals
4. Monitor ROAS

---

## 📱 Mobile-Specific Tracking

```javascript
// Track screen resolution
gtag('event', 'screen_resolution', {
  screen_width: window.screen.width,
  screen_height: window.screen.height
});

// Track device type
gtag('event', 'device_type', {
  device_type: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
});

// Track connection speed
if (navigator.connection) {
  gtag('event', 'connection_speed', {
    connection_type: navigator.connection.effectiveType
  });
}
```

---

## 🎓 Resources

- [Google Analytics Academy](https://skillshop.withgoogle.com/courses/google-analytics-for-beginners)
- [GA4 Documentation](https://support.google.com/analytics/topic/2919631)
- [UTM Parameter Guide](https://support.google.com/analytics/answer/1033173)
- [Conversion Tracking Guide](https://support.google.com/analytics/answer/1008015)

---

Last Updated: July 2026
