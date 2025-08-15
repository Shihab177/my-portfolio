import React from "react";

const About = () => {
  const interests = [
    "Mobile Apps (React Native)",
    "Microservices",
    "Web Development",
    "Game Development",

    "Backend Development",
    "Strong Logic",
    "Problem Solving",
    "Scalable Software",

    "Open Source",
    "Machine Learning",
    "UI/UX Design"
   
  ];
  return (
    <div className="">
      <div id="about" className="pb-20  md:container mx-auto flex">
        <div className="w-[40%] ">
          <img
            className="rounded-md h-100 w-100 mt-[100px] "
            src="https://i.ibb.co.com/pvBS30z6/a.png"
            alt=""
          />
        </div>
        <div className="w-[60%] text-white">
          <h1 className="text-[30px] font-semibold mt-8">About <span className="text-[var(--primary-color)]">Me</span></h1>
          <p className="mt-8 w-150 text-gray-200">
            I began my programming journey in 2023, learning HTML, CSS, and
            JavaScript on my mobile due to the lack of a laptop. From 2024, I
            focused entirely on web development, learning the MERN stack through
            Programming Hero and building several full-stack projects. I am
            passionate about backend systems, frontend logic, and especially
            debugging and problem-solving. I focus on writing clean, structured,
            and well-commented code that is easy to read and maintain. Tackling
            challenging errors has strengthened my patience and resilience.
            Currently, I work independently, but I am eager to gain team
            collaboration experience to further enhance my skills and
            adaptability. Outside of coding, I enjoy photography, music, and
            cooking. I am naturally curious, a deep learner, and adaptable —
            able to handle pressure, adjust to new codebases, and quickly master
            new skills.
          </p>
          <div className="">
            <h1 className="text-2xl mt-8 font-bold text-white mb-4">
              Interests & Hobbies
            </h1>

            <div className=" flex gap-4 w-150 flex-wrap">
              {interests.map(
                (item, colIndex) =>
                  item && (
                    <div
                      key={colIndex}
                      className="bg-[#1B2949] py-2 px-4  rounded-4xl hover:shadow-lg transition-shadow duration-300 shadow-xl"
                    >
                      <p className="text-blue-200 font-medium text-[14px] text-center">
                        {item}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
