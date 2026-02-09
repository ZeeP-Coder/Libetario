const API_URL = "http://localhost:8080/api";

export const register = async (data) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Registration failed");
  }

  const user = await res.json();
  return user;
};

export const login = async (data) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  const user = await res.json();
  
  // Save user info to localStorage
  if (user.userFirstName && user.userLastName) {
    localStorage.setItem(
      "userName",
      `${user.userFirstName} ${user.userLastName}`
    );
  } else if (user.userFirstName) {
    localStorage.setItem("userName", user.userFirstName);
  }

  // Save email
  if (user.userEmail) {
    localStorage.setItem("userEmail", user.userEmail);
  }

  // Return a token (you can also use the user ID or a JWT token)
  return user.userID || "token";
};
