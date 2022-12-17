import React, { useState } from "react";
import { login } from "../libs/auth";

function LoginForm() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    const { email, password } = loginInfo;
    e.preventDefault();
    try {
      await login(email, password);
      console.log("User logged in successfully");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={loginInfo.email}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <input
        type="password"
        name="password"
        value={loginInfo.password}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
