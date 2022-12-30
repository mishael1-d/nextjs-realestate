import React, { useState } from "react";
import { login } from "../libs/auth";
import Link from "next/link";
import { toast } from "react-toastify";
import FormBackground from "./common/FormBackground";
import FormFields from "./common/FormFields";
import Buttons from "./common/Buttons";

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
      toast.success("User logged in successfully");
    } catch (e) {
      console.log(e);
      toast.error(e.code);
    }
  };
  return (
    <div className="loginform flex w-full h-screen overflow-y-hidden">
      <FormBackground />
      <div className="basis-1/2 h-full grid place-items-center">
        <div>
          <h2 className="text-3xl text-center font-bold mb-4 font-Roboto">
            Welcome Back To
          </h2>
          <Link href="/">
            <h3 className="text-xl text-center font-bold font-Lato mb-4 cursor-pointer">
              Real.Estate
            </h3>
          </Link>

          <form onSubmit={handleSubmit} className="">
            <FormFields
              type="email"
              value={loginInfo.email}
              label="Email Address"
              name="email"
              onChangeFunction={handleChange}
            />
            <FormFields
              type="password"
              name="password"
              label="Password"
              value={loginInfo.password}
              onChangeFunction={handleChange}
            />
            {/* <button
              type="submit"
              className="bg-[#263C41] text-white py-2 px-4 rounded-md"
            >
              Login
            </button> */}
            <Buttons label="Login" variant="primary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
