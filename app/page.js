'use client';

import { useState, useEffect } from 'react';
import { productsDatabase } from '@/lib/products';
import { useCart } from '@/hooks/useCart';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import ProductsSection from '@/components/ProductsSection';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ProductDetailModal from '@/components/ProductDetailModal';
import CartModal from '@/components/CartModal';

export default function Home() {
  const cart = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    cart.addItem(product);
    showNotification('Added to cart!', 'success');
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <>
      <Header
        cartCount={cart.getCount()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        <Hero />
        <TrustSignals />
        <ProductsSection
          products={productsDatabase}
          onProductClick={handleProductClick}
          onAddToCart={handleAddToCart}
        />

        <section id="new-arrivals" className="products" style={{ backgroundColor: 'var(--bg-light)' }}>
          <div className="container">
            <h2>✨ New Arrivals</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: 'var(--spacing-2xl)' }}>
              Discover our latest premium skincare innovations
            </p>
            <ProductsSection
              products={productsDatabase.filter(p => p.isNew)}
              onProductClick={handleProductClick}
              onAddToCart={handleAddToCart}
            />
          </div>
        </section>

        <Testimonials />
        <About />
        <Newsletter />
      </main>

      <Footer />

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {isCartOpen && (
        <CartModal
          cart={cart}
          onClose={() => setIsCartOpen(false)}
        />
      )}

      {notification && (
        <div className={`notification notification--${notification.type} show`}>
          {notification.message}
        </div>
      )}
    </>
  );
}
