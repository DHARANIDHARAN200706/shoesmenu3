import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setShoes([
        { id: 1, name: 'Nike Air', price: 2500 },
        { id: 2, name: 'Adidas Ultra', price: 3000 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Shoe Products</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {shoes.map((shoe) => (
            <li key={shoe.id}>{shoe.name} - ₹{shoe.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
