'use client';

export default function CartModal({ cart, onClose }) {
  if (cart.items.length === 0) {
    return (
      <div className="modal open" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          <h2>Shopping Cart</h2>
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Your cart is empty</p>
            <p style={{ fontSize: '0.9rem' }}>Add some products to get started!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal open" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>Shopping Cart</h2>
        <p style={{ fontSize: '0.85rem', color: '#999', textAlign: 'center', marginBottom: '1rem' }}>
          💡 Use the minus button or × icon to remove items
        </p>

        <div id="cart-items-list">
          {cart.items.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
              />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Rs. {item.price.toFixed(0)}</p>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => cart.decreaseQuantity(item.id)}>−</button>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => cart.updateQuantity(item.id, e.target.value)}
                />
                <button onClick={() => cart.increaseQuantity(item.id)}>+</button>
              </div>
              <span style={{ fontWeight: '600' }}>Rs. {(item.price * item.quantity).toFixed(0)}</span>
              <button
                onClick={() => cart.removeItem(item.id)}
                style={{
                  background: 'none',
                  color: '#d4a5a5',
                  fontSize: '1.3rem',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 8px',
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>Rs. {cart.getTotal().toFixed(0)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>Rs. {cart.getTotal().toFixed(0)}</span>
          </div>
        </div>
        <button className="cta-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
