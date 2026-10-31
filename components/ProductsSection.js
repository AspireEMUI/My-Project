'use client';

export default function ProductsSection({ products, onProductClick, onAddToCart }) {
  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <article
              key={product.id}
              className="product-card"
              onClick={() => onProductClick(product)}
            >
              <div className="product-image">
                <img
                  src={product.mainImage}
                  alt={`${product.name} - ${product.category}`}
                  loading="lazy"
                />
                {product.badge && <span className="badge">{product.badge}</span>}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <div className="rating">
                  <span className="stars">
                    {'★'.repeat(product.rating.stars)}
                    {'☆'.repeat(5 - product.rating.stars)}
                  </span>
                  <span className="review-count">({product.rating.count} reviews)</span>
                </div>
                <p className="price">Rs. {product.price.toLocaleString()}</p>
                <p className="description">{product.description}</p>
                <button
                  className="cta-secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
