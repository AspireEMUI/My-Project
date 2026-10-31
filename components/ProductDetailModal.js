'use client';

import { useState } from 'react';

export default function ProductDetailModal({ product, onClose, onAddToCart }) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const images = product.additionalImages || [product.mainImage];

  const handlePrev = () => {
    setGalleryIndex(Math.max(0, galleryIndex - 1));
  };

  const handleNext = () => {
    setGalleryIndex(Math.min(images.length - 1, galleryIndex + 1));
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  const handleEnquire = () => {
    const subject = `Enquiry: ${product.name}`;
    const mailtoLink = `mailto:info@lushshine.com?subject=${encodeURIComponent(subject)}&body=I am interested in ${encodeURIComponent(product.name)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="product-detail-modal open" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="product-detail-content">
        <button className="product-detail-close" onClick={onClose}>
          ×
        </button>

        <div className="product-detail-body">
          {/* Gallery */}
          <div className="product-detail-gallery">
            <div className="gallery-main">
              <img src={images[galleryIndex]} alt={product.name} loading="lazy" />
              <span className="gallery-image-counter">
                {galleryIndex + 1} / {images.length}
              </span>
            </div>

            <div className="gallery-thumbnails">
              <button
                className="gallery-nav-btn gallery-prev"
                onClick={handlePrev}
                disabled={galleryIndex === 0}
                aria-label="Previous image"
              >
                ←
              </button>
              <div className="gallery-thumbs-container">
                <div className="gallery-thumbnails-list">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`gallery-thumbnail ${idx === galleryIndex ? 'active' : ''}`}
                      onClick={() => setGalleryIndex(idx)}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
              <button
                className="gallery-nav-btn gallery-next"
                onClick={handleNext}
                disabled={galleryIndex === images.length - 1}
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-detail-info">
            <div className="product-detail-header">
              <h2>{product.name}</h2>
              <p className="modal-category">{product.category}</p>
            </div>

            <div className="product-detail-rating">
              <span className="modal-stars">
                {'★'.repeat(product.rating.stars)}
                {'☆'.repeat(5 - product.rating.stars)}
              </span>
              <span className="modal-review-count">({product.rating.count} reviews)</span>
            </div>

            <div className="product-detail-price">
              <p className="modal-price">Rs. {product.price.toLocaleString()}</p>
            </div>

            <div className="product-detail-description">
              <p>{product.description}</p>
            </div>

            {product.features && product.features.length > 0 && (
              <div className="product-detail-features">
                <h4>Key Features</h4>
                <ul>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className="product-detail-sizes">
                <h4>Available Sizes</h4>
                <div className="sizes-list">
                  {product.sizes.map((size) => (
                    <button key={size} className="size-option">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="product-detail-actions">
              <button className="cta-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="cta-secondary" onClick={handleEnquire}>
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
