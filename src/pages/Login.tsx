import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-box card p-4 shadow-lg border-0 rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Login</h2>
          <p className="text-muted small">Access your account</p>
        </div>

        <form>
          <div className="input-box mb-3">
            <label className="form-label fw-semibold small">Email</label>
            <input 
              type="email" 
              className="form-control form-control-lg bg-light border-0 rounded-3" 
              placeholder="Enter your email" 
              required 
            />
          </div>

          <div className="input-box mb-4">
            <label className="form-label fw-semibold small">Password</label>
            <input 
              type="password" 
              className="form-control form-control-lg bg-light border-0 rounded-3" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          <button type="submit" className="login-btn btn btn-primary btn-lg w-100 fw-bold py-3 rounded-3 shadow-sm mb-3">
            Login
          </button>

          <p className="register-link text-center text-muted small">
            Don't have an account? <a href="#" className="text-primary text-decoration-none fw-semibold">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;