'use client';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Shop</h4>
            <ul>
              <li><a href="#products">All Products</a></li>
              <li><a href="#">Bestsellers</a></li>
              <li><a href="#new-arrivals">New Arrivals</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-contact">
            <p>
              <span className="contact-icon address">📍</span>
              <strong>Address:</strong> Suit#9/B-1 Ground Floor Nasir Mansion 2-Railway Line Road Shoba Bazar Peshawar City
            </p>
            <p>
              <span className="contact-icon phone">📞</span>
              <strong>Phone:</strong> +92-91-2210646
            </p>
            <p>
              <span className="contact-icon whatsapp">💬</span>
              <strong>WhatsApp:</strong> +92-335-9870008
            </p>
            <p>
              <span className="contact-icon email">✉️</span>
              <strong>Email:</strong> <a href="mailto:info@lushshine.com">info@lushshine.com</a>
            </p>
          </div>
          <p>&copy; 2026 Lush Shine. All rights reserved.</p>
          <div className="social">
            <a href="https://instagram.com/LushShine" aria-label="Instagram">📱</a>
            <a href="https://facebook.com/LushShine" aria-label="Facebook">👍</a>
            <a href="https://tiktok.com/@LushShine" aria-label="TikTok">🎵</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
