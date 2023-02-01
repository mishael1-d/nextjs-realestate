import React from "react";
import SharedNavbar from "../components/SharedNavbar";
import ForgotPassword from "../components/ForgotPassword";

function Forgot() {
  return <ForgotPassword />;
}

export default Forgot;

Forgot.getLayout = function PageLayout(page) {
  return (
    <>
      <SharedNavbar />
      {page}
    </>
  );
};
