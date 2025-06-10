import React from 'react';
import ProductList from '../components/ProductList.js';
import Cart from '../components/Cart.js';

function App() {
  return (
    <div className="App">
      <h1>Shoe Online Store</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
