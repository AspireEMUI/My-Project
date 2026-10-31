# Deployment Guide: Lush Shine to Netlify
## Step-by-Step Instructions for Going Live

**Version:** 1.0  
**Date:** 2026-09-29  
**Status:** Production Ready

---

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Netlify Account Setup](#netlify-account-setup)
3. [Deployment Methods](#deployment-methods)
4. [Verification Steps](#verification-steps)
5. [Post-Deployment](#post-deployment)
6. [Troubleshooting](#troubleshooting)
7. [Custom Domain Setup](#custom-domain-setup)
8. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Pre-Deployment Checklist

**Before deploying, verify:**

```
☑ All HTML is valid
☑ All CSS is valid
☑ All JavaScript is valid
☑ All images load correctly
☑ No broken links
☑ Responsive design works (mobile/tablet/desktop)
☑ Cart functionality works
☑ Modal opens and closes properly
☑ Forms work (newsletter signup)
☑ No console errors
☑ Dark mode works
☑ All products display correctly
☑ Images are optimized
☑ File structure is correct
☑ .gitignore configured (if using Git)
```

### Pre-Deployment Test Checklist

```
Manual Testing:
☑ Click products - modal opens
☑ Browse image gallery - all images load
☑ Add to cart - item added
☑ View cart - item shows with quantity
☑ Newsletter - form submits
☑ Smooth scroll - navigation works
☑ Responsive - test on mobile view
☑ Dark mode - toggle and verify
☑ All buttons - click and verify action
☑ All links - click and verify navigation

Browser Testing:
☑ Chrome/Chromium
☑ Firefox
☑ Safari
☑ Edge
☑ Mobile Safari (iOS)
☑ Chrome Mobile (Android)
```

---

## Netlify Account Setup

### Step 1: Create Netlify Account

1. Go to **https://www.netlify.com**
2. Click **"Sign Up"** button
3. Choose sign-up method:
   - GitHub
   - GitLab
   - Email
4. Complete verification
5. Confirm email address

### Step 2: Authorize Git (if using)

If signing up with GitHub/GitLab:
- ✅ Authorize Netlify to access your repositories
- ✅ Select repositories to connect
- ✅ Grant necessary permissions

---

## Deployment Methods

### Method 1: Drag & Drop (Easiest - No Git Required)

**Best for:** Quick testing, simple projects

#### Steps:

1. **Create deployment folder:**
   ```
   Create folder: lush-shine-deploy
   Copy these files into it:
   - cosmetics-landing.html
   - script.js
   - styles.css
   - /images/ folder (all images)
   ```

2. **Zip the folder:**
   - Right-click → Compress/Zip
   - Creates: `lush-shine-deploy.zip`

3. **Upload to Netlify:**
   - Go to https://app.netlify.com
   - Drag and drop ZIP file onto the page
   - Netlify automatically deploys!

4. **Get your URL:**
   - Netlify generates: `https://random-name.netlify.app`
   - Your site is LIVE! 🎉

**Pros:**
- No Git knowledge needed
- Super fast
- Great for testing

**Cons:**
- No version control
- Hard to update
- New deployment each time

---

### Method 2: GitHub + Netlify (Recommended)

**Best for:** Professional projects, team collaboration

#### Step 1: Push to GitHub

```bash
# In your project folder:

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial Lush Shine deployment"

# Create repository on GitHub
# Then push:
git remote add origin https://github.com/YOUR-USERNAME/lush-shine.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect GitHub to Netlify

1. Go to **https://app.netlify.com**
2. Click **"New site from Git"**
3. Choose **GitHub**
4. Authorize Netlify to access GitHub
5. Select your **lush-shine** repository
6. Click **"Deploy site"**

#### Step 3: Netlify Deploys Automatically

- Netlify detects your files
- Creates deployment: `https://random-name.netlify.app`
- Site goes LIVE! 🎉

**Pros:**
- Automatic updates when you push to GitHub
- Full version control
- Team collaboration
- Easy rollbacks

**Cons:**
- Requires Git knowledge
- Slightly more setup

---

### Method 3: Netlify CLI (Advanced)

**Best for:** Power users, CI/CD pipelines

#### Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Deploy with CLI

```bash
# Navigate to your project
cd /path/to/lush-shine

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

---

## Verification Steps

### After Deployment, Verify:

1. **Page Loads**
   ```
   ✓ Can you access the URL?
   ✓ Does it load quickly?
   ✓ No 404 errors?
   ```

2. **Images Load**
   ```
   ✓ Product images appear?
   ✓ No broken image icons?
   ✓ Gallery images load?
   ```

3. **Functionality**
   ```
   ✓ Can you click products?
   ✓ Modal opens and closes?
   ✓ Add to cart works?
   ✓ Forms submit?
   ```

4. **Responsive Design**
   ```
   ✓ Mobile view works?
   ✓ Tablet view works?
   ✓ Desktop view works?
   ```

5. **Browser Compatibility**
   ```
   ✓ Works in Chrome?
   ✓ Works in Firefox?
   ✓ Works in Safari?
   ✓ Works in Edge?
   ```

6. **Performance**
   ```
   ✓ Page loads quickly?
   ✓ No console errors?
   ✓ Images optimized?
   ```

### Test on Mobile

- Use DevTools device emulation (F12)
- Or test on actual phone via Netlify URL
- Test touch interactions (adding to cart, etc.)

---

## Post-Deployment

### Step 1: Test Everything Live

```
Testing Checklist:
☑ Open site on desktop
☑ Open site on mobile
☑ Click all products
☑ Test add to cart
☑ Test newsletter signup
☑ Test smooth scroll
☑ Test dark mode
☑ Test all buttons
☑ Check console (F12)
```

### Step 2: Share Your Site

Your live URL: **`https://random-name.netlify.app`**

Share with:
- Team members
- Friends
- Family
- Social media
- Customers

### Step 3: Get Custom Domain (Optional)

See [Custom Domain Setup](#custom-domain-setup) below

### Step 4: Set Up Analytics (Optional)

Add Google Analytics:

1. Go to **Google Analytics**
2. Create property for your domain
3. Get tracking ID
4. Add to your HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Troubleshooting

### Site Shows "Page Not Found" (404)

**Check:**
1. Did files upload correctly?
2. Is `cosmetics-landing.html` the main file?
3. Are image paths correct?

**Fix:**
1. Re-upload via drag-and-drop
2. Or redeploy from GitHub

### Images Not Loading

**Check:**
1. Image filenames in `/images/` folder
2. Paths in `script.js` match exactly
3. Image extensions (.jpeg, .png)

**Fix:**
1. Verify filenames match (case-sensitive)
2. Re-upload images
3. Hard refresh page (Ctrl+F5)

### Forms Not Working

**Check:**
1. Newsletter form still uses localhost endpoint?
2. Enquire button uses mailto correctly?

**Fix:**
1. Update API endpoints if needed
2. Test mailto links work

### Slow Performance

**Check:**
1. Image file sizes (should be <500KB each)
2. CSS/JS files minified?
3. Too many products?

**Fix:**
1. Compress images
2. Enable Netlify compression
3. Optimize JavaScript

### Site Crashes After Changes

**If you pushed broken code:**

1. Go to **Netlify Dashboard**
2. Click **Deploys**
3. Select previous working deployment
4. Click **Publish Deploy**
5. Site reverts to last working version

---

## Custom Domain Setup

### Step 1: Buy Domain (Optional)

- **Recommended:** Namecheap, GoDaddy, Google Domains
- Cost: ~$10-15/year
- Example: `lushshine.com`

### Step 2: Connect to Netlify

1. In Netlify, go to **Domain Settings**
2. Click **Add custom domain**
3. Enter your domain: `lushshine.com`
4. Follow DNS setup instructions
5. Update nameservers at domain registrar
6. Wait 24-48 hours for propagation

### Step 3: SSL Certificate

- Netlify provides **free SSL certificate** automatically
- Your domain will have HTTPS
- Green lock icon appears in browser

---

## Monitoring & Maintenance

### Weekly

```
☑ Check site still loads
☑ Test products display
☑ Verify no errors in console
☑ Check image loading
```

### Monthly

```
☑ Review analytics (if enabled)
☑ Check for broken links
☑ Test mobile responsiveness
☑ Update product information
☑ Check for security updates
```

### When Making Changes

```
☑ Test locally first (if possible)
☑ Verify changes work
☑ Commit to Git (if using)
☑ Push to GitHub
☑ Netlify auto-deploys
☑ Verify live site updated
```

### Emergency: Rollback to Previous Version

If something breaks:

1. Go to **Netlify Dashboard**
2. Click **Deploys** tab
3. Find previous working deploy
4. Click **Publish deploy**
5. Site reverts immediately ✓

---

## Quick Reference: Deployment Commands

### Using Git + GitHub

```bash
# First time setup
git init
git add .
git commit -m "Initial deployment"
git remote add origin https://github.com/YOU/lush-shine.git
git push -u origin main

# For updates
git add .
git commit -m "Update products"
git push origin main
# Netlify auto-deploys!
```

### Using Netlify CLI

```bash
# Deploy to staging
netlify deploy

# Deploy to production (live)
netlify deploy --prod
```

### Using Drag & Drop

1. Zip your project folder
2. Drag onto https://app.netlify.app
3. Done! (Gets new URL each time)

---

## Deployment Checklist (Complete)

### Before Deploying
```
☑ All files present (HTML, CSS, JS, /images/)
☑ No console errors
☑ Images load correctly locally
☑ All functionality works
☑ Responsive design tested
☑ Product data correct
☑ Prices accurate
```

### During Deployment
```
☑ Choose deployment method
☑ Upload/push files
☑ Wait for build to complete
☑ Get deployment URL
```

### After Deployment
```
☑ Open live URL
☑ Verify page loads
☑ Test functionality
☑ Check mobile view
☑ Test all products
☑ Verify images
☑ Share with team
```

### Long-term
```
☑ Monitor performance
☑ Update products
☑ Fix any issues
☑ Keep backups
☑ Track analytics
```

---

## Support & Help

### Netlify Support
- **Documentation:** https://docs.netlify.com
- **Community:** https://community.netlify.com
- **Status Page:** https://www.netlifystatus.com

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Page not found | Re-upload files, verify file names |
| Images missing | Check paths in script.js, verify filenames |
| Slow site | Compress images, enable caching |
| Forms broken | Check endpoints, update if needed |
| CSS not loading | Clear browser cache, hard refresh |
| JavaScript errors | Check console (F12), verify script.js |
| Mobile looks wrong | Test in DevTools, check responsive CSS |

---

## Deployment Summary

### Fastest Way to Deploy (5 minutes):

1. **Download files**
   - HTML, CSS, JS, /images/

2. **Zip folder**
   - Create: lush-shine.zip

3. **Go to Netlify**
   - Visit: https://app.netlify.com

4. **Drag & drop**
   - Upload ZIP file

5. **Get URL**
   - Netlify provides live link

6. **Share**
   - Your site is live! 🎉

---

**Your site will be live at:** `https://random-name.netlify.app`

**Next:** Set up custom domain (optional)  
**Questions?** Check TROUBLESHOOTING section above

---

**Version:** 1.0  
**Last Updated:** 2026-09-29  
**Status:** Ready to Deploy
