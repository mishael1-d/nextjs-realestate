import React, { useState } from "react";
import { login } from "../libs/auth";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Tabpanel from "./Tabpanel";
// import 'react-owl-carousel2/style.css'; //Allows for server-side rendering.
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

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
    <div className="flex w-full h-screen">
      <OwlCarousel autoplay loop className="!w-1/2" items={1} nav={false}>
        <div className="w-full h-screen grid place-items-center bg-[url(/assets/sky.jpg)] bg-center bg-cover">
          Background
        </div>
        <div className="w-full h-screen grid place-items-center bg-[url(/assets/hero-bg.png)] bg-center bg-cover">
          Background
        </div>
      </OwlCarousel>
      <div className="basis-1/2 h-full grid place-items-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
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
      </div>
    </div>
  );
}

export default LoginForm;
