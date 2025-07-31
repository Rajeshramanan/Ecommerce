import React, { useState } from 'react';
import { useAuth } from './App';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/');
    } else {
      alert('Invalid username or password ❌');
    }
  };

  return (
    <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
      <h2 className="mb-3 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" className="form-control mb-3" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" className="form-control mb-3" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-primary w-100">Login</button>
      </form>
      <div className="mt-3 text-center">
        <span>Don't have an account? </span>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;

