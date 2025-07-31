import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './App';

function Home() {
  const { addToCart } = useAuth();
const navigate = useNavigate();

const handleAddToCart = (product) => {
  addToCart(product);
  navigate('/cart');
};

  const [products, setProducts] = useState([]);

 useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error('Error fetching products:', err));
}, []);


  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">🛒 Featured Products</h2>

      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products..."
          />
        </div>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card h-100 shadow">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Category: {product.category}</h6>
                <p className="card-text">Price: ₹{(product.price * 85).toFixed(2)}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
