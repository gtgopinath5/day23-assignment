
import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.text} - Price: {item.price} {/* Added price */}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

