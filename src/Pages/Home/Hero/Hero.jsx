import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      id="hero"
      className="md:container mx-auto h-screen text-white flex items-center justify-between "
    >
      {/*hero-info*/}
      <div className="w-[60%]">
        <h1 className="text-[55px] font-bold">Hi, It’s Shihab</h1>
        <div className="xl:text-[32px] md:text-[24px] mt-[-10px] font-semibold inline-block">
          <span style={{ color: "white" }}>I'm a</span>
          <TypeAnimation
            sequence={[
              " MERN Stack Developer",
              1000,
              " Mobile App Developer (React Native)",
              1000,
            ]}
            speed={50}
            style={{ color: "#7cf03d" }}
            repeat={Infinity}
          />
        </div>
        <p className="text-[16px] mt-[10px] mb-[25px]">
        Fresher skilled in React, Node.js, Express.js, MongoDB, and Firebase, focused on building responsive web applications. Open to remote or on-site opportunities to apply skills and gain teamwork experience.
        </p>
        <div className="flex items-center gap-5">
          <button className="py-[10px] px-[30px] bg-[var(--primary-color)] rounded-[40px] border-2 border-[var(--primary-color)] shadow-[0_0_10px_#7cf03d] text-[16px] font-semibold hover:bg-transparent hover:shadow-none text-black hover:text-[var(--primary-color)]  transition-all duration-500 ease-in-out">
            Download Resume
          </button>
          <div className="flex gap-2">
            <a
              className="p-2 border-2 border-[var(--primary-color)] rounded-full text-[var(--primary-color)] text-[20px] hover:bg-[var(--primary-color)] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] transition-all duration-500 ease-in-out"
              href="https://github.com/Shihab177" target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="p-2 border-2 border-[var(--primary-color)] rounded-full text-[var(--primary-color)] text-[20px] hover:bg-[var(--primary-color)] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] transition-all duration-500 ease-in-out"
              href="https://www.linkedin.com/in/shihab-islam77/" target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="p-2 border-2 border-[var(--primary-color)] rounded-full text-[var(--primary-color)] text-[20px] hover:bg-[var(--primary-color)] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] transition-all duration-500 ease-in-out"
              href="https://www.facebook.com/sk.shihab.73594" target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              className="p-2 border-2 border-[var(--primary-color)] rounded-full text-[var(--primary-color)] text-[20px] hover:bg-[var(--primary-color)] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] transition-all duration-500 ease-in-out"
              href="http://www.youtube.com/@ultracoder-j3i" target="_blank"
            >
              <FaYoutube />
            </a>

            <a
              className="p-2 border-2 border-[var(--primary-color)] rounded-full text-[var(--primary-color)] text-[20px] hover:bg-[var(--primary-color)] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] transition-all duration-500 ease-in-out"
              href=""
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      {/*hero-img*/}
      <div className="flex justify-end  w-[40%]">
        <div className="bg-[var(--primary-color)] rounded-full relative w-[500px] h-[500px] flex justify-center overflow-hidden shadow-[0_0_25px_#7cf03d] transition-all duration-500 ease-in-out">
         
          <img
            className=" w-[400px] hover:shadow-[0_0_25px_#7cf03d,0_0_50px_#7cf03d,0_0_100px_#7cf03d]"
            src="https://i.ibb.co.com/vvc1MkpS/shihab-removebg-preview.png "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
