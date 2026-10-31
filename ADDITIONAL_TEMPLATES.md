# Additional Product Templates
## Specialized Templates for Different Product Types

---

## Template: Limited Edition Product

```javascript
{
    id: 'limited-edition-serum',
    name: 'Limited Edition Serum',
    category: 'Serums',
    price: 1999,
    badge: 'Limited',
    description: 'Exclusive limited edition formula available for a short time only. Premium ingredients in a luxury package.',
    mainImage: 'images/20-limited-edition.jpeg',
    additionalImages: [
        'images/20-limited-edition.jpeg',
        'images/20-limited-edition-package.jpeg'
    ],
    features: ['Exclusive formula', 'Limited quantity', 'Premium packaging', 'Luxury experience'],
    sizes: ['50ml'],
    rating: { stars: 5, count: 0 },
    isNew: false,
    isActive: true,
    displayOrder: 20
}
```

---

## Template: Starter Kit / Bundle

```javascript
{
    id: 'skincare-starter-kit',
    name: 'Skincare Starter Kit',
    category: 'Kits',
    price: 2999,
    badge: 'Best Value',
    description: 'Complete skincare starter kit with 4 essential products. Perfect for beginners or travel.',
    mainImage: 'images/21-starter-kit.jpeg',
    additionalImages: [
        'images/21-starter-kit.jpeg',
        'images/21-starter-kit-open.jpeg',
        'images/21-starter-kit-contents.jpeg'
    ],
    features: ['4 essential products', 'Save 25%', 'Travel-friendly', 'Gift ready'],
    sizes: ['Kit'],
    rating: { stars: 5, count: 342 },
    isNew: false,
    isActive: true,
    displayOrder: 21
}
```

---

## Template: Popular / Trending Product

```javascript
{
    id: 'trending-facial-oil',
    name: 'Trending Facial Oil',
    category: 'Oils',
    price: 1450,
    badge: 'Popular',
    description: 'The viral facial oil everyone is talking about. Nourishes and transforms skin in weeks.',
    mainImage: 'images/22-trending-oil.jpeg',
    additionalImages: ['images/22-trending-oil.jpeg'],
    features: ['Viral on social media', '10k+ happy customers', 'Fast results', 'All skin types'],
    sizes: ['30ml', '50ml'],
    rating: { stars: 5, count: 2847 },
    isNew: false,
    isActive: true,
    displayOrder: 22
}
```

---

## Template: Seasonal / Holiday Product

```javascript
{
    id: 'holiday-gift-set',
    name: 'Holiday Gift Set',
    category: 'Gift Sets',
    price: 3499,
    badge: 'Seasonal',
    description: 'Festive holiday collection in premium gift packaging. Perfect for gifting during celebrations.',
    mainImage: 'images/23-holiday-set.jpeg',
    additionalImages: [
        'images/23-holiday-set.jpeg',
        'images/23-holiday-set-wrapped.jpeg',
        'images/23-holiday-set-box.jpeg'
    ],
    features: ['Premium packaging', 'Holiday themed', 'Gift ready', 'Limited time'],
    sizes: ['Set'],
    rating: { stars: 5, count: 156 },
    isNew: true,
    isActive: true,
    displayOrder: 23
}
```

---

## Template: High-End / Luxury Product

```javascript
{
    id: 'luxury-serum',
    name: 'Luxury Gold Serum',
    category: 'Premium',
    price: 4999,
    badge: null,
    description: 'Ultimate luxury serum infused with gold particles and rare botanical extracts. Professional-grade formula.',
    mainImage: 'images/24-luxury-serum.jpeg',
    additionalImages: [
        'images/24-luxury-serum.jpeg',
        'images/24-luxury-serum-bottle.jpeg',
        'images/24-luxury-serum-packaging.jpeg',
        'images/24-luxury-serum-application.jpeg'
    ],
    features: ['Gold infused', 'Rare extracts', 'Professional grade', 'Luxury packaging'],
    sizes: ['30ml'],
    rating: { stars: 5, count: 89 },
    isNew: false,
    isActive: true,
    displayOrder: 24
}
```

---

## Template: Budget-Friendly / Value Product

```javascript
{
    id: 'budget-face-wash',
    name: 'Budget Cleanser',
    category: 'Facewash',
    price: 299,
    badge: 'Great Value',
    description: 'Effective natural face wash at an affordable price. Gentle yet powerful cleansing.',
    mainImage: 'images/25-budget-cleanser.jpeg',
    additionalImages: ['images/25-budget-cleanser.jpeg'],
    features: ['Affordable price', 'Natural ingredients', 'Effective', 'Bulk available'],
    sizes: ['200ml', '500ml'],
    rating: { stars: 4, count: 678 },
    isNew: false,
    isActive: true,
    displayOrder: 25
}
```

---

## Template: Pre-Order / Coming Soon

```javascript
{
    id: 'coming-soon-product',
    name: 'Coming Soon Product',
    category: 'Future',
    price: 1299,
    badge: null,
    description: 'Exciting new product launching next month. Sign up to be notified when available.',
    mainImage: 'images/26-coming-soon.jpeg',
    additionalImages: ['images/26-coming-soon.jpeg'],
    features: ['Launch next month', 'Be the first to know', 'Pre-order coming', 'Revolutionary formula'],
    sizes: ['50ml'],
    rating: { stars: 0, count: 0 },
    isNew: true,
    isActive: false,  // Hidden until launch
    displayOrder: 26
}
```

---

## Template: Subscription / Recurring Product

```javascript
{
    id: 'monthly-subscription',
    name: 'Monthly Beauty Box',
    category: 'Subscription',
    price: 899,
    badge: 'Subscribe',
    description: 'Curated selection of 3 premium skincare products delivered monthly. Cancel anytime.',
    mainImage: 'images/27-subscription-box.jpeg',
    additionalImages: [
        'images/27-subscription-box.jpeg',
        'images/27-subscription-unboxing.jpeg'
    ],
    features: ['3 premium products', 'Monthly delivery', 'Cancel anytime', 'Member exclusive'],
    sizes: ['Monthly'],
    rating: { stars: 5, count: 543 },
    isNew: false,
    isActive: true,
    displayOrder: 27
}
```

---

## Template: Organic / Certified Product

```javascript
{
    id: 'certified-organic-cream',
    name: 'Organic Certified Cream',
    category: 'Creams',
    price: 1899,
    badge: null,
    description: '100% USDA certified organic face cream. No chemicals, no compromises. Pure nature.',
    mainImage: 'images/28-organic-cream.jpeg',
    additionalImages: [
        'images/28-organic-cream.jpeg',
        'images/28-organic-cream-jar.jpeg',
        'images/28-organic-ingredients.jpeg'
    ],
    features: ['USDA certified organic', 'No chemicals', '100% natural', 'Eco-friendly'],
    sizes: ['50ml', '100ml'],
    rating: { stars: 5, count: 234 },
    isNew: false,
    isActive: true,
    displayOrder: 28
}
```

---

## Template: Sensitive Skin / Medical Grade

```javascript
{
    id: 'sensitive-skin-serum',
    name: 'Sensitive Skin Serum',
    category: 'Medical',
    price: 1599,
    badge: null,
    description: 'Hypoallergenic serum formulated for sensitive and reactive skin. Dermatologist tested.',
    mainImage: 'images/29-sensitive-serum.jpeg',
    additionalImages: ['images/29-sensitive-serum.jpeg'],
    features: ['Hypoallergenic', 'Dermatologist tested', 'No fragrance', 'Gentle formula'],
    sizes: ['30ml', '50ml'],
    rating: { stars: 5, count: 456 },
    isNew: false,
    isActive: true,
    displayOrder: 29
}
```

---

## Template: Professional / Salon Product

```javascript
{
    id: 'professional-treatment',
    name: 'Professional Treatment Mask',
    category: 'Professional',
    price: 2299,
    badge: null,
    description: 'Professional-grade treatment mask used in salons. Spa-quality results at home.',
    mainImage: 'images/30-professional-mask.jpeg',
    additionalImages: [
        'images/30-professional-mask.jpeg',
        'images/30-professional-application.jpeg',
        'images/30-professional-results.jpeg'
    ],
    features: ['Salon quality', 'Professional formula', 'Visible results', 'Weekly treatment'],
    sizes: ['200ml'],
    rating: { stars: 5, count: 189 },
    isNew: false,
    isActive: true,
    displayOrder: 30
}
```

---

## Quick Template Selection Guide

| Product Type | Template | Key Properties |
|--------------|----------|-----------------|
| **Limited Edition** | Limited Edition | High price, `badge: 'Limited'` |
| **Bundle/Kit** | Starter Kit | `category: 'Kits'`, multiple products |
| **Trending** | Popular | High review count, `badge: 'Popular'` |
| **Seasonal** | Holiday Set | Time-limited, festive, gift packaging |
| **Luxury** | Luxury Product | High price, premium packaging, rare ingredients |
| **Budget** | Budget-Friendly | Low price, `badge: 'Great Value'` |
| **Pre-Order** | Coming Soon | `isActive: false`, `isNew: true` |
| **Subscription** | Subscription | Recurring, `sizes: ['Monthly']` |
| **Certified** | Organic | Certifications, sustainability focus |
| **Medical** | Sensitive Skin | Dermatologist tested, no fragrance |
| **Professional** | Salon Product | Premium pricing, salon quality |

---

## How to Use These Templates

1. **Choose** the template that best matches your product type
2. **Copy** the entire product object
3. **Paste** into your `script.js` database
4. **Customize** all the properties for your product
5. **Add comma** after previous product if needed
6. **Save** and reload page

---

## Pro Tips for Each Template

### Limited Edition
- Use high prices to convey exclusivity
- Update description with "limited time only"
- Keep `displayOrder` low to show prominently
- Consider moving to `isActive: false` when sold out

### Bundles/Kits
- Use `sizes: ['Kit']` instead of ml
- Price lower than individual items combined
- Include 3-5 key features
- Update reviews as customers buy

### Trending Products
- Use high review counts to show popularity
- Update badge when trend changes
- Monitor and update popularity status
- Consider `isNew: true` to promote

### Seasonal Products
- Create months before season
- Use clear, festive naming
- Set `isActive: false` after season ends
- Reactivate same product next year

### Luxury Products
- Use gallery (4+ images) to showcase
- Write premium descriptions
- Use higher price points
- Consider smaller sizes (30ml vs 100ml)

---

**Version:** 1.0  
**For Main Guide:** See PRODUCT_MANAGEMENT_GUIDE.md
