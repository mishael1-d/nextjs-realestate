import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function Navbar() {
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
  const {asPath} = useRouter()
  return (
    <div className="bg-white shadow-lg fixed top-0 left-0 right-0 ">
      <div className="md:container mx-auto block md:flex md:items-center md:justify-between w-full md:px-0 md:py-4 py-2 ">
        <div className="md:basis-1/4 cursor-pointer pl-6 md:pl-0 py-2 md:py-0 z-[1]">
          <Link href="/">
            <h3 className="text-xl font-medium">Real.Estate</h3>
          </Link>
        </div>
        <span
          className=" absolute right-8 top-4 md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open && <MdClose className="text-2xl" />}
          {!open && <GiHamburgerMenu className="text-2xl" />}
        </span>
        <ul
          className={`md:basis-3/4 md:flex md:items-center md:justify-center absolute md:static bg-white shadow-xl md:shadow-none md:z-auto z-[-1] left-0  md:top-0 w-full md:w-auto pl-6 md:pl-0 pb-12 md:pb-0 transition-all duration-300 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {Meuns.map((menu) => {
            return (
              <li
                key={menu.name}
                className={`md:ml-4 my-4 md:my-0 text-black ${asPath === `${menu.path}` && "text-[#263C41] md:border-b-2 mb-1 md:border-[#263C41] "}`}
              >
                <Link href={menu.path}>{menu.name}</Link>
              </li>
            );
          })}
          <div className="block ml-0 md:ml-auto md:flex items-center justify-end md:space-x-4">
            <Link href="login" className="block mb-4 md:mb-0">
              <button className="md:text-[#263C41] font-medium ">
                Login
              </button>
            </Link>
            <Link href="register">
              <button className="bg-[#263C41] text-white py-2 px-4 rounded-md">
                Register
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;