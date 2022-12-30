import React, { useState } from "react";
import { register } from "../libs/auth";
import saveUserProfile from "../libs/saveUserProfile";
import { toast } from "react-toastify";
import FormBackground from "./common/FormBackground";
import FormFields from "./common/FormFields";
import FormSelect from "./common/FormSelect";
import Buttons from "./common/Buttons";

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

  const handleSelectChange = (value) => {
    setregisterInfo({ ...registerInfo, role: value });
  };

  const handleSubmit = async (e) => {
    const { firstName, lastName, email, password, confirmPassword, role } =
      registerInfo;
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
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
      setregisterInfo({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      });
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
    <div className="loginform flex w-full h-screen overflow-y-hidden">
      <FormBackground />
      <div className="md:basis-1/2 h-full grid place-items-center">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 px-8">
          <FormFields
            type="text"
            value={registerInfo.firstName}
            label="First Name"
            name="firstName"
            onChangeFunction={handleChange}
          />
          <FormFields
            type="text"
            value={registerInfo.lastName}
            label="Last Name"
            name="lastName"
            onChangeFunction={handleChange}
          />
          <FormFields
            type="email"
            value={registerInfo.email}
            label="Email Address"
            name="email"
            onChangeFunction={handleChange}
          />
          <FormFields
            type="password"
            name="password"
            label="Password"
            value={registerInfo.password}
            onChangeFunction={handleChange}
          />
          <FormFields
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={registerInfo.confirmPassword}
            onChangeFunction={handleChange}
          />
          <FormSelect
            label="Type of user"
            options={["Realtor", "Property Owner", "Customer"]}
            onSelectChange={handleSelectChange}
          />
          <Buttons label="Register" variant="primary" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
