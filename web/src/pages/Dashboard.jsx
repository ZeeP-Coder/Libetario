import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const name = localStorage.getItem("userName") || "User";
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="dashboard-navbar">
        <div className="navbar-brand">
          <span className="navbar-brand-icon">📊</span>
          <h1 className="dashboard-navbar-title">Libetario Dashboard</h1>
        </div>
        <div className="dashboard-navbar-menu">
          <button
            className="profile-link-button"
            onClick={() => navigate("/profile")}
          >
            👤 Profile
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Welcome Section */}
        <div className="dashboard-welcome">
          <h1>Welcome, {userName}! 👋</h1>
          <p>You are successfully logged in to your account.</p>
          <span className="dashboard-status">✅ Active</span>
        </div>

        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <div className="dashboard-card-icon">👤</div>
            <h3>Profile</h3>
            <p>View and edit your personal profile information and settings.</p>
            <button
              className="dashboard-card-button"
              onClick={() => navigate("/profile")}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="dashboard-footer">
        <p>&copy; 2026 Libetario. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Dashboard;
