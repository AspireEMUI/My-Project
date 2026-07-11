# Deployment Guide - Lumineux Beauty

Complete step-by-step guide to deploy your cosmetics landing page to production.

## 📋 Pre-Deployment Checklist

Before deploying, verify all items:

- [ ] All product images optimized (< 200KB each)
- [ ] Brand colors, fonts, and text customized
- [ ] Newsletter email service connected (Mailchimp, ConvertKit, etc.)
- [ ] Payment gateway configured (Stripe, PayPal, etc.)
- [ ] Analytics tracking ID added
- [ ] SEO meta tags reviewed and updated
- [ ] Mobile responsiveness tested on real devices
- [ ] Accessibility audit passed
- [ ] Performance tested (Lighthouse score > 90)
- [ ] All links working (internal and external)
- [ ] Contact/support email configured
- [ ] Privacy policy and Terms of Service written
- [ ] SSL certificate ready (https)
- [ ] Domain name purchased and configured

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Why Netlify?**
- Free tier includes SSL, CDN, continuous deployment
- Instant deploys with git push
- Built-in form handling and serverless functions
- No server maintenance required

**Steps:**

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or email

2. **Create Git Repository (if using GitHub)**
   ```bash
   cd your-project-directory
   git init
   git add .
   git commit -m "Initial cosmetics landing page"
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

3. **Connect to Netlify**
   - Click "New site from Git" in Netlify dashboard
   - Select your GitHub repository
   - Build settings:
     - Build command: `(leave blank - no build needed)`
     - Publish directory: `.`

4. **Configure Domain**
   - In Netlify dashboard: Domain settings
   - Option A: Use Netlify's free subdomain (your-site.netlify.app)
   - Option B: Connect custom domain (see Custom Domain section below)

5. **Deploy**
   - Push changes to GitHub
   - Netlify automatically deploys on push
   - View deploy status and logs in dashboard

**Advanced: Environment Variables**
```toml
# netlify.toml
[build]
  command = ""
  publish = "."

[context.production]
  environment = { ANALYTICS_ID = "YOUR_GA_ID" }

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
```

### Option 2: Vercel

**Why Vercel?**
- Optimized for modern web apps
- Instant previews on pull requests
- Edge functions for serverless logic
- Excellent performance out of the box

**Steps:**

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repository
5. Configure project settings
6. Click "Deploy"
7. Configure custom domain in Project Settings

### Option 3: GitHub Pages (Free, No Database)

**Why GitHub Pages?**
- Free hosting directly from GitHub
- No third-party dependencies
- Good for static sites

**Steps:**

1. **Create repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Under "Build and deployment"
   - Select "Deploy from a branch"
   - Select `main` branch
   - Save

3. **Access site**
   - Your site will be available at: `https://your-username.github.io/your-repo`
   - Or use custom domain (see Custom Domain section)

### Option 4: Traditional Hosting (Shared/VPS)

**Why Traditional Hosting?**
- Full control over server
- Can run backend services
- More flexibility for complex setups

**Steps:**

1. **Choose Hosting Provider**
   - Bluehost, SiteGround, HostGator (shared hosting)
   - DigitalOcean, Linode (VPS)
   - AWS, Google Cloud (managed services)

2. **Upload Files**
   - Via FTP/SFTP using FileZilla or Cyberduck
   - Or use terminal with `scp` command:
   ```bash
   scp -r ./* your-user@your-server.com:/public_html/
   ```

3. **Configure Domain**
   - Point domain DNS to server IP
   - Update nameservers if needed

4. **Enable HTTPS**
   - Install SSL certificate (Let's Encrypt is free)
   - Most hosts have one-click SSL setup
   - Configure `.htaccess` for HTTPS redirect

5. **Performance Configuration**
   - Add caching headers (.htaccess)
   - Enable gzip compression
   - Configure CDN (Cloudflare is free)

**Example .htaccess:**
```apache
# Enable gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/html "access plus 2 days"
</IfModule>

# Redirect HTTP to HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Option 5: Docker + Cloud Run (Advanced)

For teams or complex setups:

**Dockerfile:**
```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Deploy to Google Cloud Run:**
```bash
gcloud run deploy cosmetics-landing \
  --source . \
  --platform managed \
  --region us-central1
```

## 🌐 Custom Domain Setup

### For Netlify/Vercel:

1. Purchase domain (Namecheap, GoDaddy, Google Domains)
2. In provider dashboard, add these DNS records:
   ```
   Type: CNAME
   Name: @ (or your domain)
   Value: your-site.netlify.app (or Vercel equivalent)
   ```
3. In Netlify/Vercel dashboard:
   - Go to Domain settings
   - Add custom domain
   - Wait for DNS propagation (up to 48 hours)

### For Traditional Hosting:

1. Purchase domain
2. In domain registrar, update nameservers to:
   ```
   ns1.your-hosting.com
   ns2.your-hosting.com
   ```
3. In hosting control panel, create A record pointing to server IP
4. Set up SSL certificate (Let's Encrypt)

### SSL Certificate (HTTPS)

**Netlify/Vercel:**
- Automatic via Let's Encrypt (free)
- No action needed

**Traditional Hosting:**
```bash
# Use Certbot with Let's Encrypt
sudo apt-get install certbot python3-certbot-apache
sudo certbot --apache -d your-domain.com
sudo certbot renew --dry-run  # Test auto-renewal
```

## 📊 Post-Deployment Checklist

After deploying:

- [ ] Site loads without errors
- [ ] All images display correctly
- [ ] Shopping cart works
- [ ] Newsletter signup works
- [ ] Mobile responsive on all devices
- [ ] Forms submit without errors
- [ ] Links all working
- [ ] Analytics tracking firing
- [ ] SEO meta tags visible in page source
- [ ] SSL certificate installed (green lock icon)
- [ ] No console errors (F12 → Console)
- [ ] Performance tested (Lighthouse)
- [ ] Form submission emails received
- [ ] Payment test transaction successful

## 🔍 Performance Optimization Post-Deploy

### Lighthouse Audit
1. Open site in Chrome
2. F12 → Lighthouse tab
3. Click "Generate report"
4. Address any issues (target score > 90)

### Core Web Vitals
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Image Optimization
1. Use WebP format with fallbacks
2. Serve appropriately sized images
3. Use CDN (Cloudflare, Imgix, Cloudinary)

### Caching Strategy
```
Static assets (CSS, JS): 1 year
Images: 1 year
HTML pages: 2 days (changes more frequently)
API responses: Based on data freshness
```

## 🔐 Security Post-Deploy

### Security Headers
Add these via server config or Netlify/Vercel settings:

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://www.googletagmanager.com;
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### HTTPS Everywhere
- Redirect all HTTP traffic to HTTPS
- Set HSTS header (Strict-Transport-Security)
- Test with SSL Labs (ssllabs.com/ssltest)

### Form Security
- Validate all inputs server-side
- Sanitize user-submitted content
- Use CSRF tokens for sensitive forms
- Rate limit form submissions

### API Security
If connecting to backend APIs:
- Use environment variables for API keys (never expose in client code)
- Validate all API responses
- Use CORS properly
- Implement rate limiting
- Monitor for suspicious activity

## 📈 Analytics Setup Post-Deploy

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership via DNS or HTML file
4. Submit sitemap
5. Monitor indexing and search performance

### Google Analytics 4
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Add web property
3. Get measurement ID
4. Add GA4 script to page (see CUSTOMIZATION_GUIDE.md)
5. Wait 24 hours for data to appear

### Monitor Key Metrics
- Unique visitors
- Bounce rate
- Conversion rate (newsletter signups, cart additions)
- Traffic sources
- Device/browser breakdown

## 🚨 Monitoring & Maintenance

### Set Up Alerts
- Downtime monitoring (Uptime Robot - free tier available)
- Error tracking (Sentry - free tier)
- Performance monitoring (Google Analytics)
- Email on deploy errors

### Regular Maintenance
- Update content regularly (newsletter, testimonials)
- Check for broken links monthly
- Review analytics weekly
- Update product inventory as needed
- Monitor form submissions for issues

### Backup Strategy
- Netlify/Vercel: Automatic via git history
- Traditional hosting: Daily backups to separate location
- Document recovery process

## 🐛 Troubleshooting Common Issues

### Site Not Loading
1. Check deployment logs (Netlify/Vercel dashboard or hosting control panel)
2. Verify DNS records pointing to correct server
3. Check for 404 errors on static assets
4. Clear browser cache (Ctrl+Shift+Delete)

### Images Not Loading
1. Verify image URLs are correct and public
2. Check CORS headers if loading from CDN
3. Test image URLs directly in browser
4. Check file permissions on server

### Forms Not Submitting
1. Check browser console for JavaScript errors
2. Verify email service (Mailchimp, etc.) is connected
3. Check form submission logs
4. Verify CORS settings if using external API

### Slow Performance
1. Run Lighthouse audit
2. Check image file sizes
3. Enable gzip compression
4. Set up CDN
5. Remove unused CSS/JavaScript
6. Check for render-blocking resources

### SSL Certificate Issues
1. Verify domain in certificate
2. Check certificate expiration date
3. Clear browser cache
4. Test at [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/)

## 📱 Continuous Deployment

### Auto-Deploy on Git Push

**Netlify:**
Already configured! Push to main branch and it deploys automatically.

**Vercel:**
Already configured! Push to main branch and it deploys automatically.

**Traditional Hosting:**
Set up webhook to pull latest code:
```bash
# Add webhook receiver script (deploy.php on server)
<?php
$payload = json_decode($_POST['payload'], true);
if ($payload['ref'] === 'refs/heads/main') {
    shell_exec('cd /var/www/html && git pull origin main');
}
?>
```

## 📞 Support & Escalation

If you encounter issues:

1. **Check Documentation** — This guide and CUSTOMIZATION_GUIDE.md
2. **Review Server Logs** — Check hosting provider dashboard
3. **Browser Console** — F12 → Console for client-side errors
4. **Hosting Support** — Contact your hosting provider's support team
5. **Community** — Stack Overflow, Reddit r/webdev, Discord communities

## 🎉 Success!

Your site is now live! 

**Next Steps:**
1. Share with friends and family
2. Set up social media links
3. Start marketing
4. Monitor analytics
5. Iterate based on user feedback
6. Add more products
7. Expand with blog content

---

**Useful Resources:**
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Google Analytics Academy](https://skillshop.withgoogle.com/courses/google-analytics-for-beginners)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [OWASP Security Guidelines](https://owasp.org/www-community/attacks/)
- [MDN Web Docs](https://developer.mozilla.org/)

**Last Updated:** July 2026
**Version:** 1.0.0
