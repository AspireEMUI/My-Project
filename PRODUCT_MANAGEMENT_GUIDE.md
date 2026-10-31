# Product Management Guide for Lush Shine
## How to Add, Edit, and Manage Products

**Last Updated:** 2026-09-29  
**Version:** 1.0  
**Status:** Production Ready

---

## Table of Contents

1. [Overview](#overview)
2. [Product Database Structure](#product-database-structure)
3. [Adding New Products](#adding-new-products)
4. [Editing Existing Products](#editing-existing-products)
5. [Managing New Arrivals](#managing-new-arrivals)
6. [Hiding/Removing Products](#hidingremoving-products)
7. [Reordering Products](#reordering-products)
8. [Image Management](#image-management)
9. [Common Workflows](#common-workflows)
10. [Troubleshooting](#troubleshooting)
11. [Best Practices](#best-practices)

---

## Overview

The Lush Shine landing page uses a **centralized product database** in JavaScript. This means:

- ✅ **No HTML editing needed** to add products
- ✅ **Single source of truth** - product info defined once, used everywhere
- ✅ **Scalable** - easily manage 50+ products
- ✅ **Dynamic rendering** - products automatically appear on the page

**All product data is stored in:** `script.js` (lines 5-150)

---

## Product Database Structure

Every product in the database has the following properties:

```javascript
{
    id: 'unique-product-id',                    // Unique identifier (lowercase, hyphenated)
    name: 'Product Name',                       // Display name shown to users
    category: 'Category Name',                  // Product category (e.g., Skincare, Home Care)
    price: 999,                                 // Price in Rs. (number only)
    badge: 'New' | 'Best Seller' | 'Popular' | null,  // Optional badge shown on card
    description: 'Full product description...',  // 1-2 sentences about the product
    mainImage: 'images/product-name.jpeg',      // Main product image
    additionalImages: ['images/product.jpeg'],  // Array of additional images
    features: ['Feature 1', 'Feature 2'],       // Key product features (2-4 items)
    sizes: ['50ml', '100ml', '200ml'],          // Available sizes
    rating: { stars: 5, count: 248 },           // Star rating and review count
    isNew: false,                               // true = appears in New Arrivals section
    isActive: true,                             // false = hidden from all sections
    displayOrder: 1                             // Sort order (1-99)
}
```

### Property Explanations

| Property | Type | Required | Notes |
|----------|------|----------|-------|
| `id` | string | ✅ Yes | Must be unique, lowercase, hyphenated (e.g., `charcoal-cleanser`) |
| `name` | string | ✅ Yes | Product name shown on cards and in modal |
| `category` | string | ✅ Yes | Shown under product name (e.g., "Facewash", "Treatment") |
| `price` | number | ✅ Yes | Price in Rupees, numbers only (e.g., 690, not "Rs. 690") |
| `badge` | string or null | ❌ No | Leave as `null` if no badge. Options: "New", "Best Seller", "Popular" |
| `description` | string | ✅ Yes | 1-2 sentences describing the product |
| `mainImage` | string | ✅ Yes | Path to main product image in `images/` folder |
| `additionalImages` | array | ✅ Yes | Array of image paths (at minimum, same as mainImage) |
| `features` | array | ✅ Yes | 2-4 key product features shown in modal |
| `sizes` | array | ✅ Yes | Available sizes (e.g., ["50ml", "100ml"]) |
| `rating` | object | ✅ Yes | Object with `stars` (1-5) and `count` (number of reviews) |
| `isNew` | boolean | ✅ Yes | `true` to show in New Arrivals, `false` for Featured Products only |
| `isActive` | boolean | ✅ Yes | `false` to hide product from both sections |
| `displayOrder` | number | ✅ Yes | Number 1-99 to control sort order (lower numbers appear first) |

---

## Adding New Products

### Step-by-Step Instructions

#### **Step 1: Prepare Your Images**

1. Take clear product photos (JPG or PNG)
2. Save images in the `/images/` folder with descriptive names
3. Use consistent naming: `NN-product-name.jpeg` (e.g., `10-vitamin-c-serum.jpeg`)
4. **Important:** Use exact filenames in the product database

#### **Step 2: Open `script.js`**

1. Open the file `script.js` in your text editor
2. Find line 5: `const productsDatabase = [`
3. Locate the **end of the last product** (before the closing `]`)

#### **Step 3: Add Your Product**

Add a comma after the last product, then add your new product:

```javascript
    {
        id: 'vitamin-c-serum',
        name: 'Vitamin C Serum',
        category: 'Serums',
        price: 1250,
        badge: 'New',
        description: 'Brightening vitamin C serum for radiant, glowing skin. Reduces dark spots and improves skin texture.',
        mainImage: 'images/10-vitamin-c-serum.jpeg',
        additionalImages: ['images/10-vitamin-c-serum.jpeg'],
        features: ['Brightening', 'Vitamin C rich', 'Reduces spots', 'Improves texture'],
        sizes: ['30ml', '50ml'],
        rating: { stars: 5, count: 0 },
        isNew: true,
        isActive: true,
        displayOrder: 10
    }
```

#### **Step 4: Save and Reload**

1. Save the `script.js` file
2. Reload your landing page in browser
3. Your product should appear immediately!

---

## Editing Existing Products

### Common Edit Scenarios

#### **Change Product Price**

Find the product by its `id`, then change the `price` value:

```javascript
// Before
price: 690,

// After
price: 750,
```

#### **Update Product Description**

Find the product and change the `description`:

```javascript
// Before
description: 'Natural face wash with neem and tea tree oil',

// After
description: 'Advanced natural face wash with organic neem and tea tree oil. Reduces acne and prevents breakouts.',
```

#### **Modify Product Features**

Find the product and update the `features` array:

```javascript
// Before
features: ['Cleansing', 'Acne-fighting', 'Natural'],

// After
features: ['Gentle cleansing', 'Acne-fighting', 'Natural ingredients', '100% organic'],
```

#### **Add More Sizes**

Find the product and expand the `sizes` array:

```javascript
// Before
sizes: ['50ml', '100ml'],

// After
sizes: ['30ml', '50ml', '100ml', '200ml'],
```

#### **Update Rating**

Find the product and change `rating`:

```javascript
// Before
rating: { stars: 4, count: 156 },

// After
rating: { stars: 5, count: 342 },
```

#### **Change Product Category**

Find the product and change `category`:

```javascript
// Before
category: 'Facewash',

// After
category: 'Serums',
```

---

## Managing New Arrivals

### Make a Product "New"

To display a product in the **New Arrivals** section, change `isNew` to `true`:

```javascript
// Before
isNew: false,

// After
isNew: true,
```

**Result:** Product appears in both:
- Featured Products section (sorted by displayOrder)
- New Arrivals section (only products with `isNew: true`)

### Remove "New" Status

Change `isNew` to `false`:

```javascript
// Before
isNew: true,

// After
isNew: false,
```

**Result:** Product moves to Featured Products section only

### Show Badge

Add a badge like "New", "Best Seller", or "Popular":

```javascript
// Before
badge: null,

// After
badge: 'New',
```

Available badges:
- `'New'` - for new products
- `'Best Seller'` - for popular products
- `'Popular'` - for trending products
- `null` - no badge

---

## Hiding/Removing Products

### Temporarily Hide a Product

Change `isActive` to `false`:

```javascript
// Before
isActive: true,

// After
isActive: false,
```

**Result:** Product disappears from both sections but remains in database

**Use case:** Temporarily out of stock, seasonal products, or products being updated

### Permanently Delete a Product

1. Find the entire product object
2. **Delete the entire product block** (from `{` to `},` or `}`)
3. **Remove the comma** from the product before it (if needed)
4. Save and reload

Example: To delete product with `id: 'old-product'`:

```javascript
// Delete this entire block:
    {
        id: 'old-product',
        name: 'Old Product',
        ...
    },
```

---

## Reordering Products

Products display in the order specified by `displayOrder`. Lower numbers appear first.

### Change Display Order

Find the product and change the `displayOrder` number:

```javascript
// Appears 5th
displayOrder: 5

// Move to appear 2nd
displayOrder: 2
```

### Reorder All Products

To reorganize all products, update their `displayOrder` values:

```javascript
// Product 1
displayOrder: 1

// Product 2
displayOrder: 2

// Product 3
displayOrder: 3
// ... etc
```

**Tip:** Products don't need sequential numbers. You can use:
- `displayOrder: 10` (appears 1st among 10, 20, 30)
- `displayOrder: 20`
- `displayOrder: 30`

This makes it easy to insert products later without renumbering everything.

---

## Image Management

### Adding Product Images

#### **Step 1: Prepare Images**

- Use high-quality product photos (JPG or PNG)
- Recommended size: 400x400px or larger
- Save with descriptive names

#### **Step 2: Upload to `/images/` Folder**

1. Open the `/images/` folder in your file system
2. Copy your image files there
3. Note the exact filename

#### **Step 3: Update Product Database**

In your product object, add the image path:

```javascript
mainImage: 'images/10-vitamin-c-serum.jpeg',
additionalImages: ['images/10-vitamin-c-serum.jpeg', 'images/10-vitamin-c-serum-alt.jpeg'],
```

#### **Image Naming Convention**

Follow this pattern for consistency:

```
NN-product-name.jpeg

Examples:
01-Dishwasher-Liquid.png
02-Charcoal-Cleanser.jpeg
10-Vitamin-C-Serum.jpeg
```

Format:
- `NN` = display order (01-99)
- `product-name` = product name in PascalCase
- Extension = `.jpeg` or `.png`

### Adding Multiple Images (Gallery)

If you want a product to have multiple images in the gallery:

```javascript
mainImage: 'images/10-vitamin-c-serum.jpeg',
additionalImages: [
    'images/10-vitamin-c-serum.jpeg',           // Main image
    'images/10-vitamin-c-serum-bottle.jpeg',    // Side view
    'images/10-vitamin-c-serum-close-up.jpeg',  // Close-up
    'images/10-vitamin-c-serum-packaging.jpeg'  // Packaging
]
```

Users can browse these images in the product detail modal!

---

## Common Workflows

### Workflow 1: Launch a New Product

**Goal:** Add a new product that appears in New Arrivals

```javascript
{
    id: 'new-brightening-mask',
    name: 'Brightening Face Mask',
    category: 'Treatment',
    price: 899,
    badge: 'New',                    // ← Shows "New" badge
    description: 'Luxurious face mask with brightening extracts. Leaves skin radiant and glowing.',
    mainImage: 'images/11-brightening-mask.jpeg',
    additionalImages: ['images/11-brightening-mask.jpeg'],
    features: ['Brightening', 'Hydrating', 'Luxury formula', 'Visible results'],
    sizes: ['50ml', '100ml'],
    rating: { stars: 5, count: 0 },
    isNew: true,                     // ← Shows in New Arrivals
    isActive: true,                  // ← Visible
    displayOrder: 11
}
```

### Workflow 2: Move Product Out of New Arrivals

**Goal:** Product is no longer "new"

```javascript
// Change isNew from true to false
isNew: false,

// Optionally remove the badge
badge: null,
```

### Workflow 3: Mark Product as Best Seller

**Goal:** Product is now a best seller

```javascript
// Change badge
badge: 'Best Seller',

// Optionally remove from New Arrivals
isNew: false,
```

### Workflow 4: Temporarily Disable Product (Out of Stock)

**Goal:** Hide product without deleting it

```javascript
// Change isActive to false
isActive: false,

// (Keep all other fields the same)
```

**Later, to reactivate:**
```javascript
isActive: true,
```

### Workflow 5: Update Pricing (Sale or Adjustment)

**Goal:** Change product price

```javascript
// Before
price: 1200,

// After (sale price)
price: 799,
```

**Tip:** Consider adding a "Sale" badge and updating the description to mention the discount.

---

## Troubleshooting

### Product Not Appearing?

**Check these things:**

1. **Is `isActive` set to `true`?**
   ```javascript
   isActive: true,  // ✅ Should be true
   ```

2. **Is `displayOrder` a valid number?**
   ```javascript
   displayOrder: 5,  // ✅ Should be a number like 1-99
   ```

3. **Does product `id` contain no spaces or special characters?**
   ```javascript
   id: 'my-product',     // ✅ Correct
   id: 'my product',     // ❌ Wrong (has space)
   id: 'my-product!',    // ❌ Wrong (has special char)
   ```

4. **Are all required fields present?**
   - id, name, category, price, description, mainImage, features, sizes, rating, isNew, isActive, displayOrder

5. **Did you save the file?**
   - Save `script.js` and reload the page

### Product Image Not Loading?

**Check these things:**

1. **Is the image file in the `/images/` folder?**
   - Navigate to `/images/` and verify the file exists

2. **Is the filename exactly correct in the database?**
   ```javascript
   mainImage: 'images/10-vitamin-c-serum.jpeg',  // ✅ Exact filename
   ```
   - Be careful with capitalization
   - Be careful with file extensions (.jpeg vs .jpg)

3. **Did you use the correct relative path?**
   ```javascript
   mainImage: 'images/10-vitamin-c-serum.jpeg',  // ✅ Correct
   mainImage: './images/10-vitamin-c-serum.jpeg',  // ❌ Wrong
   mainImage: '/images/10-vitamin-c-serum.jpeg',  // ❌ Wrong
   ```

4. **Is the image file format supported?**
   - Use `.jpeg`, `.jpg`, or `.png` files only

### Product Appears Twice?

**Check this:**

1. **Is the same product in both sections?**
   - This usually means the product is in New Arrivals AND Featured Products
   - This is normal if `isNew: true`

2. **Are there duplicate product entries?**
   - Search for the product `id` - should appear only once in the database
   - Delete the duplicate

### Prices Showing Incorrectly?

**Check this:**

1. **Is price a number only?**
   ```javascript
   price: 1250,     // ✅ Correct
   price: '1250',   // ❌ Wrong (string)
   price: Rs. 1250, // ❌ Wrong
   ```

2. **Is the price formatted?**
   - Prices are automatically formatted as "Rs. 1,250" on the page
   - Store only the number in the database

### Stars/Rating Not Showing?

**Check this:**

1. **Is `rating.stars` a number between 1-5?**
   ```javascript
   rating: { stars: 5, count: 248 },  // ✅ Correct
   rating: { stars: '5', count: 248 },  // ❌ Wrong (string)
   ```

2. **Is `count` a number (not a string)?**
   ```javascript
   rating: { stars: 5, count: 248 },  // ✅ Correct
   rating: { stars: 5, count: '248' },  // ❌ Wrong (string)
   ```

### Syntax Errors?

**If the page breaks after adding a product:**

1. **Check for missing commas**
   - Each product needs a comma after it (except the last one)
   ```javascript
   // Wrong (missing comma)
   { id: 'product-1', ... }
   { id: 'product-2', ... }

   // Correct
   { id: 'product-1', ... },
   { id: 'product-2', ... }
   ```

2. **Check for missing braces**
   - Each product must start with `{` and end with `}`

3. **Check for mismatched quotes**
   - Use single quotes `'` for all string values

4. **Use browser DevTools to find the error:**
   - Press F12 in browser
   - Go to Console tab
   - Look for red error messages with line numbers

---

## Best Practices

### ✅ DO

- ✅ Use descriptive product IDs (`vitamin-c-serum`, not `vc123`)
- ✅ Keep descriptions short (1-2 sentences)
- ✅ Use consistent file naming (`10-product-name.jpeg`)
- ✅ Include 2-4 key features for each product
- ✅ Test in browser after making changes
- ✅ Make backups of `script.js` before major updates
- ✅ Use round numbers for prices (easier to read)
- ✅ Update review counts as you get more customer feedback
- ✅ Use displayOrder gaps (10, 20, 30) for easy future additions
- ✅ Keep images under 500KB for fast loading

### ❌ DON'T

- ❌ Use spaces in product IDs
- ❌ Use special characters in product IDs (except hyphens)
- ❌ Store prices as strings ("1250" instead of 1250)
- ❌ Leave fields blank (all fields are required)
- ❌ Use more than one badge per product
- ❌ Add extremely long descriptions
- ❌ Use very large image files (>1MB)
- ❌ Change product structure/format without updating all products
- ❌ Forget to save `script.js` after editing
- ❌ Use the same image file name for different products

### 💡 TIPS

- **Backup:** Before adding many products, make a backup of `script.js`
- **Test First:** Add one product, test it, then add more
- **Naming:** Use PascalCase for image filenames (easier to read)
- **Organization:** Use gaps in displayOrder (10, 20, 30) for easy reorganization
- **Badges:** Don't overuse badges - use only for truly special products
- **Reviews:** Update star counts as your product gets real customer reviews
- **Images:** High-quality images make products look better

---

## Quick Reference

### Most Common Changes

| Task | Where to Change | Example |
|------|-----------------|---------|
| Change price | `price: XXX` | `price: 1499` |
| Update description | `description: '...'` | `description: 'New formula'` |
| Mark as New | `isNew: true` | Appears in New Arrivals |
| Hide product | `isActive: false` | Product disappears |
| Reorder | `displayOrder: X` | `displayOrder: 5` |
| Add feature | `features: [...]` | `features: ['New', 'Organic']` |
| Change image | `mainImage: '...'` | `mainImage: 'images/new-img.jpeg'` |
| Update rating | `rating: {...}` | `rating: { stars: 5, count: 500 }` |

---

## Getting Help

### Common Issues & Solutions

If something isn't working:

1. **Check the TESTING_REPORT.md** - Contains all verified features
2. **Check your syntax** - Look for missing commas, braces, quotes
3. **Reload the page** - Sometimes browser needs a refresh
4. **Check browser console** - F12 → Console tab for error messages
5. **Compare with existing products** - See how working products are structured

### Questions?

Refer back to:
- [Product Database Structure](#product-database-structure)
- [Common Workflows](#common-workflows)
- [Troubleshooting](#troubleshooting)

---

## File Locations

**Files to know:**
- Product database: `script.js` (lines 5-150)
- Product images: `/images/` folder
- Landing page: `cosmetics-landing.html`
- Styles: `styles.css`

**Do NOT edit:**
- HTML product card markup (products render automatically)
- CSS modal styles (controlled automatically)
- JavaScript rendering functions (automated)

**Only edit:**
- Product database in `script.js`
- Image files in `/images/` folder

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-09-29 | Initial release with 9 products |

---

**Last Updated:** 2026-09-29  
**For Support:** Refer to TESTING_REPORT.md and CLAUDE.md
