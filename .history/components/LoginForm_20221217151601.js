import React, { useState } from "react";
import { Login } from "../libs/auth";
import saveUserProfile from "../libs/saveUserProfile";

function LoginForm() {
  const [LoginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginInfo({ ...LoginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    const { firstName, lastName, email, password, confirmPassword, role } =
      LoginInfo;
    e.preventDefault();
    try {
      await Login(email, password);
      try {
        // add this user to the users collection on the firestore database
        await saveUserProfile(
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          role
        );
        console.log("User details saved successfully");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      console.log("User created successfully");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={LoginInfo.firstName}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <input
        type="text"
        name="lastName"
        value={LoginInfo.lastName}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <input
        type="email"
        name="email"
        value={LoginInfo.email}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <input
        type="password"
        name="password"
        value={LoginInfo.password}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <input
        type="password"
        name="confirmPassword"
        value={LoginInfo.confirmPassword}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <input
        type="text"
        name="role"
        value={LoginInfo.role}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
