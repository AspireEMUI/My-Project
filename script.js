// ===== Shopping Cart Management =====
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartCount();
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
            item.quantity = Math.max(1, quantity);
            this.saveCart();
        }
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
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

        // Trigger animation
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

// ===== Add to Cart Event Listeners =====
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.cta-secondary');

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const card = button.closest('.product-card');
            if (!card) return;

            const productName = card.querySelector('h3')?.textContent || 'Product';
            const priceText = card.querySelector('.price')?.textContent || '$0';
            const price = parseFloat(priceText.replace('$', ''));
            const image = card.querySelector('.product-image img')?.src || '';

            const product = {
                id: `product-${index}`,
                name: productName,
                price: price,
                image: image,
            };

            cart.addItem(product);
        });
    });

    // Cart button
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            showCartModal();
        });
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

    // Simulate API call
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

// ===== Cart Modal =====
function showCartModal() {
    if (cart.items.length === 0) {
        showNotification('Your cart is empty', 'info');
        return;
    }

    let modal = document.getElementById('cart-modal');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cart-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="closeCartModal()">&times;</button>
                <h2>Shopping Cart</h2>
                <div id="cart-items"></div>
                <div class="cart-summary">
                    <div class="summary-row">
                        <span>Subtotal:</span>
                        <span id="subtotal">$0.00</span>
                    </div>
                    <div class="summary-row">
                        <span>Shipping:</span>
                        <span id="shipping">Free</span>
                    </div>
                    <div class="summary-row total">
                        <span>Total:</span>
                        <span id="total">$0.00</span>
                    </div>
                </div>
                <button class="cta-primary" style="width: 100%; margin-top: 1.5rem;">Proceed to Checkout</button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    renderCartItems();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = cart.items.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1}); renderCartItems();">−</button>
                <input type="number" value="${item.quantity}" min="1" onchange="cart.updateQuantity('${item.id}', this.value); renderCartItems();">
                <button onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1}); renderCartItems();">+</button>
            </div>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="cart.removeItem('${item.id}'); renderCartItems();" style="background: none; color: #999; font-size: 1.2rem;">×</button>
        </div>
    `).join('');

    // Update summary
    const subtotal = cart.getTotal();
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
}

// Close modal on background click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('cart-modal');
    if (modal && e.target === modal) {
        closeCartModal();
    }
});

// ===== Product Image Zoom =====
document.addEventListener('DOMContentLoaded', function() {
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
});

// ===== Scroll to Section Enhancement =====
document.addEventListener('DOMContentLoaded', function() {
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
});

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
    // This is a placeholder for analytics integration
    // Replace with your analytics provider (GA4, Mixpanel, etc.)
    console.log(`Event: ${eventName}`, eventData);

    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Track page view
document.addEventListener('DOMContentLoaded', function() {
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href,
    });
});

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
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
