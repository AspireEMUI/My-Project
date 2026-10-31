'use client';

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      quote: "My skin has never looked better! The Vitamin C serum gives me that natural glow I've been looking for. Highly recommend Lush Shine!",
      name: 'Priya K.',
      status: 'Verified Buyer',
      avatar: '✨',
    },
    {
      stars: 5,
      quote: 'Finally found a brand with truly natural ingredients that actually work! My skin feels so radiant and healthy. Love the whole collection.',
      name: 'Anjali M.',
      status: 'Verified Buyer',
      avatar: '💚',
    },
    {
      stars: 5,
      quote: "The Anti-Acne Face Wash cleared my skin in just two weeks! Best skincare purchase I've made. Lush Shine is worth every penny!",
      name: 'Ravi S.',
      status: 'Verified Buyer',
      avatar: '🌟',
    },
  ];

  return (
    <section id="reviews" className="testimonials">
      <div className="container">
        <h2>Loved by Our Customers</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <article key={idx} className="testimonial">
              <div className="stars">{'★'.repeat(testimonial.stars)}</div>
              <p className="quote">{testimonial.quote}</p>
              <div className="reviewer">
                <div className="avatar">{testimonial.avatar}</div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.status}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
