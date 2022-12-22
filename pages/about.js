import React from "react";
import Footer from "../components/Footer";
import SharedNavbar from "../components/SharedNavbar";

function About() {
  return <div>about</div>;
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      <SharedNavbar />
      {page}
      <Footer />
    </>
  );
};
