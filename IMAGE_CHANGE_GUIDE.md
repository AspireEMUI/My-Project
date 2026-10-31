# 🖼️ How to Change the Main Footer/About Section Image

## Location in Your Code

The main photo that appears in the **About Section** (also visible in footer area) is located in the HTML file.

### Current Image Location:

**File:** `cosmetics-landing.html`  
**Line:** ~323 (in the About Section)

### Current Code:
```html
<div class="about-image">
    <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80"
         alt="Lush Shine natural skincare products"
         loading="lazy">
</div>
```

---

## How to Change It

### Option 1: Use Your Local Images
Replace the URL with one of your local images:

```html
<img src="images/01-Dishwasher-Liquid.png"
     alt="Lush Shine natural skincare products"
     loading="lazy">
```

### Option 2: Use an Unsplash Image
Go to [unsplash.com](https://unsplash.com), search for "skincare" or "cosmetics", and copy the image URL:

```html
<img src="https://images.unsplash.com/photo-YOUR-IMAGE-ID?w=600&q=80"
     alt="Lush Shine natural skincare products"
     loading="lazy">
```

### Option 3: Upload Your Own Image
1. Add your image to the `images/` folder
2. Update the `src` to point to it:

```html
<img src="images/your-image-name.jpeg"
     alt="Lush Shine natural skincare products"
     loading="lazy">
```

---

## Where This Image Appears

✅ **About Section** - Right side (on desktop, below on mobile)  
✅ **Hero Background** - Also appears behind the hero text (line ~39)  
✅ **Meta/Social** - Used for social media sharing previews

---

## Image Tips

- **Size:** Keep images at least 600px wide for desktop clarity
- **Format:** Use `.jpg`, `.jpeg`, or `.png`
- **Quality:** Optimize to keep file size under 300KB
- **Alt Text:** Update the `alt` description for accessibility

---

## Quick Change Example

**Before:**
```html
src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80"
```

**After (using local image):**
```html
src="images/premium-skincare-collection.jpeg"
```

---

**Questions?** The image is in the `.about-image` div — just find it and swap the `src` URL! 🎨
