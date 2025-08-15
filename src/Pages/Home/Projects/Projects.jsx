import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

const Projects = () => {
  const project = [
    {
      id: 1,
      name: "BazaarTracker BD",
      overview:
        "BazaarTracker BD is a modern web application for tracking daily prices of essential items in local markets across Bangladesh. Users can view, compare, and track price changes while vendors can submit new prices and advertise products. The platform supports user interaction, purchases, and admin moderation.",
      technology: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Stripe",
        "TailwindCss",
        "TanStack Query",
        "JWT",
      ],
      Challenges: [
        "Implementing secure Stripe payment integration with proper status updates for both organizers and participants.",
        "Designing a database structure to handle multiple user roles, camp data, registrations, and feedback efficiently.",
        "Ensuring participants remain logged in on private routes even after page reloads using JWT token persistence.",
        "Managing multiple dashboard routes with role-based access control and maintaining a responsive design for all devices.",
      ],
      Improvements: [
        "AI-based Price Anomaly Detection",
        "Vendor & Buyer Chat System",
        "Location-based Market Suggestions",
        "Subscription & Notification System",
        "QR Code Integration",
      ],
      liveLink: "https://bazaar-tracker--bd.web.app/",
      code: "https://github.com/Shihab177/BazaarTracker-BD?tab=readme-ov-file",
      image: "https://i.postimg.cc/P5fT6Fg5/Screenshot-2025-08-14-040337.png",
      images: [
        "https://i.postimg.cc/9QvF92PZ/Screenshot-2025-08-14-040630.png",
        "https://i.postimg.cc/P5fT6Fg5/Screenshot-2025-08-14-040337.png",
        "https://i.postimg.cc/9QXNBwbj/Screenshot-2025-08-14-040551.png",
        "https://i.postimg.cc/bwMH2ZFg/Screenshot-2025-08-14-040519.png",
        "https://i.postimg.cc/76mrbGwy/Screenshot-2025-08-14-041533.png",
      ],
    },
    {
      id: 2,
      name: "BoiBaksho",
      overview:
        "BoiBaksho is a digital bookshelf web application where users can manage their reading list. They can add books they’ve read, are reading, or want to read. Users can also share reviews, upvote books, and track their reading progress in a clean, organized way.",
      technology: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Firebase Auth",
        "Framer Motion",
        "JWT",
         "TailwindCss",
      ],
      Challenges: [
        "Book Data Structure & Status Management",
        "Implementing secure JWT-based authentication to ensure private route protection without losing login state on reload.",
        "Designing an intuitive UI/UX for item posting, editing, and recovery workflows while keeping forms pre-filled with logged-in user data.",
         "Integrating search and filtering functionality for large datasets without degrading performance.",
        
       
      ],
      Improvements: [
        "Users will be able to follow each other and view the books they are reading.",
        "Users will receive notifications when a “Want to Read” book is released or a new edition becomes available.",
        "User’s read books, category distribution, and progress over time chart (using Recharts or Chart.js).",
        "JWT Auth + Role Based Access",
        
      ],
      liveLink: "https://boibaksho-e735b.web.app/Bookshelf",
      code: "https://github.com/Shihab177/BoiBaksho?tab=readme-ov-file",
      image: "https://i.postimg.cc/J4ZmCS8W/Screenshot-2025-08-14-072632.png",
      images: [
        "https://i.postimg.cc/W4MVByhh/Screenshot-2025-08-14-071106.png",
        "https://i.postimg.cc/br54D0s7/Screenshot-2025-08-14-071522.png",
        "https://i.postimg.cc/MKjF3QcG/Screenshot-2025-08-14-071231.png",
        "https://i.postimg.cc/tTTr3ZQp/Screenshot-2025-08-14-071301.png",
        "https://i.postimg.cc/NMmx71Ch/Screenshot-2025-08-14-071324.png",
      ],
    },
    {
      id: 3,
      name: "RoomSync",
      overview:
        "RoomSync is a roommate finder web application that helps users connect with potential roommates.Users can create listings with their lifestyle preferences, rent budget, and contact details.It also allows browsing and filtering through all listings, liking posts, and managing personal listings.",
      technology: [
       "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Firebase Auth",
        "Framer Motion",
        "JWT",
         "TailwindCss",
      ],
      Challenges: [
        "Back-end requests are secured using JWT (JSON Web Tokens). This involves generating, verifying, and handling token expiration.",
        "Correctly configured permissions to allow users to add, update, and delete only their own listings.",
        "Using conditional rendering to display contact information on posts that have been liked.",
        "Saving the theme toggle state to local storage so that the settings are preserved even after a page reload.",
      ],
      Improvements: [
        "Location-based search and map integration.",
        "Categories, dates, locations, and status-based filtering.",
        "Users will be able to comment on other people's posts.There will be an option to report posts with incorrect information.",
        "Users will be able to filter and view items located nearby.",
      ],
      liveLink: "https://roommate-finder-72f3c.web.app/",
      code: "https://github.com/Shihab177/RoomSync",
      image: "https://i.postimg.cc/vHT1D5Cg/Screenshot-2025-08-14-093933.png",
      images: [
        "https://i.postimg.cc/vHT1D5Cg/Screenshot-2025-08-14-093933.png",
        "https://i.postimg.cc/QxCbs9bS/Screenshot-2025-08-14-094132.png",
        "https://i.postimg.cc/4yvdBggD/Screenshot-2025-08-14-094207.png",
      ],
    },
  ];
  return (
    <div
      id="projects"
      className="text-white pb-20 md:container mx-auto pt-8"
    >
      <h1 className="text-center text-[30px] font-semibold ">
        Featured <span className="text-[var(--primary-color)]">Projects</span>
      </h1>
      <p className="mt-4 mb-14 text-center text-[16px] font-medium">
        Here are some of my recent projects that showcase my skills and passion
        for <br /> creating innovative solutions.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between md:gap-5">
        {project.map((item) => (
          <div className="rounded-md bg-[#111826]" key={item.id}>
            <div className="w-full h-[278px]">
                  <img className="rounded-t-md opacity-80 w-full h-full" src={item.image} alt="" />
            </div>
           
            <div className="p-5">
              <h2 className="text-white text-[21px] mt-2 font-medium">
                {item.name}
              </h2>
              <p className="text-[15px] my-3">
                {(() => {
                  const w = (item.overview || "").trim().split(/\s+/);
                  const t = w.slice(0, 11).join(" ");
                  return w.length > 11 ? t + "…" : t;
                })()}
              </p>
              <div className="flex gap-2">
                {item.technology.slice(0, 3).map((tec, index) => (
                  <p
                    className="bg-[#1B2949] text-[13px] rounded-4xl text-blue-200 px-4 py-1"
                    key={index}
                  >
                    {tec}
                  </p>
                ))}

                {item.technology.length > 3 && (
                  <p className="bg-gray-800 text-[13px] rounded-4xl text-gray-400 px-4 py-1">
                    +{item.technology.length - 3} more
                  </p>
                )}
              </div>
              <Link to={`details/${item.id}`}>
              <button className="py-[8px] opacity-90 mt-6 w-full bg-[var(--primary-color)] rounded-md border-2 border-[var(--primary-color)] shadow-[0_0_10px_#7cf03d] text-[16px] font-semibold hover:bg-transparent hover:shadow-none text-black hover:text-[var(--primary-color)]  transition-all duration-500 ease-in-out">
                View Details
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
     <div className="w-full flex justify-center mt-14">
        <a href="https://github.com/Shihab177" target="_blank">
             <button className="flex items-center gap-2 px-6 py-4 text-[20px] bg-gray-800 font-medium border-gray-600 border-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md ">View All Projects <span className=""><FaLongArrowAltRight /></span></button>
        </a>
     </div>
    </div>
  );
};

export default Projects;
