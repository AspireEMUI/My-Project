'use client';

export default function Hero() {
  const handleShopClick = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=80)',
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">✨ Premium Natural Skincare ✨</div>
        <h1 className="hero-title">Lush Shine</h1>
        <h2 className="hero-subtitle">Your Natural Glow Awaits</h2>
        <p className="hero-description">
          Premium skincare products crafted with nature's best ingredients for radiant, confident beauty
        </p>
        <button className="cta-primary hero-btn" onClick={handleShopClick}>
          Shop Collection
        </button>
      </div>
    </section>
  );
}
