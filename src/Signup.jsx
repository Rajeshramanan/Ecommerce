import React, { useState } from 'react';
import { useAuth } from './App';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const success = signup(username, password);
    if (success) {
      navigate('/');
    } else {
      alert('Username already exists ❗ Try another one.');
    }
  };

  console.log('hi')

  return (
    <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
      <h2 className="mb-3 text-center">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" className="form-control mb-3" placeholder="Create Username" onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" className="form-control mb-3" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-success w-100">Sign Up</button>
      </form>
      <div className="mt-3 text-center">
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Signup;


