import React, { useState } from "react";
import { register, signInWithGoogle } from "../libs/auth";
import saveUserProfile from "../libs/saveUserProfile";
import { toast } from "react-toastify";
import FormBackground from "./common/FormBackground";
import FormFields from "./common/FormFields";
import FormSelect from "./common/FormSelect";
import Buttons from "./common/Buttons";
import FormHeader from "./common/FormHeader";
import SocialMediaButtons from "./common/SocialMediaButtons";
import { useRouter } from "next/router";
import Link from "next/link";
import useStateContext from "../customHooks/useStateContext";

function RegisterForm() {
  const [registerInfo, setregisterInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Realtor",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { setUser } = useStateContext();

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
    setLoading(true);
    if (password !== confirmPassword) {
      setLoading(false);
      return toast.error("Passwords do not match");
    }
    await register(email, password)
      .then(async (res) => {
        toast.success("User created successfully");
        setUser({
          accessToken: res.user.accessToken,
          userRole: role,
          userDetails: {
            firstName,
            lastName,
            email,
            photoUrl: res.user.photoURL,
            uid: res.user.uid,
            phoneNumber: res.user.phoneNumber,
            isVerified: res.user.emailVerified,
          },
        });
        // add this user to the users collection on the firestore database
        await saveUserProfile(firstName, lastName, email, password, role)
          .then(() => {
            toast.success("User details saved successfully");
            router.push("/");
            setLoading(false);
          })
          .catch((e) => {
            console.error("Error adding document: ", e);
            toast.error("Unable to save user details");
            setLoading(false);
          });
        setregisterInfo({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          role: "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // toast.error("Error creating user");
        setLoading(false);
        switch (err.code) {
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
      });
  };
  return (
    <div className="loginform w-[90%] md:w-[500px] mx-auto h-[89vh] flex flex-col justify-center items-center relative">
      <FormHeader title="Hey  Welcome to" styledTitle="Real.Estate Hub" />
      <div className="mb-2 w-full text-center">
        <p>Continue with:</p>
      </div>
      <div className="w-full bg-[#263C41] text-white flex p-2 justify-center items-center space-x-6 text-xl mb-4">
        <SocialMediaButtons name="Facebook" />
        <SocialMediaButtons name="Google" clickHandler={signInWithGoogle} />
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-full h-[1px] bg-slate-500" />
        <p className="mx-4">or</p>
        <div className="w-full h-[1px] bg-slate-500" />
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
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
        <Buttons
          label="Register"
          variant="primary"
          type="submit"
          size="large"
          loading={loading}
          style="col-span-2"
        />
        <div className="mt-4 flex justify-end w-full col-span-2">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-[#263C41] font-medium">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
