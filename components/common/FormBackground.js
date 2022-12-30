import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function FormBackground() {
  return (
    <OwlCarousel autoplay loop className="!w-1/2" items={1} nav={false}>
    <div className="w-full h-screen grid place-items-center bg-[url(/assets/login-bg1.jpg)] bg-center bg-cover text-white">
      <div className="bg-white bg-opacity-40 text-black p-10 w-[80%] lg:w-1/2 rounded-lg shadow-lg backdrop-blur-lg drop-shadow-lg">
        <em>
          Real estate cannot be lost or stolen, nor can it be carried away.
          Purchased with common sense, paid for in full, and managed with
          reasonable care, it is about the safest investment in the world.
        </em>
        <strong className="text-right">-Franklin D. Roosevelt</strong>
      </div>
    </div>
    <div className="w-full h-screen grid place-items-center bg-[url(/assets/login-bg2.jpg)] bg-center bg-cover">
      <div className="bg-white opacity-60 text-black p-10 w-[80%] lg:w-1/2 rounded-lg shadow-lg">
        <em>
          If you don&apos;t control your environment somebody else will.
        </em>
        <strong>-Grant Cardone</strong>
      </div>
    </div>
  </OwlCarousel>
  )
}

export default FormBackground