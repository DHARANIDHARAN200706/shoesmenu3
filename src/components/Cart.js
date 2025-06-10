import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Whenever cart changes, update total
    const newTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, [cartItems]);

  const addItem = () => {
    const newItem = { id: cartItems.length + 1, name: 'New Shoe', price: 2000 };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={addItem}>Add Shoe</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <p><b>Total:</b> ₹{total}</p>
    </div>
  );
};

export default Cart;
