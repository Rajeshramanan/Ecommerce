import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

// Auth Context Setup
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Private Route Wrapper
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

// Layout Component
const Layout = ({ cartItems }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<PrivateRoute><Cart cartItems={cartItems} /></PrivateRoute>} />
        </Routes>
      </div>
    </>
  );
};

//App Component
function App() {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const login = (username, password) => {
    const result = registeredUsers[username] && registeredUsers[username] === password;
    if (result) {
      setUser({ name: username });
    }
    console.log("📋 Current Registered Users:", registeredUsers);
    return result;
  };

  const signup = (username, password) => {
    setRegisteredUsers(prev => {
      const updated = { ...prev, [username]: password };
      console.log("📋 Current Registered Users:", updated);
      return updated;
    });
    setUser({ name: username });
    return true;
  };

  const logout = () => setUser(null);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, addToCart }}>
      <Router>
        <Layout cartItems={cartItems} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
