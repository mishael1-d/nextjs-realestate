import React, { useState } from "react";
import { register } from "../libs/auth";
import saveUserProfile from "../libs/saveUserProfile";

function RegisterForm() {
  const [registerInfo, setregisterInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setregisterInfo({ ...registerInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    const { firstName, lastName, email, password, confirmPassword, role } =
      registerInfo;
    e.preventDefault();
    try {
      await register(email, password);
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
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={registerInfo.firstName}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="lastName"
        value={registerInfo.lastName}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="email"
        name="email"
        value={registerInfo.email}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="password"
        name="password"
        value={registerInfo.password}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="password"
        name="confirmPassword"
        value={registerInfo.confirmPassword}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="role"
        value={registerInfo.role}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">register</button>
    </form>
  );
}

export default RegisterForm;
