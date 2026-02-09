import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    // Get user data from localStorage (set during login)
    const userName = localStorage.getItem("userName") || "User";
    const userEmail = localStorage.getItem("userEmail") || "";
    const names = userName.split(" ");

    setUser({
      firstName: names[0] || "",
      lastName: names[1] || "",
      email: userEmail,
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <div className="profile-container">
      {/* Navigation Bar */}
      <nav className="profile-navbar">
        <div className="navbar-brand">
          <span className="navbar-brand-icon">👤</span>
          <h1 className="profile-navbar-title">My Profile</h1>
        </div>
        <div className="navbar-menu">
          <button
            className="nav-button"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
          <button className="nav-button logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="profile-content">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">{user.firstName?.charAt(0) || "U"}</div>
            <div className="profile-info">
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-item">
              <label>First Name</label>
              <p>{user.firstName}</p>
            </div>
            <div className="detail-item">
              <label>Last Name</label>
              <p>{user.lastName}</p>
            </div>
            <div className="detail-item">
              <label>Email Address</label>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="profile-footer">
        <p>&copy; 2026 Libetario. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Profile;
