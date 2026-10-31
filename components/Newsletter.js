'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setMessage('Thanks for subscribing! Check your email for a special offer.');
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3500);
    }, 1000);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <h2>Get Early Access & Exclusive Offers</h2>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="cta-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        <p className="privacy">We respect your privacy. Unsubscribe anytime.</p>
        {message && (
          <p style={{ marginTop: '1rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
