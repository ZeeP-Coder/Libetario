import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-hero">
          <div className="hero-icon-wrapper">
            <svg className="hero-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1>Welcome to Libetario</h1>
          <p>Your personal authentication and management system</p>
        </div>

        <div className="home-cards">
          <div className="auth-card login-card">
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </div>
            <h2>Have an Account?</h2>
            <p>Sign in to access your dashboard and profile</p>
            <button
              className="auth-button login-btn"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          </div>

          <div className="auth-card register-card">
            <div className="card-icon-wrapper">
              <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h2>New Here?</h2>
            <p>Create a new account to get started</p>
            <button
              className="auth-button register-btn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <footer className="home-footer">
        <p>&copy; 2026 Libetario. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
