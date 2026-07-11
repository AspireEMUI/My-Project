/**
 * Advanced Features for Lumineux Beauty
 *
 * This file contains optional enhancements you can add to extend functionality.
 * Copy and paste the relevant sections into script.js or create new JS files.
 */

// ===== FEATURE 1: Product Search & Filter =====
class ProductFilter {
    constructor() {
        this.products = Array.from(document.querySelectorAll('.product-card'));
        this.filters = {
            category: null,
            minPrice: 0,
            maxPrice: 1000,
            rating: 0
        };
    }

    addSearchBox() {
        const searchHTML = `
            <div class="search-filter-container">
                <input
                    type="text"
                    id="product-search"
                    placeholder="Search products..."
                    class="search-input"
                >
                <div class="filter-buttons">
                    <button class="filter-btn active" data-category="all">All</button>
                    <button class="filter-btn" data-category="lips">Lips</button>
                    <button class="filter-btn" data-category="eyes">Eyes</button>
                    <button class="filter-btn" data-category="face">Face</button>
                </div>
            </div>
        `;

        const productsSection = document.querySelector('.products > .container');
        productsSection.insertAdjacentHTML('afterbegin', searchHTML);

        this.attachEventListeners();
    }

    attachEventListeners() {
        // Search
        document.getElementById('product-search')?.addEventListener('keyup', (e) => {
            const query = e.target.value.toLowerCase();
            this.filterBySearch(query);
        });

        // Category filter
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filters.category = e.target.dataset.category;
                this.applyFilters();
            });
        });
    }

    filterBySearch(query) {
        this.products.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const matches = name.includes(query);
            card.style.display = matches ? 'block' : 'none';
        });
    }

    applyFilters() {
        this.products.forEach(card => {
            const category = card.dataset.category || '';
            const price = parseFloat(card.querySelector('.price')?.textContent.replace('$', '') || 0);

            const matchesCategory = this.filters.category === 'all' || category === this.filters.category;
            const matchesPrice = price >= this.filters.minPrice && price <= this.filters.maxPrice;

            card.style.display = matchesCategory && matchesPrice ? 'block' : 'none';
        });
    }
}

// Initialize: new ProductFilter().addSearchBox();

// ===== FEATURE 2: Product Quick View Modal =====
function addQuickView() {
    const style = `
        <style>
            .quick-view-btn {
                position: absolute;
                bottom: var(--spacing-md);
                left: 50%;
                transform: translateX(-50%);
                background: var(--primary);
                color: white;
                padding: var(--spacing-xs) var(--spacing-md);
                border: none;
                border-radius: var(--radius-md);
                cursor: pointer;
                opacity: 0;
                transition: opacity var(--transition);
            }

            .product-card:hover .quick-view-btn {
                opacity: 1;
            }

            .quick-view-modal .modal-content {
                max-width: 800px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--spacing-lg);
            }

            @media (max-width: 640px) {
                .quick-view-modal .modal-content {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', style);

    document.querySelectorAll('.product-card').forEach(card => {
        const btn = document.createElement('button');
        btn.className = 'quick-view-btn';
        btn.textContent = 'Quick View';
        card.querySelector('.product-image').appendChild(btn);

        btn.addEventListener('click', () => showQuickView(card));
    });
}

function showQuickView(card) {
    const name = card.querySelector('h3').textContent;
    const price = card.querySelector('.price').textContent;
    const image = card.querySelector('.product-image img').src;
    const rating = card.querySelector('.stars').textContent;
    const description = card.querySelector('.description')?.textContent || 'Premium product';

    const modal = document.createElement('div');
    modal.className = 'modal quick-view-modal open';
    modal.innerHTML = `
        <div class="modal-content">
            <img src="${image}" alt="${name}" style="width: 100%; border-radius: 8px;">
            <div>
                <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
                <h2>${name}</h2>
                <div class="rating" style="margin-bottom: 1rem;">
                    <span class="stars">${rating}</span>
                </div>
                <p style="font-size: 1.5rem; color: var(--accent); font-weight: 700; margin-bottom: 1rem;">${price}</p>
                <p>${description}</p>
                <button class="cta-primary" style="width: 100%; margin-top: 1.5rem;" onclick="cart.addItem({id: '${Date.now()}', name: '${name}', price: ${price.replace('$', '')}, image: '${image}'}); this.closest('.modal').remove();">Add to Cart</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Initialize: addQuickView();

// ===== FEATURE 3: Wishlist Functionality =====
class Wishlist {
    constructor() {
        this.items = this.load();
    }

    load() {
        return JSON.parse(localStorage.getItem('wishlist') || '[]');
    }

    save() {
        localStorage.setItem('wishlist', JSON.stringify(this.items));
    }

    add(product) {
        if (!this.items.find(item => item.id === product.id)) {
            this.items.push(product);
            this.save();
            return true;
        }
        return false;
    }

    remove(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
    }

    toggle(product) {
        const exists = this.items.find(item => item.id === product.id);
        if (exists) {
            this.remove(product.id);
            return false;
        } else {
            this.add(product);
            return true;
        }
    }

    isInWishlist(productId) {
        return this.items.some(item => item.id === productId);
    }
}

// Initialize wishlist: const wishlist = new Wishlist();

// Add wishlist button to products:
function addWishlistButtons() {
    const wishlist = new Wishlist();

    document.querySelectorAll('.product-card').forEach((card, index) => {
        const heart = document.createElement('button');
        heart.className = 'wishlist-btn';
        heart.innerHTML = '🤍';
        heart.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255,255,255,0.9);
            border: none;
            font-size: 1.5rem;
            padding: 8px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s;
        `;

        const productId = `product-${index}`;
        if (wishlist.isInWishlist(productId)) {
            heart.innerHTML = '❤️';
        }

        heart.addEventListener('click', (e) => {
            e.preventDefault();
            const isAdded = wishlist.toggle({ id: productId, name: card.querySelector('h3').textContent });
            heart.innerHTML = isAdded ? '❤️' : '🤍';
            showNotification(isAdded ? 'Added to wishlist' : 'Removed from wishlist', 'info');
        });

        card.querySelector('.product-image').appendChild(heart);
    });
}

// Initialize: addWishlistButtons();

// ===== FEATURE 4: Product Comparison =====
class ProductComparison {
    constructor() {
        this.selected = [];
    }

    addToComparison(product) {
        if (this.selected.length < 3 && !this.selected.find(p => p.id === product.id)) {
            this.selected.push(product);
            this.updateComparisonView();
        }
    }

    removeFromComparison(productId) {
        this.selected = this.selected.filter(p => p.id !== productId);
        this.updateComparisonView();
    }

    updateComparisonView() {
        // Update UI to show comparison count
        const count = document.getElementById('comparison-count');
        if (count) {
            count.textContent = this.selected.length;
            count.style.display = this.selected.length > 0 ? 'flex' : 'none';
        }
    }

    showComparisonTable() {
        if (this.selected.length === 0) {
            showNotification('Select products to compare', 'info');
            return;
        }

        const modal = document.createElement('div');
        modal.className = 'modal open';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 1000px; max-height: 80vh; overflow-y: auto;">
                <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
                <h2>Product Comparison</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">Feature</th>
                        ${this.selected.map(p => `<th style="padding: 10px; border-bottom: 2px solid #ddd;">${p.name}</th>`).join('')}
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Price</strong></td>
                        ${this.selected.map(p => `<td style="padding: 10px; border-bottom: 1px solid #ddd;">${p.price}</td>`).join('')}
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Rating</strong></td>
                        ${this.selected.map(p => `<td style="padding: 10px; border-bottom: 1px solid #ddd;">${p.rating}</td>`).join('')}
                    </tr>
                </table>
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }
}

// Initialize: const comparison = new ProductComparison();

// ===== FEATURE 5: Email Reminder Feature =====
function addEmailReminders() {
    // Allow users to set price drop reminders
    document.querySelectorAll('.product-card').forEach(card => {
        const reminderBtn = document.createElement('button');
        reminderBtn.className = 'cta-secondary';
        reminderBtn.textContent = '🔔 Price Alert';
        reminderBtn.style.marginTop = '0.5rem';

        reminderBtn.addEventListener('click', () => {
            const productName = card.querySelector('h3').textContent;
            const email = prompt('Enter your email for price drop alerts:');

            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                // Send to your backend API
                fetch('/api/price-alerts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, product: productName })
                }).then(() => {
                    showNotification('Alert set! We\'ll notify you of price drops.', 'success');
                });
            }
        });

        card.querySelector('.product-info').appendChild(reminderBtn);
    });
}

// Initialize: addEmailReminders();

// ===== FEATURE 6: Customer Reviews Display =====
function loadCustomerReviews() {
    // Fetch and display reviews from a backend API
    const reviewsAPI = '/api/reviews'; // Your backend endpoint

    document.querySelectorAll('.product-card').forEach(card => {
        const productName = card.querySelector('h3').textContent;

        // Add "Read Reviews" link
        const reviewLink = document.createElement('a');
        reviewLink.href = '#';
        reviewLink.textContent = 'Read all reviews';
        reviewLink.style.cssText = 'display: block; margin-top: 0.5rem; color: var(--primary); font-size: 0.85rem;';

        reviewLink.addEventListener('click', (e) => {
            e.preventDefault();
            showReviewsModal(productName);
        });

        card.querySelector('.product-info').appendChild(reviewLink);
    });
}

function showReviewsModal(productName) {
    const modal = document.createElement('div');
    modal.className = 'modal open';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
            <h2>Customer Reviews: ${productName}</h2>
            <div id="reviews-container" style="max-height: 400px; overflow-y: auto;">
                <p>Loading reviews...</p>
            </div>
            <textarea placeholder="Write a review..." style="width: 100%; height: 100px; margin-top: 1rem; padding: 10px; border-radius: 4px; border: 1px solid #ddd;"></textarea>
            <button class="cta-primary" style="width: 100%; margin-top: 1rem;">Submit Review</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Fetch reviews from API
    fetch(`/api/reviews?product=${productName}`)
        .then(r => r.json())
        .then(reviews => {
            const container = modal.querySelector('#reviews-container');
            container.innerHTML = reviews.map(review => `
                <div style="padding: 1rem; border-bottom: 1px solid #ddd;">
                    <div style="font-weight: 600;">${review.author}</div>
                    <div style="color: #ffc107;">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
                    <p>${review.text}</p>
                </div>
            `).join('');
        });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Initialize: loadCustomerReviews();

// ===== FEATURE 7: Live Chat Support =====
function addLiveChat() {
    const chatHTML = `
        <div id="chat-widget" style="position: fixed; bottom: 20px; right: 20px; width: 350px; height: 450px; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; flex-direction: column; z-index: 999;">
            <div style="background: var(--primary); color: white; padding: 15px; border-radius: 12px 12px 0 0; display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0;">Chat with us</h3>
                <button onclick="document.getElementById('chat-widget').style.display='none'" style="background: none; border: none; color: white; font-size: 1.2rem; cursor: pointer;">×</button>
            </div>
            <div id="chat-messages" style="flex: 1; overflow-y: auto; padding: 15px; background: #f5f5f5;"></div>
            <div style="display: flex; gap: 5px; padding: 10px; border-top: 1px solid #ddd;">
                <input id="chat-input" type="text" placeholder="Type a message..." style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                <button onclick="sendChatMessage()" style="background: var(--primary); color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">Send</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatHTML);

    // Simple chat logic
    window.sendChatMessage = function() {
        const input = document.getElementById('chat-input');
        const messages = document.getElementById('chat-messages');
        const text = input.value.trim();

        if (!text) return;

        // User message
        messages.innerHTML += `
            <div style="margin: 10px 0; text-align: right;">
                <div style="background: var(--primary); color: white; padding: 8px 12px; border-radius: 8px; display: inline-block; max-width: 70%;">${text}</div>
            </div>
        `;

        input.value = '';
        messages.scrollTop = messages.scrollHeight;

        // Simulate bot response
        setTimeout(() => {
            messages.innerHTML += `
                <div style="margin: 10px 0;">
                    <div style="background: #e0e0e0; padding: 8px 12px; border-radius: 8px; display: inline-block; max-width: 70%;">Thanks for your message! A team member will respond shortly.</div>
                </div>
            `;
            messages.scrollTop = messages.scrollHeight;
        }, 500);
    };

    // Allow Enter to send
    document.getElementById('chat-input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') window.sendChatMessage();
    });
}

// Initialize: addLiveChat();

// ===== FEATURE 8: Referral Program =====
function addReferralProgram() {
    const referralModal = document.createElement('div');
    referralModal.id = 'referral-modal';
    referralModal.className = 'modal';
    referralModal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="document.getElementById('referral-modal').style.display='none'">&times;</button>
            <h2>Refer a Friend & Save 15%</h2>
            <p>Share your unique referral link and earn rewards!</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 1rem 0;">
                <input type="text" id="referral-link" value="https://your-domain.com?ref=${generateReferralCode()}" readonly style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            <button class="cta-primary" style="width: 100%;" onclick="copyReferralLink()">Copy Link</button>
            <p style="text-align: center; margin-top: 1rem; font-size: 0.85rem; color: #666;">You've referred <strong>0</strong> friends. Earn a $10 credit for each successful referral!</p>
        </div>
    `;
    document.body.appendChild(referralModal);

    // Add referral button to footer
    const referralBtn = document.createElement('button');
    referralBtn.textContent = '🎁 Refer & Earn';
    referralBtn.className = 'cta-secondary';
    referralBtn.style.cssText = 'position: fixed; bottom: 20px; left: 20px; z-index: 998;';
    referralBtn.addEventListener('click', () => {
        document.getElementById('referral-modal').style.display = 'flex';
    });
    document.body.appendChild(referralBtn);
}

function generateReferralCode() {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
}

function copyReferralLink() {
    const link = document.getElementById('referral-link');
    link.select();
    document.execCommand('copy');
    showNotification('Referral link copied!', 'success');
}

// Initialize: addReferralProgram();

// ===== FEATURE 9: Abandoned Cart Recovery =====
function setupAbandonedCartReminder() {
    // Check if cart has items and hasn't been updated
    setInterval(() => {
        if (cart.items.length > 0) {
            const lastUpdate = localStorage.getItem('cart-last-update');
            const now = Date.now();
            const fifteenMinutes = 15 * 60 * 1000;

            if (!lastUpdate || (now - parseInt(lastUpdate)) > fifteenMinutes) {
                showAbandonedCartNotification();
                localStorage.setItem('cart-abandoned-notified', 'true');
            }
        }

        localStorage.setItem('cart-last-update', Date.now());
    }, 60000); // Check every minute
}

function showAbandonedCartNotification() {
    const alreadyNotified = localStorage.getItem('cart-abandoned-notified');
    if (alreadyNotified) return;

    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 998;
        max-width: 300px;
    `;
    notification.innerHTML = `
        <h4 style="margin: 0 0 10px;">Don't forget your items!</h4>
        <p>You have ${cart.items.length} items in your cart. Complete your purchase now.</p>
        <button class="cta-primary" style="width: 100%;" onclick="showCartModal(); this.closest('div').remove();">View Cart</button>
    `;
    document.body.appendChild(notification);
}

// Initialize: setupAbandonedCartReminder();

// ===== FEATURE 10: Customer Loyalty Program =====
class LoyaltyProgram {
    constructor() {
        this.points = parseInt(localStorage.getItem('loyalty-points') || '0');
        this.tier = this.getTier();
    }

    getTier() {
        if (this.points >= 500) return 'Gold';
        if (this.points >= 250) return 'Silver';
        if (this.points >= 100) return 'Bronze';
        return 'Member';
    }

    addPoints(amount) {
        this.points += amount;
        localStorage.setItem('loyalty-points', this.points);
        this.tier = this.getTier();
    }

    redeemPoints(amount) {
        if (this.points >= amount) {
            this.points -= amount;
            localStorage.setItem('loyalty-points', this.points);
            return true;
        }
        return false;
    }

    showLoyaltyWidget() {
        const widget = document.createElement('div');
        widget.style.cssText = `
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
        `;
        widget.innerHTML = `
            <h3 style="margin: 0 0 10px;">Your Loyalty Status</h3>
            <div style="font-size: 2rem; font-weight: 700; margin-bottom: 10px;">${this.tier}</div>
            <p style="margin: 0;">Points: <strong>${this.points}</strong></p>
            <div style="margin-top: 10px;">
                <div style="background: rgba(255,255,255,0.3); height: 8px; border-radius: 4px; overflow: hidden;">
                    <div style="background: white; height: 100%; width: ${(this.points % 250) / 2.5}%;"></div>
                </div>
            </div>
        `;
        return widget;
    }
}

// Initialize: const loyalty = new LoyaltyProgram();
// Add to page: document.querySelector('.products').insertAdjacentElement('beforebegin', loyalty.showLoyaltyWidget());

console.log('Advanced features loaded. Choose which ones to activate in your script.js file.');
