import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-hero">
          <div className="hero-icon">📊</div>
          <h1>Welcome to Libetario</h1>
          <p>Your personal authentication and management system</p>
        </div>

        <div className="home-cards">
          <div className="auth-card login-card">
            <div className="card-icon">🔑</div>
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
            <div className="card-icon">✨</div>
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

        <div className="home-features">
          <h3>Features</h3>
          <ul>
            <li>🔐 Secure Authentication</li>
            <li>👤 User Profile Management</li>
            <li>📊 Dashboard Analytics</li>
            <li>⚡ Fast & Reliable</li>
          </ul>
        </div>
      </div>

      <footer className="home-footer">
        <p>&copy; 2026 Libetario. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
