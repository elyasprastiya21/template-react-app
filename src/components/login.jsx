import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
    </>
  );
}

export default Login;
