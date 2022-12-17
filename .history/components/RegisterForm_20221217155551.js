import React, { useState } from "react";
import { register } from "../libs/auth";
import saveUserProfile from "../libs/saveUserProfile";
import { toast } from "react-toastify";

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
    if(password !== confirmPassword) {
      r
    }
    try {
      await register(email, password, confirmPassword);
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
        toast.success("User details saved successfully");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      toast.success("User created successfully");
    } catch (e) {
      console.log("Error: ", e.code);
      switch (e.code) {
        case "auth/invalid-email":
          toast.error("Invalid email address");
          break;
        case "auth/email-already-in-use":
          toast.error("Email address already exists");
          break;
        case "auth/weak-password":
          toast.error("Password should not be less than 6 characters long");
          break;
        default:
          break;
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={registerInfo.firstName}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <input
        type="text"
        name="lastName"
        value={registerInfo.lastName}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <input
        type="email"
        name="email"
        value={registerInfo.email}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <input
        type="password"
        name="password"
        value={registerInfo.password}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <input
        type="password"
        name="confirmPassword"
        value={registerInfo.confirmPassword}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <input
        type="text"
        name="role"
        value={registerInfo.role}
        onChange={(e) => handleChange(e)}
        className="border border-2-black"
      />
      <button type="submit">register</button>
    </form>
  );
}

export default RegisterForm;
