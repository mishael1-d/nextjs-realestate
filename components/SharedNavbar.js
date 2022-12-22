import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function SharedNavbar() {
  const Meuns = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Buy",
      path: "/buy",
    },
    {
      name: "Rent",
      path: "/rent",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const [open, setOpen] = useState(false);
  const { asPath } = useRouter();
  return (
    <div className="bg-[url(/assets/hero-bg.png)] bg-center bg-cover text-white shadow-lg sticky top-0 z-50">
      <div className=" md:mx-auto block md:flex md:items-center md:justify-between w-full md:px-24 py-4">
        <div className="md:basis-1/4 cursor-pointer pl-6 md:pl-0 py-2 md:py-0 z-[1]">
          <Link href="/">
            <h3 className="text-xl font-bold font-Lato">Real.Estate</h3>
          </Link>
        </div>
        <span
          className=" absolute right-8 top-6 md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open && <MdClose className="text-2xl" />}
          {!open && <GiHamburgerMenu className="text-2xl" />}
        </span>
        <ul
          className={`md:basis-3/4 md:flex text-white md:items-center md:justify-center absolute md:static bg-transparent shadow-xl md:shadow-none md:z-auto z-[-1] left-0  md:top-0 w-full md:w-auto pl-6 md:pl-0 pb-12 md:pb-0 transition-all duration-300 ease-in font-Roboto font-normal ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Meuns.map((menu) => {
            return (
              <li
                key={menu.name}
                className={`md:ml-4 my-4 md:my-0 text-white ${
                  asPath === `${menu.path}` &&
                  "text-white md:border-b-2 mb-1 md:border-white "
                }`}
              >
                <Link href={menu.path}>{menu.name}</Link>
              </li>
            );
          })}
          <div className="block ml-0 md:ml-auto md:flex items-center justify-end md:space-x-4">
            <Link href="login" className="block mb-4 md:mb-0">
              <button className="bg-white text-[#263C41] py-2 px-4 rounded-md">
                Login
              </button>
            </Link>
            <Link href="register">
              <button className="bg-white text-[#263C41] py-2 px-4 rounded-md">
                Register
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SharedNavbar;
