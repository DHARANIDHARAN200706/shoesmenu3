import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList.js';
import Cart from '../components/Cart.js';
import './App.css'; 

function App() {
  const [visitCount, setVisitCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const visits = sessionStorage.getItem('visitCount');
    const newCount = visits ? parseInt(visits) + 1 : 1;
    sessionStorage.setItem('visitCount', newCount);
    setVisitCount(newCount);

    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">👟 ShoeVerse</div>
        <nav className="nav">
          <a href="#products">Products</a>
          <a href="#cart">Cart</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Step Into Style</h1>
        <p>Discover the latest trends in footwear with unbeatable prices and free delivery!</p>
        <button className="cta-btn">Shop Now</button>
      </section>

      <main>
        <p className="visit-count">You've visited us {visitCount} time(s) this session.</p>
        {isLoading ? (
          <p className="loading">Loading products...</p>
        ) : (
          <>
            <section id="products">
              <ProductList />
            </section>
            <section id="cart">
              <Cart />
            </section>
          </>
        )}
      </main>

      <footer className="footer" id="contact">
        <p>© 2025 ShoeVerse. All rights reserved.</p>
        <p>Follow us on 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a> & 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
