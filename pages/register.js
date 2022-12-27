import React from "react";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return <RegisterForm />;
}

export default Register;

Register.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
