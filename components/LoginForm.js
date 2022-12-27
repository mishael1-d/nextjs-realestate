import React, { useState } from "react";
import { login } from "../libs/auth";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Tabpanel from "./Tabpanel";
import Link from "next/link";

import { TbUser } from "react-icons/tb";
import { toast } from "react-toastify";
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
      toast.success("User logged in successfully");
    } catch (e) {
      console.log(e);
      toast.error(e.code);
    }
  };
  return (
    <div className="loginform flex w-full h-screen overflow-y-hidden">
      <OwlCarousel autoplay loop className="!w-1/2" items={1} nav={false}>
        <div className="w-full h-screen grid place-items-center bg-[url(/assets/login-bg1.jpg)] bg-center bg-cover text-white">
          <div className="bg-white bg-opacity-40 text-black p-10 w-[80%] lg:w-1/2 rounded-lg shadow-lg backdrop-blur-lg drop-shadow-lg">
            <em>
              Real estate cannot be lost or stolen, nor can it be carried away.
              Purchased with common sense, paid for in full, and managed with
              reasonable care, it is about the safest investment in the world.
            </em>
            <strong className="text-right">-Franklin D. Roosevelt</strong>
          </div>
        </div>
        <div className="w-full h-screen grid place-items-center bg-[url(/assets/login-bg2.jpg)] bg-center bg-cover">
          <div className="bg-white opacity-60 text-black p-10 w-[80%] lg:w-1/2 rounded-lg shadow-lg">
            <em>
              If you don&apos;t control your environment somebody else will.
            </em>
            <strong>-Grant Cardone</strong>
          </div>
        </div>
      </OwlCarousel>
      <div className="basis-1/2 h-full grid place-items-center">
        <div>
          <div>
            <div className="cursor-pointer">
              <h2 className="text-3xl text-center font-bold mb-4 font-Roboto">
                Welcome Back To
              </h2>
              <Link href="/">
                <h3 className="text-xl text-center font-bold font-Lato mb-4">
                  Real.Estate
                </h3>
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex items-center relative">
              <input
                type="email"
                name="email"
                value={loginInfo.email}
                onChange={(e) => handleChange(e)}
                className="w-full  border border-2-black p-2 !bg-white outline-none rounded-md"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={loginInfo.password}
                onChange={(e) => handleChange(e)}
                className="w-full  border border-2-black p-2 !bg-white outline-none rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-[#263C41] text-white py-2 px-4 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
