import React, { useState } from "react";
import { login, signInWithFacebook, signInWithGoogle } from "../libs/auth";
import Link from "next/link";
import { toast } from "react-toastify";
import FormFields from "./common/FormFields";
import Buttons from "./common/Buttons";
import FormHeader from "./common/FormHeader";
import SocialMediaButtons from "./common/SocialMediaButtons";
import getUserProfile from "../libs/getUserProfile";
import { useRouter } from "next/router";

function LoginForm() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    const { email, password } = loginInfo;
    e.preventDefault();
    setLoading(true);
    await login(email, password)
      .then((res) => {
        getUserProfile(email);
        toast.success("User logged in successfully");
        setLoading(false);
        router.push("/");
      })
      .catch((e) => {
        setLoading(false);
        switch (e.code) {
          case "auth/user-not-found":
            toast.error("User doesn't exist");
            break;
          case "auth/internal-error":
            toast.error("Email or password is incorrect");
            break;
          case "auth/invalid-email":
            toast.error("Email address is invalid");
            break;
          default:
            break;
        }
      });
  };
  return (
    <div className="loginform w-[90%] md:w-[500px] mx-auto h-[89vh] flex flex-col justify-center items-center relative">
      <FormHeader title="Welcome back to" styledTitle="Real.Estate Hub" />
      <div className="mb-2 w-full text-center">
        <p>Continue with:</p>
      </div>
      <div className="w-full bg-[#263C41] text-white flex p-2 justify-center items-center space-x-6 text-xl mb-4">
        <SocialMediaButtons name="Facebook" clickHandler={signInWithFacebook} />
        <SocialMediaButtons name="Google" clickHandler={signInWithGoogle} />
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-full h-[1px] bg-slate-500" />
        <p className="mx-4">or</p>
        <div className="w-full h-[1px] bg-slate-500" />
      </div>
      <form onSubmit={handleSubmit} className="w-full mt-4">
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
        <Buttons
          label="Login"
          variant="primary"
          type="submit"
          size="large"
          loading={loading}
        />
        <div className="mt-4 flex justify-between items-center">
          <Link href="/forgot" className="text-[#263C41] font-medium">
            Forgot Password?
          </Link>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#263C41] font-medium">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
