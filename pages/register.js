import React from "react";
import RegisterForm from "../components/RegisterForm";
import SharedNavbar from "../components/SharedNavbar";

function Register() {
  return <RegisterForm />;
}

export default Register;

Register.getLayout = function PageLayout(page) {
  return (
    <>
      <SharedNavbar />
      {page}
    </>
  );
};
