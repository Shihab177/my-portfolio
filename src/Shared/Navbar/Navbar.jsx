import React, { useEffect, useState } from "react";
import {
  HiHome,
  HiUser,
  HiLightBulb,
  HiBriefcase,
  HiAcademicCap,
  HiMail,
  HiMenuAlt1,
} from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, animateScroll as scroll } from "react-scroll";
import scrollSpy from "react-scroll/modules/mixins/scroll-spy";
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [offset, setOffset] = useState(-80);

  // scroll handler
  useEffect(() => {
     scrollSpy.update(); 
    const handleScroll = () => {
      if (window.scrollY > 1) {
        // 50px scroll হলে shadow show
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOffset(-56); // Mobile navbar height
      } else {
        setOffset(-80); // Desktop navbar height
      }
    };

    handleResize(); // প্রথমবার রান করবে
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { to: "hero", name: "Home", icon: <HiHome size={20} /> },
    { to: "about", name: "About", icon: <HiUser size={20} /> },
    { to: "skills", name: "Skills", icon: <HiLightBulb size={20} /> },
    { to: "projects", name: "Projects", icon: <HiBriefcase size={20} /> },
    { to: "education", name: "Education", icon: <HiAcademicCap size={20} /> },
    { to: "contact", name: "Contact", icon: <HiMail size={20} /> },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`md:h-20 h-[56px] fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scroll ? "shadow-md bg-gray-800" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center text-white">
          <div className="">
            <h1 className="md:text-[30px] text-[20px] font-semibold">
              Shihab <span className="text-[#7cf03d]">Islam</span>
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-6 xl:gap-8 font-medium">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={offset}
                activeClass="active-section"
               
                className="cursor-pointer hover:text-[#7cf03d] 
                 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <HiMenuAlt1
              size={27}
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Side Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-gray-900 text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          <IoClose
            size={28}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col p-4 space-y-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
               offset={offset}
                className="flex items-center gap-3 hover:text-[#7cf03d] cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
