import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { forgotPasswordAuth } from "../libs/auth";
import Buttons from "./common/Buttons";
import FormFields from "./common/FormFields";
import FormHeader from "./common/FormHeader";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await forgotPasswordAuth(email)
      .then((res) => {
        setLoading(false);
        toast.success("Email sent successfully");
        router.push("/login");
      })
      .catch((err) => {
        setLoading(false);
        switch (err.code) {
          case "auth/user-not-found":
            toast.error("User with this email doesn't exist");
            break;
          default:
            break;
        }
      });
  };
  return (
    <div className="loginform w-[90%] md:w-[500px] mx-auto h-[89vh] flex flex-col justify-center items-center relative">
      <FormHeader title="Recover your Password" styledTitle="Here" />
      <form onSubmit={handleSubmit} className="grid grid-cols-1">
        <FormFields
          type="email"
          value={email}
          label="Email Address"
          name="email"
          onChangeFunction={(e) => setEmail(e.target.value)}
        />
        <Buttons
          label="Submit"
          variant="primary"
          type="submit"
          size="large"
          loading={loading}
          style="col-span-2"
        />
        <div className="mt-4 flex justify-end w-full col-span-2">
          <p>
            Remember your password?{" "}
            <Link href="/login" className="text-[#263C41] font-medium">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
