import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
   const [scroll, setScroll] = useState(false);
  // scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { // 50px scroll হলে shadow show
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = [
    { to: "hero", name: "Home" },
    { to: "about", name: "About" },
    { to: "skills", name: "Skills" },
    { to: "projects", name: "Projects" },
    { to: "education", name: "Education" },
    { to: "contact", name: "Contact" },
  ];
  
  return (
    <nav className={`h-20 fixed top-0 left-0 w-full z-50 ${scroll ? "shadow-md bg-gray-800":""}`}>
      <div className="md:container mx-auto h-full flex justify-between items-center text-white">
        <div className="w-[60%]">
          <h1 className="text-[30px] font-semibold">Shihab <span className="text-[#7cf03d]">Islam</span></h1>
        </div>
        <div className="text-[20px] font-medium flex justify-between w-[40%]">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to} // section id
              smooth={true} // smooth scroll
              duration={500} // scroll speed
              spy={true} // detect active section
              activeClass="active-section"
              offset={-80} // navbar height adjust
              className="hover:text-[#7cf03d] cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
