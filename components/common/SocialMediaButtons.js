import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

function SocialMediaButtons({ name, clickHandler }) {
  return (
    <>
      {name === "Facebook" ? (
        <span className="cursor-pointer" onClick={clickHandler}>
          <BsFacebook />
        </span>
      ) : null}
      {name === "Google" ? (
        <span className="cursor-pointer" onClick={clickHandler}>
          <FcGoogle />
        </span>
      ) : null}
    </>
  );
}

export default SocialMediaButtons;
