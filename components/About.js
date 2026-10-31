'use client';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div>
            <h2>Our Story</h2>
            <p>
              Lush Shine was created to bring high-quality, feel-good beauty products into everyday self-care. We focus on thoughtfully crafted products that combine effective ingredients with a luxurious experience, helping you feel confident and radiant.
            </p>
            <p>
              Our goal is simple: beautiful products, honest care, and a little more shine in every day. Each product is carefully formulated with natural ingredients to deliver real results without compromise.
            </p>
            <p>
              Join the Lush Shine community and discover skincare that makes you feel as good as you look.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80"
              alt="Lush Shine natural skincare products"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
