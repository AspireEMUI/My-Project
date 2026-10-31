'use client';

export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Lush Shine</h1>
            <span className="tagline">Natural Skincare for Radiant Glow</span>
          </div>
          <nav className="nav" aria-label="Main navigation">
            <a href="#products">Shop</a>
            <a href="#new-arrivals">New Arrivals</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            className="cart-btn"
            aria-label="Shopping cart"
            onClick={onCartClick}
          >
            <span>🛒</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
