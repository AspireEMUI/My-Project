'use client';

export default function TrustSignals() {
  const signals = [
    {
      icon: '🌿',
      title: '100% Natural',
      description: 'Made with pure, natural ingredients and botanical extracts',
    },
    {
      icon: '✨',
      title: 'Effective Results',
      description: 'Thoughtfully formulated to deliver visible, real results',
    },
    {
      icon: '💚',
      title: 'Feel-Good Care',
      description: 'Luxurious skincare that makes you feel confident and radiant',
    },
    {
      icon: '🚚',
      title: 'Fast Shipping',
      description: 'Orders ship quickly. Returns within 30 days',
    },
  ];

  return (
    <section className="trust-signals">
      <div className="container">
        <div className="signals-grid">
          {signals.map((signal, idx) => (
            <div key={idx} className="signal">
              <div className="signal-icon">{signal.icon}</div>
              <h3>{signal.title}</h3>
              <p>{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
