import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your credentials to continue</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input 
              id="email"
              type="email" 
              placeholder="name@example.com" 
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

          <p className="register-text">
            Don't have an account? <a href="#">Create one</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;