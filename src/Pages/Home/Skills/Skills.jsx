import React, { useState } from "react";
import { NavLink } from "react-router";

const Skills = () => {
  const [category, setCategory] = useState("Frontend");
  const skills = [
    {
      id: 1,
      category: "Frontend",
      frontend: [
        {
          name: "HTML",
          image: "https://i.ibb.co.com/BVGpZvMm/html-5-174854.png",
        },
        {
          name: "Css",
          image: "https://i.ibb.co.com/gbgJ7s5y/css-3-732190.png",
        },
        {
          name: "Tailwind CSS",
          image:
            "https://i.ibb.co.com/VpMh8nRk/tailwind-css-logo-png-seeklogo-354675.png",
        },
        {
          name: "JavaScript",
          image: "https://i.ibb.co.com/m5hYyDp0/js-5968292.png",
        },
        {
          name: "React",
          image: "https://i.ibb.co.com/ZphkhHxQ/physics-753244.png",
        },
        {
          name: "Next.js",
          image: "https://i.ibb.co.com/twMmbtQM/nextjs2106-logowik-com.webp",
        },
      ],
    },
    {
      id: 2,
      category: "Backend",
      frontend: [
        {
          name: "Node.js",
          image:
            "https://i.ibb.co.com/j9pfk3rC/40a750173673c890d7e081387b76469d.jpg",
        },
        {
          name: "Express.js",
          image: "https://i.ibb.co.com/GQcYSDtv/images-4.png",
        },
        {
          name: "MongoDB",
          image:
            "https://i.ibb.co.com/60GM79dQ/b2317e8174e5fcef57c74c662f57d155.jpg",
        },
        {
          name: "Firebase",
          image:
            "https://i.ibb.co.com/pvMYWBG3/wagtailvideo-gfeqmswx-thumb.jpg",
        },
        {
          name: "Jwt",
          image:
            "https://i.ibb.co.com/dwYbjWff/jwt-json-web-tokens9313-logowik-com.webp",
        },
        {
          name: "Stripe",
          image: "https://i.ibb.co.com/sdQ37qm3/1685814539stripe-icon-png.png",
        },
      ],
    },
    {
      id: 3,
      category: "Tools",
      frontend: [
        {
          name: "VS Code",
          image: "https://i.ibb.co.com/Ld25RzD9/images-10.jpg",
        },
        {
          name: "Android Studio",
          image:
            "https://i.ibb.co.com/39q0wRg5/st-small-507x507-pad-600x600-f8f8f8.jpg",
        },
        {
          name: "Git & GitHub",
          image:
            "https://i.ibb.co.com/cXJq9hnJ/074d0b06-a5e3-11e2-8b7f-9f09eb2ddfae.webp",
        },
        {
          name: "Figma",
          image:
            "https://i.postimg.cc/bw4RcCxJ/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.avif",
        },
        {
          name: "Postman",
          image: "https://i.postimg.cc/fTnxC0HR/postman-icon-filled-256.webp",
        },
        {
          name: "Vercel",
          image: "https://i.postimg.cc/fLHmL6d8/images-5.png",
        },
      ],
    },
  ];

  const AlwaysLearning = [
    "Redux", // State management
    "TypeScript", // Strongly typed JS
    "Mongoose", // MongoDB ODM
    "DevOps", // CI/CD, deployment practices
    "GraphQL", // API query language
    "Docker", // Containerization
    "Testing (Jest/RTL)",
  ];

  const handelClick = (category) => {
    setCategory(category);
  };
  const activeCategory = skills.find((item) => item.category === category);
  return (
    <div
      id="skills"
      className="text-white pb-20 pt-8 md:container mx-auto"
    >
      <h1 className="text-[30px] font-semibold text-center ">
        Skills & <span className="text-[var(--primary-color)]">Expertise</span>
      </h1>
      <p className="text-[16px] text-center font-medium mt-4 mb-14">
        Here are the technologies and tools I work with to create amazing
        digital <br />
        experiences.
      </p>
      <div className="w-76 border-gray-600  font-medium text-[16px] mx-auto border rounded-md flex ">
        {skills.map((item) => (
          <button
            onClick={() => {
              handelClick(item.category);
            }}
            className={`rounded-md cursor-pointer shadow-md px-5 text-black py-2 ${
              category === item.category
                ? "bg-[var(--primary-color)] "
                : "text-gray-200 hover:text-white"
            }`}
            key={item.id}
          >
            {item.category}
          </button>
        ))}
      </div>
      {/* Items List */}
      <div className="mt-12 flex gap-8 items-center w-full justify-between">
        {activeCategory?.frontend.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 py-8 rounded-md shadow hover:bg-gray-700 border border-gray-700  flex flex-col gap-4 items-center w-80"
          >
            <img
              className="h-15 w-15 rounded-md animate-slow-bounce"
              src={skill.image}
              alt=""
            />
            <p className="font-medium text-[16px]"> {skill.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 w-full">
        <h1 className="text-[24px] font-medium text-center mb-7">Always <span className="text-[var(--primary-color)]">Learning</span></h1>
        <div className=" flex justify-center gap-4">
        {AlwaysLearning.map(
          (item, colIndex) =>
            item && (
              <p
                key={colIndex}
                className="bg-[#1B2949]  py-2 px-4  rounded-4xl hover:shadow-lg transition-shadow duration-300 shadow-xl text-blue-200 font-medium text-[14px]"
              >
                
                  {item}
                
              </p>
            )
        )}
      </div>
      </div>
    </div>
  );
};

export default Skills;
