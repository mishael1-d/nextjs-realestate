import Image from "next/image";
import React from "react";
import HeroBg from "../public/assets/hero-bg.png";
import styles from "../styles/Hero.module.css";
// import OwlCarousel from "react-owl-carousel2";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Tabpanel from "./Tabpanel";
// import 'react-owl-carousel2/style.css'; //Allows for server-side rendering.
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
function Hero() {
  return (
    <div className="relative mx-auto h-[100vh]">
      <OwlCarousel autoplay items={1} nav={true} loop={true}>
        <video autoPlay loop muted playsInline className={styles.myVideo}>
          <source src="/assets/bg-video1.mp4" type="video/mp4" />
        </video>
        <video autoPlay loop muted playsInline className={styles.myVideo}>
          <source src="/assets/bg-video2.mp4" type="video/mp4" />
        </video>
        <video autoPlay loop muted playsInline className={styles.myVideo}>
          <source src="/assets/bg-video3.mp4" type="video/mp4" />
        </video>
      </OwlCarousel>

      <div className="text-[#07171a] z-50 absolute top-[42%] left-[35%] text-center grid place-items-center">
        <div className="font-bold">
          <h3 className="text-[50px]">Modern Home</h3>
          <h1 className="text-[35px]">Your Best Home Finder</h1>
          <p>Let&#39;s Find a Perfect Home For You</p>
        </div>
        <div className="h-full">
          {/* <Image src={HeroBg} alt="Background of a duplex" className="h-full" /> */}
        </div>
        <Tabpanel />
      </div>
    </div>
  );
}

export default Hero;
