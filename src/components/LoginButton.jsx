import React, { useState } from "react";

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLoginButton() {
    setIsLoggedIn((prev) => !prev);
  }

  return (
    <button
      onClick={toggleLoginButton}
      className={`
        rounded-lg
        border
        px-5
        py-2
        text-sm
        font-bold
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        ${
          isLoggedIn
            ? `
              border-red-500
              bg-red-500
              text-white
              hover:bg-red-600
            `
            : `
              border-[#fc8019]
              bg-[#fc8019]
              text-white
              hover:bg-[#e46f12]
            `
        }
      `}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

export default LoginButton;
