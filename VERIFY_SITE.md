# Quick Site Verification (5 minutes)

Run this checklist to verify your cosmetics landing page works perfectly before launching.

## ✅ Step 1: Open in Browser (1 min)

```bash
# Windows: Double-click this file
cosmetics-landing.html

# Mac/Linux: Or type this in terminal
open cosmetics-landing.html
```

**Check:**
- [ ] Page loads without errors
- [ ] You see the Lumineux Beauty hero section
- [ ] All images load (no broken image icons)
- [ ] Text is readable

---

## ✅ Step 2: Test Shopping Cart (1 min)

**Do this:**
1. Scroll to "Featured Products" section
2. Click "Add to Cart" on any product
3. Watch the cart icon in header (should show "1")
4. Click cart icon to open cart modal
5. You should see the product listed

**Expected Results:**
- ✅ Cart count appears in header (🛒 with number)
- ✅ Cart modal shows your product
- ✅ Product price shows correctly
- ✅ Can adjust quantity with +/− buttons
- ✅ Cart total calculates correctly

---

## ✅ Step 3: Test Forms (1 min)

**Newsletter Form:**
1. Scroll to bottom
2. Enter any email: `test@example.com`
3. Click "Subscribe"
4. You should see a success message

**Expected Result:**
- ✅ Form accepts email
- ✅ Success message appears
- ✅ Form clears

---

## ✅ Step 4: Test Responsive Design (1 min)

**Do this:**
1. Press F12 (open DevTools)
2. Click device icon (toggle device toolbar)
3. Test at different sizes:

| Size | Check |
|------|-------|
| Mobile (375px) | 1-column products, readable text |
| Tablet (768px) | 2-column products, balanced |
| Desktop (1024px) | 3-column products, full width |

**Expected Results:**
- ✅ Layout adapts to each size
- ✅ Text stays readable
- ✅ Buttons are clickable
- ✅ No horizontal scrolling

---

## ✅ Step 5: Check Console (1 min)

**Do this:**
1. Press F12 (DevTools)
2. Click "Console" tab
3. Look for red errors

**Expected Result:**
- ✅ No red errors
- ✅ No warnings about missing files
- ✅ Clean console

---

## 🎯 Quick Test Summary

Run through these quick checks:

```
FUNCTIONALITY
  [ ] Page loads
  [ ] Images display
  [ ] Cart button works
  [ ] Newsletter form works
  [ ] All links clickable

RESPONSIVE
  [ ] Mobile looks good
  [ ] Tablet looks good
  [ ] Desktop looks good
  [ ] Touch-friendly (buttons big enough)

TECHNICAL
  [ ] No console errors
  [ ] No broken images
  [ ] Forms respond
  [ ] Cart persists (refresh page, cart still there)

PERFORMANCE
  [ ] Page loads quickly (< 3 sec)
  [ ] Scrolling is smooth
  [ ] Animations are smooth
  [ ] No lag or delays
```

---

## 🚀 If Everything ✅ Checks Out

**You're ready to customize and deploy!**

Next steps:
1. Read **QUICK_START.md** (3 min)
2. Customize colors/images/text (30 min)
3. Use **deploy.sh** to launch (1 min)

---

## 🐛 If Something ❌ Fails

### Cart doesn't show count
- Open browser console (F12)
- Look for JavaScript errors
- Check that `script.js` is in same folder as HTML

### Images don't load
- Check image URLs are correct
- Images from Unsplash should work
- If using local images, make sure file path is correct

### Forms don't work
- Check console for errors
- Verify `script.js` loaded
- Try in different browser

### Page looks broken on mobile
- Clear browser cache (Ctrl+Shift+Delete)
- Try in Incognito mode
- Check viewport meta tag exists in HTML head

### Need help?
→ See **FAQ.md** for 50+ common issues and solutions

---

## ✨ Success!

If all checks pass, you have a working cosmetics landing page ready to customize and deploy.

**Next:** Run the deploy script in **DEPLOY.sh**
