import React from "react";
// import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
// import SharedNavbar from "../components/SharedNavbar";

function Login() {
  return <LoginForm />;
}

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
