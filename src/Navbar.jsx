import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './App';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">ShopZone</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart 🛒</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/orders">Orders</Link>
          </li>

          {user ? (
            <>
              <li className="nav-item">
                <span className="nav-link">Hello, {user.name} 😎</span>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
