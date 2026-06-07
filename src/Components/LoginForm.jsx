import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>{isLoggedIn ? "Zalogowany" : "Wylogowany"}</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Wpisz hasło"
      />

      <br /><br />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Ukryj hasło" : "Pokaż hasło"}
      </button>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Wyloguj" : "Zaloguj"}
      </button>
    </div>
  );
}