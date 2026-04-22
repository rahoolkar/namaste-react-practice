import React, { useState } from "react";

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggeLoginButton() {
    if (isLoggedIn == false) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  return (
    <button
      className={`auth-btn ${isLoggedIn ? "logout" : "login"}`}
      onClick={toggeLoginButton}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

export default LoginButton;
