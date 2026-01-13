import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";

const Nav = ({ isMenuOpen, setIsMenuOpen }) => {
  const [open, setOpen] = useState(false);

  const navList = [
    {
      id: 1,
      name: "home",
      icon: <FaHome />,
      navigate: "#home",
    },
    {
      id: 2,
      name: "upload resume",
      icon: <FiUpload />,
      navigate: "#resumeMatch",
    },
    {
      id: 3,
      name: "how it's work?",
      icon: <MdWorkOutline />,
      navigate: "#home",
    },
  ];
  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md">
      <div className="navContainer mx-7 py-3 md:py-4 lg:mx-14 lg:py-2">
        <div className="flex my-1 justify-between items-center">
          <div
            className="navLogo cursor-pointer"
            onClick={() => window.location.reload()}
          >
            <h1 className="font-[poppins,Montserrat] select-none text-2xl md:text-[32px] lg:text-3xl font-semibold -tracking-tighter">
              Resume
              <span className="text-blue-500 text-[28px] md:text-[34px] font-[Montserrat] font-black">
                S
              </span>
              can
            </h1>
          </div>

          <div className="mob-visibility pt-2 relative sm:hidden">
            <div>
              <button
                className="text-[22px]"
                onClick={() => {
                  setOpen(!open);
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                {!open ? <GiHamburgerMenu /> : <RxCross1 />}
              </button>
            </div>
          </div>

          <div className="navItems hidden sm:block">
            <ul className="flex capitalize  sm:text-[16px] md:text-[2.25vw] lg:text-xl font-semibold">
              {navList.map((list) => (
                <li
                  key={list.id}
                  className="group sm:mx-3 lg:mx-4 cursor-pointer md:tracking-wide lg:tracking-wider transition-all duration-300 ease-in-out hover:text-blue-500"
                >
                  <a href={list.navigate} className="flex items-center">
                    <span className="mr-2 text-blue-500 group-hover:text-black">
                      {list.icon}
                    </span>
                    <span>{list.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative ">
        <div
          className={`mob-visibility absolute top-0 sm:hidden w-screen
      transition-all duration-300 ease-in-out
      ${
        open
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }
    `}
        >
          <div className="w-screen ">
            <ul className="overflow-hidden px-20 bg-white shadow-lg py-4 text-center font-semibold capitalize">
              {navList.map((list, idx) => (
                <li
                  key={list.id}
                  className={`group py-3 mb-2 text-lg transition-colors duration-300 ease-in-out hover:text-blue-500 ${
                    idx !== navList.length - 1
                      ? "border-b-2 border-slate-300"
                      : ""
                  }`}
                >
                  <a
                    href={list.navigate}
                    className="flex items-center justify-center"
                  >
                    <span className="mr-3 text-blue-500 group-hover:text-black">
                      {list.icon}
                    </span>
                    <span>{list.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
