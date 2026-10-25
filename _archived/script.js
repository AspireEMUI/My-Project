// ===== Shopping Cart Management =====
console.log('script.js loaded successfully');

// ===== Product Data Structure =====
const productsDatabase = [
    {
        id: 'charcoal-cleanser',
        name: 'Charcoal Cleanser',
        category: 'Facewash',
        price: 690,
        badge: 'Best Seller',
        description: 'Deep cleansing formula with activated charcoal to purify pores and reduce fine lines while boosting skin elasticity.',
        mainImage: 'images/02-Charcoal-Cleanser.jpeg',
        additionalImages: ['images/02-Charcoal-Cleanser.jpeg'],
        features: ['Deep cleansing', 'Pore purifying', 'Reduces fine lines', 'Boosts elasticity'],
        sizes: ['100ml', '200ml'],
        rating: { stars: 5, count: 248 },
        isNew: false,
        isActive: true,
        displayOrder: 1
    },
    {
        id: 'neem-tea-tree',
        name: 'Neem & Tea Tree Face Wash',
        category: 'Facewash',
        price: 590,
        badge: null,
        description: 'Anti-acne formula with natural neem and tea tree to illuminate skin and provide a radiant glow. Gentle yet effective.',
        mainImage: 'images/03-Face-Wash-Neem-Tea-Tree.jpeg',
        additionalImages: ['images/03-Face-Wash-Neem-Tea-Tree.jpeg'],
        features: ['Anti-acne', 'Natural botanicals', 'Illuminating', 'Gentle on skin'],
        sizes: ['100ml', '200ml'],
        rating: { stars: 5, count: 189 },
        isNew: false,
        isActive: true,
        displayOrder: 2
    },
    {
        id: 'sunblock-spf50',
        name: 'Sunblock SPF50',
        category: 'Protection',
        price: 690,
        badge: null,
        description: 'Broad-spectrum SPF 50 protection with natural ingredients. Complete UV defense for daily use without greasiness.',
        mainImage: 'images/04-Sunblock-SPF50.jpeg',
        additionalImages: ['images/04-Sunblock-SPF50.jpeg'],
        features: ['SPF 50 protection', 'Water-resistant', 'Natural ingredients', 'Non-greasy'],
        sizes: ['50ml', '100ml'],
        rating: { stars: 5, count: 342 },
        isNew: false,
        isActive: true,
        displayOrder: 3
    },
    {
        id: 'anti-aging-serum',
        name: 'Anti-Aging Serum',
        category: 'Serums',
        price: 1450,
        badge: 'New',
        description: 'Powerful anti-aging formula with natural botanicals for youthful, radiant skin. Reduces wrinkles and boosts elasticity.',
        mainImage: 'images/05-Anti-Aging-Serum.jpeg',
        additionalImages: ['images/05-Anti-Aging-Serum.jpeg'],
        features: ['Anti-aging', 'Reduces wrinkles', 'Boosts radiance', 'Nourishing'],
        sizes: ['30ml', '50ml'],
        rating: { stars: 4, count: 267 },
        isNew: true,
        isActive: true,
        displayOrder: 4
    },
    {
        id: 'anti-acne-serum',
        name: 'Anti-Acne Serum',
        category: 'Treatment',
        price: 1800,
        badge: null,
        description: 'Targeted acne treatment serum with natural ingredients for clear, healthy skin. Reduces breakouts and heals blemishes.',
        mainImage: 'images/06-Anti-Acne-Serum.jpeg',
        additionalImages: ['images/06-Anti-Acne-Serum.jpeg'],
        features: ['Targets acne', 'Reduces breakouts', 'Heals blemishes', 'Prevents scars'],
        sizes: ['30ml', '50ml'],
        rating: { stars: 5, count: 198 },
        isNew: false,
        isActive: true,
        displayOrder: 5
    },
    {
        id: 'brightening-glow-serum',
        name: 'Brightening Glow Serum',
        category: 'Serums',
        price: 55555,
        badge: 'Popular',
        description: 'Intensive brightening serum formulated to illuminate skin and provide a radiant, glowing complexion. Premium formula.',
        mainImage: 'images/07-Brightening-Glow-Serum.jpeg',
        additionalImages: ['images/07-Brightening-Glow-Serum.jpeg'],
        features: ['Brightening', 'Intense glow', 'Even skin tone', 'Luxury formula'],
        sizes: ['30ml', '50ml'],
        rating: { stars: 5, count: 214 },
        isNew: false,
        isActive: true,
        displayOrder: 6
    },
    {
        id: 'hydrating-botanical-serum',
        name: 'Hydrating Botanical Serum',
        category: 'Serums',
        price: 1650,
        badge: 'New',
        description: 'Luxurious hydrating serum infused with botanical extracts for deep moisture and skin renewal. Lightweight and fast-absorbing.',
        mainImage: 'images/08-Anti Aging-Serum.jpeg',
        additionalImages: ['images/08-Anti Aging-Serum.jpeg'],
        features: ['Deep hydration', 'Botanical extracts', 'Fast-absorbing', 'Skin renewal'],
        sizes: ['30ml', '50ml'],
        rating: { stars: 5, count: 223 },
        isNew: true,
        isActive: true,
        displayOrder: 7
    }
];

// ===== Product Rendering Functions =====

/**
 * Generate HTML for a single product card
 */
function generateProductCard(product) {
    const badgeHtml = product.badge ? `<span class="badge">${product.badge}</span>` : '';
    const starsHtml = '★'.repeat(product.rating.stars) + '☆'.repeat(5 - product.rating.stars);

    return `
        <article class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.mainImage}"
                     alt="${product.name} - ${product.category}"
                     loading="lazy">
                ${badgeHtml}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="category">${product.category}</p>
                <div class="rating">
                    <span class="stars">${starsHtml}</span>
                    <span class="review-count">(${product.rating.count} reviews)</span>
                </div>
                <p class="price">Rs. ${product.price.toLocaleString()}</p>
                <p class="description">${product.description}</p>
                <button class="cta-secondary">Add to Cart</button>
            </div>
        </article>
    `;
}

/**
 * Filter and sort products for display
 */
function getDisplayProducts(filterNew = false) {
    let filtered = productsDatabase.filter(p => p.isActive);
    if (filterNew) {
        filtered = filtered.filter(p => p.isNew);
    }
    return filtered.sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Render products into a container
 */
function renderProductsToContainer(containerId, filterNew = false) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container not found: ${containerId}`);
        return;
    }

    const products = getDisplayProducts(filterNew);
    const html = products.map(p => generateProductCard(p)).join('');
    container.innerHTML = html;

    console.log(`Rendered ${products.length} products to ${containerId}${filterNew ? ' (New Arrivals)' : ' (Featured)'}`);
}

/**
 * Initialize product rendering
 */
function initializeProductRendering() {
    // Render featured products
    renderProductsToContainer('featured-products-grid', false);

    // Render new arrivals
    renderProductsToContainer('new-arrivals-grid', true);

    // Re-attach event listeners for product cards
    setupProductCardListeners();
}

/**
 * Setup click listeners for all product cards
 */
function setupProductCardListeners() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card) => {
        card.style.cursor = 'pointer';

        // Remove old listeners by cloning
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);

        // Add click listener
        newCard.addEventListener('click', function(e) {
            // Don't trigger if clicking the "Add to Cart" button
            if (e.target.closest('.cta-secondary')) return;

            const productId = newCard.dataset.productId;
            if (productId) {
                openProductModal(productId);
            }
        });

        // Add to Cart button listener
        const addToCartBtn = newCard.querySelector('.cta-secondary');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const productId = newCard.dataset.productId;
                if (productId) {
                    const product = getProductById(productId);
                    if (product) {
                        addProductToCart(product);
                    }
                }
            });
        }
    });
}
let currentProductModal = null;
let currentGalleryIndex = 0;

function getProductById(productId) {
    return productsDatabase.find(p => p.id === productId);
}

function openProductModal(productId) {
    const product = getProductById(productId);
    if (!product) {
        console.warn('Product not found:', productId);
        return;
    }

    currentProductModal = product;
    currentGalleryIndex = 0;

    const modal = document.getElementById('product-detail-modal');

    // Set product info
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-category').textContent = product.category;
    document.getElementById('modal-product-price').textContent = `Rs. ${product.price.toLocaleString()}`;
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('modal-product-stars').textContent = '★'.repeat(product.rating.stars) + '☆'.repeat(5 - product.rating.stars);
    document.getElementById('modal-product-reviews').textContent = `(${product.rating.count} reviews)`;

    // Set features
    const featuresList = document.getElementById('features-list');
    const featuresSection = document.getElementById('modal-product-features');
    if (product.features && product.features.length > 0) {
        featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
        featuresSection.style.display = 'block';
    } else {
        featuresSection.style.display = 'none';
    }

    // Set sizes
    const sizesList = document.getElementById('sizes-list');
    const sizesSection = document.getElementById('modal-product-sizes');
    if (product.sizes && product.sizes.length > 0) {
        sizesList.innerHTML = product.sizes.map(size => `<button class="size-option" data-size="${size}">${size}</button>`).join('');
        sizesSection.style.display = 'block';
    } else {
        sizesSection.style.display = 'none';
    }

    // Setup gallery
    setupProductGallery(product);

    // Open modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    console.log('Product modal opened:', product.name);
}

function closeProductModal() {
    const modal = document.getElementById('product-detail-modal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
    currentProductModal = null;
    currentGalleryIndex = 0;
}

function setupProductGallery(product) {
    const images = product.additionalImages || [product.mainImage];

    // Set main image
    const mainImage = document.getElementById('gallery-main-image');
    mainImage.src = images[0];

    // Update counter
    document.getElementById('gallery-image-counter').textContent = `1 / ${images.length}`;

    // Create thumbnails
    const thumbsList = document.getElementById('gallery-thumbnails-list');
    thumbsList.innerHTML = images.map((img, idx) => `
        <button class="gallery-thumbnail ${idx === 0 ? 'active' : ''}" data-index="${idx}" title="Image ${idx + 1}">
            <img src="${img}" alt="Product thumbnail ${idx + 1}" loading="lazy">
        </button>
    `).join('');

    // Add event listeners
    const thumbnails = thumbsList.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            selectGalleryImage(index, images);
        });
    });

    // Setup nav buttons
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');

    prevBtn.onclick = () => selectGalleryImage(Math.max(0, currentGalleryIndex - 1), images);
    nextBtn.onclick = () => selectGalleryImage(Math.min(images.length - 1, currentGalleryIndex + 1), images);

    // Disable buttons at boundaries
    prevBtn.disabled = currentGalleryIndex === 0;
    nextBtn.disabled = currentGalleryIndex === images.length - 1;
}

function selectGalleryImage(index, images) {
    currentGalleryIndex = index;

    const mainImage = document.getElementById('gallery-main-image');
    mainImage.src = images[index];

    // Update counter
    document.getElementById('gallery-image-counter').textContent = `${index + 1} / ${images.length}`;

    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });

    // Update nav buttons
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === images.length - 1;
}

// ===== Wire Up Product Cards to Modal =====
function setupModalListeners() {
    // Modal close button
    const closeBtn = document.querySelector('.product-detail-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProductModal);
    }

    // Close modal on background click
    const modal = document.getElementById('product-detail-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProductModal();
            }
        });
    }

    // Modal Add to Cart button
    const modalAddToCartBtn = document.getElementById('modal-add-to-cart');
    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener('click', function() {
            if (currentProductModal) {
                addProductToCart(currentProductModal);
                closeProductModal();
            }
        });
    }

    // Modal Enquire button
    const modalEnquireBtn = document.getElementById('modal-enquire');
    if (modalEnquireBtn) {
        modalEnquireBtn.addEventListener('click', function() {
            if (currentProductModal) {
                const subject = `Enquiry: ${currentProductModal.name}`;
                const mailtoLink = `mailto:info@lushshine.com?subject=${encodeURIComponent(subject)}&body=I am interested in ${encodeURIComponent(currentProductModal.name)}`;
                window.location.href = mailtoLink;
            }
        });
    }

    // Keyboard: ESC to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('product-detail-modal').classList.contains('open')) {
            closeProductModal();
        }
    });
}

function getProductIdFromName(productName) {
    const product = productsDatabase.find(p => p.name === productName);
    return product ? product.id : null;
}

function addProductToCart(product) {
    const cartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.mainImage,
    };

    cart.addItem(cartProduct);
}

// Initialize modal listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setupModalListeners();
});

// ===== Shopping Cart Management =====

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartCount();
        console.log('ShoppingCart initialized with', this.items.length, 'items');
    }

    loadCart() {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.updateCartCount();
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1,
            });
        }

        this.saveCart();
        this.showFeedback('Added to cart!');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            const newQuantity = Math.max(1, Math.min(999, parseInt(quantity) || 1));
            item.quantity = newQuantity;
            this.saveCart();
        }
    }

    decreaseQuantity(productId) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
                this.saveCart();
            }
        }
    }

    increaseQuantity(productId) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity += 1;
            this.saveCart();
        }
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    updateCartCount() {
        const count = this.items.reduce((sum, item) => sum + item.quantity, 0);
        const cartBtn = document.querySelector('.cart-count');
        if (cartBtn) {
            cartBtn.textContent = count;
            cartBtn.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    showFeedback(message) {
        const feedback = document.createElement('div');
        feedback.className = 'toast-notification';
        feedback.textContent = message;
        document.body.appendChild(feedback);

        requestAnimationFrame(() => {
            feedback.classList.add('show');
        });

        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => feedback.remove(), 300);
        }, 2000);
    }
}

// ===== Initialize Cart =====
const cart = new ShoppingCart();

// ===== Master DOMContentLoaded Handler =====
document.addEventListener('DOMContentLoaded', function() {
    // Render all products from database
    initializeProductRendering();

    // Setup modal listeners
    setupModalListeners();

    // Cart button click handler
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Cart button clicked, displaying cart...');
            displayCart();
        });
    } else {
        console.warn('Cart button not found in DOM');
    }

    // Product image zoom
    const productImages = document.querySelectorAll('.product-image img');
    productImages.forEach(img => {
        img.addEventListener('click', function() {
            if (this.style.cursor === 'zoom-in') {
                this.style.cursor = 'zoom-out';
                this.style.transform = 'scale(2)';
                this.style.position = 'relative';
                this.style.zIndex = '10';
            } else {
                this.style.cursor = 'zoom-in';
                this.style.transform = 'scale(1)';
                this.style.zIndex = 'auto';
            }
        });
        img.style.cursor = 'zoom-in';
    });

    // Scroll to section enhancement
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Track page view
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href,
    });

    // Smooth page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});

// ===== Cart Display Function =====
function displayCart() {
    console.log('displayCart() called');
    let modal = document.getElementById('cart-modal');
    console.log('Existing modal found:', !!modal);

    // Create modal if it doesn't exist
    if (!modal) {
        console.log('Creating new modal...');
        modal = document.createElement('div');
        modal.id = 'cart-modal';
        modal.className = 'modal';
        console.log('Modal className set to:', modal.className);
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="hideCart()">&times;</button>
                <h2>Shopping Cart</h2>
                <p style="font-size: 0.85rem; color: #999; text-align: center; margin-bottom: 1rem;">💡 Use the minus button or × icon to remove items</p>
                <div id="cart-items-list"></div>
                <div class="cart-summary">
                    <div class="summary-row">
                        <span>Subtotal:</span>
                        <span id="cart-subtotal">Rs. 0</span>
                    </div>
                    <div class="summary-row">
                        <span>Shipping:</span>
                        <span id="cart-shipping">Free</span>
                    </div>
                    <div class="summary-row total">
                        <span>Total:</span>
                        <span id="cart-total">Rs. 0</span>
                    </div>
                </div>
                <button class="cta-primary" style="width: 100%; margin-top: 1.5rem;">Proceed to Checkout</button>
            </div>
        `;
        document.body.appendChild(modal);
        console.log('Modal appended to body');
    }

    // Populate cart items
    console.log('Updating cart display...');
    updateCartDisplay();

    // Show modal
    console.log('Adding "open" class to modal');
    modal.classList.add('open');
    console.log('Modal classList after add:', modal.classList);
    console.log('Modal display style:', window.getComputedStyle(modal).display);
    document.body.style.overflow = 'hidden';
    console.log('displayCart() complete');
}

function hideCart() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items-list');
    if (!cartItemsList) return;

    // Empty cart message
    if (cart.items.length === 0) {
        cartItemsList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #666;">
                <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">Your cart is empty</p>
                <p style="font-size: 0.9rem;">Add some products to get started!</p>
            </div>
        `;
        document.getElementById('cart-subtotal').textContent = 'Rs. 0';
        document.getElementById('cart-total').textContent = 'Rs. 0';
        return;
    }

    // Cart items
    cartItemsList.innerHTML = cart.items.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Rs. ${item.price.toFixed(0)}</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="event.stopPropagation(); cart.decreaseQuantity('${item.id}'); updateCartDisplay();">−</button>
                <input type="number" value="${item.quantity}" min="1" onchange="event.stopPropagation(); cart.updateQuantity('${item.id}', this.value); updateCartDisplay();">
                <button onclick="event.stopPropagation(); cart.increaseQuantity('${item.id}'); updateCartDisplay();">+</button>
            </div>
            <span style="font-weight: 600;">Rs. ${(item.price * item.quantity).toFixed(0)}</span>
            <button onclick="event.stopPropagation(); cart.removeItem('${item.id}'); updateCartDisplay();" style="background: none; color: #d4a5a5; font-size: 1.3rem; border: none; cursor: pointer; padding: 4px 8px; transition: all 0.2s ease;" onmouseover="this.style.color='#b8858a'; this.style.transform='scale(1.2)';" onmouseout="this.style.color='#d4a5a5'; this.style.transform='scale(1)';">×</button>
        </div>
    `).join('');

    // Update totals
    const total = cart.getTotal();
    document.getElementById('cart-subtotal').textContent = `Rs. ${total.toFixed(0)}`;
    document.getElementById('cart-total').textContent = `Rs. ${total.toFixed(0)}`;
}

// Close modal on background click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('cart-modal');
    if (modal && e.target === modal) {
        hideCart();
    }
});

// ===== Newsletter Form Handling =====
function handleNewsletterSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!email) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }

    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Subscribing...';
    button.disabled = true;

    setTimeout(() => {
        showNotification('Thanks for subscribing! Check your email for a special offer.', 'success');
        form.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 1000);
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    requestAnimationFrame(() => {
        notification.classList.add('show');
    });

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3500);
}

// ===== Product Image Zoom =====
// Moved to master DOMContentLoaded handler

// ===== Scroll to Section Enhancement =====
// Moved to master DOMContentLoaded handler

// ===== Lazy Load Images Enhancement =====
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== Analytics Tracking (Basic) =====
function trackEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);

    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Track add to cart
document.addEventListener('click', function(e) {
    if (e.target.closest('.cta-secondary')) {
        const productName = e.target.closest('.product-card')?.querySelector('h3')?.textContent;
        const productPrice = e.target.closest('.product-card')?.querySelector('.price')?.textContent;

        trackEvent('add_to_cart', {
            product_name: productName,
            product_price: productPrice,
        });
    }
});

// Track newsletter signup
document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('newsletter-form')) {
        trackEvent('newsletter_signup', {
            timestamp: new Date().toISOString(),
        });
    }
});

// ===== Smooth Page Load Animation =====
// Moved to master DOMContentLoaded handler

// ===== Simple Test Modal Function =====
window.testSimpleModal = function() {
    // Create a super-simple overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const box = document.createElement('div');
    box.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 10px;
        text-align: center;
        max-width: 400px;
    `;
    box.innerHTML = `
        <h2>Test Modal Opened!</h2>
        <p>This is a simple test overlay.</p>
        <button onclick="this.parentElement.parentElement.remove();" style="padding: 10px 20px; background: #d4a5a5; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
    `;

    overlay.appendChild(box);
    document.body.appendChild(overlay);
    console.log('Simple test modal created and displayed');
};

console.log('Test modal function ready - call window.testSimpleModal() to test');
