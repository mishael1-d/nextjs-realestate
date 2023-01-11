import React from "react";
import SharedNavbar from "../components/SharedNavbar";
import LoginForm from "../components/LoginForm";

function Login() {
  return <LoginForm />;
}

export default Login;

Login.getLayout = function PageLayout(page) {
  return (
    <>
      <SharedNavbar />
      {page}
    </>
  );
};
