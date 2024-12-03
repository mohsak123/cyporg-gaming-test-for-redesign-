import { useEffect, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  const [links, setLinks] = useState([
    { page: "home", path: "" },
    { page: "browse", path: "browse" },
    { page: "details", path: "details" },
    { page: "streams", path: "streams" },
  ]);

  const [linksSmall, setLinksSmall] = useState([
    { page: "home", path: "" },
    { page: "browse", path: "browse" },
    { page: "details", path: "details" },
    { page: "streams", path: "streams" },
    { page: "profile", path: "profile" },
  ]);

  const [toggle, setToggle] = useState(false);

  const location = useLocation();

  const linkRef = useRef();
  const heightRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerWidth < 991) {
        // Check if screen width is less than 991px
        if (window.scrollY > 100) {
          linkRef.current.style.position = "fixed";
          linkRef.current.style.zIndex = "999";
          heightRef.current.style.height = "70px";
          linksRef.current.style.top = "70px";
        } else {
          linkRef.current.style.position = "relative";
          linkRef.current.style.zIndex = "999";
          heightRef.current.style.height = "80px";
          linksRef.current.style.top = "80px";
        }
      } else {
        linkRef.current.style.position = ""; // Reset style for larger screens
        linkRef.current.style.zIndex = "";
        heightRef.current.style.height = "";
        linksRef.current.style.top = "";
      }
    });
  }, []);

  return (
    <section ref={linkRef} className="bg-white lg:bg-transparent w-full">
      <div
        ref={heightRef}
        className="flex transition-all duration-150 relative h-[80px] lg:h-[70px] mx-auto items-center justify-between px-[30px] lg:px-[12px] w-full lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] max-w-full pt-[0] lg:pt-[40px]"
      >
        <div className="xl:border-r xl:border-bgSecondary xl:w-[218px] 2xl:w-[262px] ">
          <img src="./src/assets/images/logo.png" className=" max-w-full" />
        </div>
        <div className="hidden lg:pl-8 xl:pl-14 2xl:pl-16 lg:flex justify-between items-center flex-1">
          <form className="relative">
            <IoMdSearch className="absolute left-[16px] top-[50%] translate-y-[-58%] size-6 font-semibold text-textSecondary" />
            <input
              type="text"
              placeholder="Type something"
              className="p-[12px] pl-12 text-sm rounded-3xl bg-bgSecondary text-textSecondary placeholder:text-textSecondary mt-[-5px] w-[236px]"
            />
          </form>
          <div className="flex justify-between items-center mt-[-5px]">
            <ul>
              {links.map((link) => (
                <Link
                  to={`/${link.path}`}
                  key={link.page}
                  className={`lg:px-[15px] xl:px-[21px] inline-block capitalize ${
                    location.pathname === `/${link.path}`
                      ? "text-textPrimary"
                      : "text-textSecondary"
                  } text-sm`}
                >
                  {link.page}
                </Link>
              ))}
            </ul>

            <Link
              className={`flex items-center justify-between py-[8px] pr-[10px] pl-[20px] transition-all duration-200 ${
                location.pathname === "/profile"
                  ? "bg-textPrimary"
                  : "bg-bgSecondary hover:bg-textPrimary"
              } gap-2 rounded-full text-sm lg:mx-2 xl:mx-2 group`}
              to="/profile"
            >
              <div
                className={`${
                  location.pathname === "/profile"
                    ? "text-white"
                    : "text-textSecondary group-hover:text-white"
                } text-sm font-medium tracking-[0.4px] capitalize transition-all duration-200`}
              >
                profile
              </div>
              <img
                src="/src/assets/images/profile-header.jpg"
                alt="profile"
                className="w-[30px] h-[30px] rounded-full"
              />
            </Link>
          </div>
        </div>
        <div className="lg:hidden text-4xl font-normal text-textPrimary hover:cursor-pointer">
          <CgMenuLeft
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />
        </div>
        <div
          ref={linksRef}
          className={`
            absolute z-[999] lg:hidden left-[50%] translate-x-[-50%] top-[80px] bg-white w-[92%] md:w-3/4 transition-all duration-300
          ${
            toggle === true
              ? "[clip-path:polygon(0%_0%,_100%_0,_100%_100%,_0%_100%)]"
              : "[clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)]"
          }`}
        >
          <ul className="flex flex-col text-center text-textSecondary text-sm capitalize">
            {linksSmall.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
                className={`p-[14px] border border-spacing-0 ${
                  location.pathname === `/${link.path}`
                    ? "text-textPrimary"
                    : "text-textSecondary"
                } hover:text-textPrimary transition-all duration-200`}
              >
                {link.page}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
