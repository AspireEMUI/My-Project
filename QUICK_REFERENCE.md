# Quick Reference: Adding a Product in 5 Minutes

## The Fastest Way to Add a Product

### 1. Prepare Image (1 min)
```
Save image to: /images/NN-product-name.jpeg
Example: /images/10-vitamin-c-serum.jpeg
```

### 2. Open script.js (30 sec)
- Find line 5: `const productsDatabase = [`
- Scroll to the end (before `];`)

### 3. Add Product Code (2 min)
Copy this template and fill in YOUR product info:

```javascript
    {
        id: 'YOUR-ID',
        name: 'Your Product Name',
        category: 'Category',
        price: 999,
        badge: 'New',
        description: 'Short description here.',
        mainImage: 'images/NN-product-name.jpeg',
        additionalImages: ['images/NN-product-name.jpeg'],
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        sizes: ['50ml', '100ml'],
        rating: { stars: 5, count: 0 },
        isNew: true,
        isActive: true,
        displayOrder: 10
    }
```

### 4. Don't Forget the Comma! (30 sec)
```javascript
// If there's a product BEFORE yours, add a comma:
    },  // ← This comma
    {
        id: 'your-new-product',
        ...
    }
```

### 5. Save & Reload (30 sec)
- Save `script.js`
- Reload browser page
- ✅ Your product appears!

---

## Copy-Paste Templates

### Basic Product (No Badge)
```javascript
    {
        id: 'product-id',
        name: 'Product Name',
        category: 'Category',
        price: 750,
        badge: null,
        description: 'Product description.',
        mainImage: 'images/12-product-name.jpeg',
        additionalImages: ['images/12-product-name.jpeg'],
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        sizes: ['50ml', '100ml'],
        rating: { stars: 5, count: 123 },
        isNew: false,
        isActive: true,
        displayOrder: 12
    }
```

### New Arrival (With Gallery)
```javascript
    {
        id: 'new-product-id',
        name: 'New Product',
        category: 'Serums',
        price: 1200,
        badge: 'New',
        description: 'Exciting new formula with premium ingredients.',
        mainImage: 'images/13-new-product.jpeg',
        additionalImages: [
            'images/13-new-product.jpeg',
            'images/13-new-product-alt.jpeg',
            'images/13-new-product-packaging.jpeg'
        ],
        features: ['Premium ingredients', 'Fast results', 'Long-lasting', 'All skin types'],
        sizes: ['30ml', '50ml', '100ml'],
        rating: { stars: 5, count: 0 },
        isNew: true,
        isActive: true,
        displayOrder: 13
    }
```

### Best Seller
```javascript
    {
        id: 'bestseller-id',
        name: 'Best Selling Product',
        category: 'Facewash',
        price: 690,
        badge: 'Best Seller',
        description: 'Our most loved product with thousands of happy customers.',
        mainImage: 'images/14-bestseller.jpeg',
        additionalImages: ['images/14-bestseller.jpeg'],
        features: ['Customer favorite', 'Proven results', 'Natural formula', 'Great value'],
        sizes: ['100ml', '200ml'],
        rating: { stars: 5, count: 1250 },
        isNew: false,
        isActive: true,
        displayOrder: 14
    }
```

### Out of Stock (Hidden)
```javascript
    {
        id: 'out-of-stock-id',
        name: 'Currently Out of Stock',
        category: 'Treatment',
        price: 999,
        badge: null,
        description: 'Back in stock soon!',
        mainImage: 'images/15-product.jpeg',
        additionalImages: ['images/15-product.jpeg'],
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        sizes: ['50ml'],
        rating: { stars: 5, count: 89 },
        isNew: false,
        isActive: false,     // ← Hidden from website
        displayOrder: 15
    }
```

---

## Common One-Line Changes

### Change Price
```javascript
price: 1250,  // ← Change this number
```

### Make it New
```javascript
isNew: true,  // ← Change from false to true
```

### Hide Product
```javascript
isActive: false,  // ← Change from true to false
```

### Add "New" Badge
```javascript
badge: 'New',  // ← Change from null to 'New'
```

### Add Best Seller Badge
```javascript
badge: 'Best Seller',  // ← Change from null
```

### Change Category
```javascript
category: 'Skincare',  // ← Change to your category
```

### Update Rating
```javascript
rating: { stars: 5, count: 500 },  // ← Change both numbers
```

### Reorder Product
```javascript
displayOrder: 5,  // ← Lower numbers = appear first
```

---

## Property Reference

### id
- **What it is:** Unique identifier for the product
- **Format:** lowercase, hyphenated, no spaces
- **Examples:** `vitamin-c-serum`, `charcoal-cleanser`, `neem-tea-tree`
- **Rules:** Must be unique, no two products can have same id

### name
- **What it is:** Product name shown on website
- **Format:** Title Case (capitalize words)
- **Examples:** "Vitamin C Serum", "Charcoal Cleanser", "Neem & Tea Tree"
- **Rules:** Can include special characters, numbers

### category
- **What it is:** Product type/category
- **Format:** One or two words
- **Examples:** "Serums", "Facewash", "Treatment", "Home Care"
- **Rules:** Shown under product name on cards

### price
- **What it is:** Product price
- **Format:** Number only (no currency, no commas)
- **Examples:** `290`, `1250`, `11120`
- **Rules:** Automatically formatted as "Rs. 1,250" on page

### badge
- **What it is:** Label shown on product card
- **Format:** `'New'`, `'Best Seller'`, `'Popular'`, or `null`
- **Examples:** `'New'`, `null`
- **Rules:** Only one badge per product, optional

### description
- **What it is:** Short product description
- **Format:** 1-2 sentences
- **Examples:** "Gentle natural dishwash liquid that's safe and effective"
- **Rules:** Shown on card and in modal

### mainImage
- **What it is:** Main product image shown on card
- **Format:** `'images/filename.jpeg'`
- **Examples:** `'images/01-vitamin-c-serum.jpeg'`
- **Rules:** Must exist in `/images/` folder, relative path required

### additionalImages
- **What it is:** Extra images shown in gallery modal
- **Format:** Array of image paths
- **Examples:** `['images/01-product.jpeg']` or `['images/01-product.jpeg', 'images/01-product-alt.jpeg']`
- **Rules:** At minimum, include mainImage; can have up to 5+ images

### features
- **What it is:** Key product features shown in modal
- **Format:** Array of 2-4 strings
- **Examples:** `['Natural formula', 'Tough on grease', 'Safe for hands']`
- **Rules:** 2-4 items recommended, shown with checkmarks

### sizes
- **What it is:** Available product sizes
- **Format:** Array of size strings
- **Examples:** `['50ml', '100ml', '200ml']` or `['500ml', '1L']`
- **Rules:** At least one size required

### rating
- **What it is:** Product star rating and review count
- **Format:** `{ stars: 1-5, count: number }`
- **Examples:** `{ stars: 5, count: 248 }`, `{ stars: 4, count: 156 }`
- **Rules:** stars must be 1-5, count is number of reviews

### isNew
- **What it is:** Whether product appears in New Arrivals
- **Format:** `true` or `false`
- **Examples:** `true`, `false`
- **Rules:** If `true`, product appears in BOTH Featured & New Arrivals

### isActive
- **What it is:** Whether product is visible
- **Format:** `true` or `false`
- **Examples:** `true`, `false`
- **Rules:** If `false`, product hidden from website

### displayOrder
- **What it is:** Sort order for products
- **Format:** Number 1-99
- **Examples:** `1`, `5`, `10`, `25`
- **Rules:** Lower numbers appear first, gaps recommended (10, 20, 30)

---

## Quick Decision Tree: Which Properties to Change?

```
Want to...?

├─ Change price?
│  └─ Change: price
│
├─ Make it New?
│  └─ Change: isNew to true
│  └─ Optionally change: badge to 'New'
│
├─ Add "Best Seller" badge?
│  └─ Change: badge to 'Best Seller'
│
├─ Hide product?
│  └─ Change: isActive to false
│
├─ Show it again?
│  └─ Change: isActive to true
│
├─ Reorder it?
│  └─ Change: displayOrder
│
├─ Update description?
│  └─ Change: description
│
├─ Change image?
│  └─ Change: mainImage to new image path
│
├─ Add gallery images?
│  └─ Change: additionalImages to array with multiple images
│
├─ Update rating?
│  └─ Change: rating { stars: X, count: Y }
│
├─ Add new features?
│  └─ Change: features array
│
└─ Add new sizes?
   └─ Change: sizes array
```

---

## Validation Checklist

Before saving, check:

```
☑ Product id is unique (not used before)
☑ Product id is lowercase with hyphens
☑ Product id has no spaces
☑ name is present (required)
☑ category is present (required)
☑ price is a number (not text)
☑ badge is 'New', 'Best Seller', 'Popular', or null
☑ description is 1-2 sentences
☑ mainImage path exists in /images/ folder
☑ additionalImages includes at least mainImage
☑ features has 2-4 items
☑ sizes has at least 1 item
☑ rating.stars is 1-5
☑ rating.count is a number
☑ isNew is true or false
☑ isActive is true or false
☑ displayOrder is a number 1-99
☑ Comma after product (except last product)
☑ No syntax errors (check in browser console)
```

---

## File Locations Quick Reference

| What | Location |
|------|----------|
| Product database | `script.js` line 5-150 |
| Product images | `/images/` folder |
| Product modal styles | `styles.css` line ~1209 |
| Landing page | `cosmetics-landing.html` |
| This guide | `PRODUCT_MANAGEMENT_GUIDE.md` |
| Quick reference | `QUICK_REFERENCE.md` (this file) |
| Testing report | `TESTING_REPORT.md` |

---

## Emergency Checklist

**If page breaks after editing:**

1. Open browser console (F12 → Console tab)
2. Look for error message with line number
3. Go to that line in `script.js`
4. Check for:
   - Missing comma after product object
   - Missing or mismatched braces `{}`
   - Mismatched quotes `'` or `"`
   - Incomplete string values

5. Fix the error
6. Save file
7. Reload page

**If product doesn't appear:**

1. Check `isActive: true`
2. Check `displayOrder: X` (number 1-99)
3. Check product `id` is unique
4. Check all required fields present
5. Reload page (hard refresh: Ctrl+F5)

**If image doesn't load:**

1. Check file exists in `/images/` folder
2. Check filename is exactly correct (case-sensitive)
3. Check path format: `'images/filename.jpeg'`
4. Check file extension: `.jpeg` or `.png`
5. Reload page

---

## Tips & Tricks

### Tip 1: Use Gaps in displayOrder
Instead of 1, 2, 3, use 10, 20, 30, 40...
This makes it easy to insert new products later without renumbering!

```javascript
// Good structure:
displayOrder: 10
displayOrder: 20
displayOrder: 30

// Later, add new product easily:
displayOrder: 25  // Fits between 20 and 30
```

### Tip 2: Template-Based Workflow
1. Copy an existing similar product
2. Change the id, name, and other properties
3. Save and test
4. Adjust as needed

### Tip 3: Test One at a Time
1. Add one product
2. Save and reload
3. Verify it appears
4. Add next product
5. Repeat

### Tip 4: Keep Backups
Before making major changes, save a copy of `script.js`:
```
script.js.backup
script.js.backup2
```

This way you can revert if something goes wrong!

---

**Version:** 1.0  
**Last Updated:** 2026-09-29  
**For Full Guide:** See PRODUCT_MANAGEMENT_GUIDE.md
