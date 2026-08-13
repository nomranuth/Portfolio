import React from "react";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const HeroHome = () => {
  return (
    <div className="flex justify-between items-center w-full px-50">
      <div className="space-y-4">
        <h1 className="text-white text-6xl font-inter font-bold">Hello I'm </h1>
        <h2 className="text-6xl font-inter font-bold text-[#00C68D]">
          <TypeAnimation
            sequence={[
              "Nom Ranuth",
              3000,
              "Front-end Developer",
              3000,
              "jonior Developer",
              3000,
              "Web Developer",
              3000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </h2>
        <h2 className="text-gray-300 text-2xl">I'm looking for Internship</h2>
        <p className="text-white text-xl max-w-xl">
          I build modern, responsive and user-friendly web applications using
          React, Tailwind CSS and JavaScript. And now I'm looking for a
          internship as a Frontend Developer to improve my skills and gain more
          experience.
        </p>
        <div className="flex space-x-4 mt-10 ">
          <button class="cursor-pointer bg-gradient-to-b from-[#00C68D] to-[#00C68D]  px-6 py-3 rounded-xl  text-white font-medium group">
            <div class="relative overflow-hidden">
              <p class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center gap-2">
                Download CV 
                <MdOutlineFileDownload size={24}/>
              </p>
              <p class="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center gap-2">
                Download CV
                <MdOutlineFileDownload size={24}/>
              </p>
            </div>
          </button>
          <button class="relative cursor-pointer py-4 px-8 text-center font-bold inline-flex justify-center text-base uppercase text-[#00C68D] rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
            <span class="relative z-20">Contact Me</span>

            <span class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

            <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#00C68D] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
            <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#00C68D] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
            <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#00C68D] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
            <span class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#00C68D] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
          </button>
        </div>
      </div>
      <div className="relative flex items-center justify-center  duration-500">
        <div className="absolute inset-0 rounded-full bg-[#00C68D]/20 blur-3xl"></div>
        <div className="relative rounded-full bg-[#00C68D] p-1  animate-float transition-transform  duration-500 hover:scale-105">
          <img
            src="/src/assets/img/myPicture.png"
            className="h-130 w-130 rounded-full object-cover"
            alt="Nom Ranuth"  
          />
        </div>
          {/* React */}
  <div
    className="
      absolute
      -top-5
      right-10
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-xl
      border
      border-cyan-400/30
      bg-[#131723]/80
      text-cyan-400
      shadow-[0_0_20px_rgba(34,211,238,0.2)]
      backdrop-blur-md
      animate-tech-1
    "
  >
    <FaReact size={30} />
  </div>


  {/* JavaScript */}
  <div
    className="
      absolute
      top-32
      -right-8
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-xl
      border
      border-yellow-400/30
      bg-[#131723]/80
      text-yellow-400
      shadow-[0_0_20px_rgba(250,204,21,0.2)]
      backdrop-blur-md
      animate-tech-2
    "
  >
    <FaJs size={28} />
  </div>


  {/* HTML */}
  <div
    className="
      absolute
      bottom-20
      -left-8
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-xl
      border
      border-orange-500/30
      bg-[#131723]/80
      text-orange-500
      shadow-[0_0_20px_rgba(249,115,22,0.2)]
      backdrop-blur-md
      animate-tech-3
    "
  >
    <FaHtml5 size={30} />
  </div>


  {/* CSS */}
  <div
    className="
      absolute
      -bottom-5
      right-20
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-xl
      border
      border-blue-400/30
      bg-[#131723]/80
      text-blue-400
      shadow-[0_0_20px_rgba(96,165,250,0.2)]
      backdrop-blur-md
      animate-tech-4
    "
  >
    <FaCss3Alt size={30} />
  </div>
  {/* Tailwind CSS */}
<div
  className="
    absolute
    top-5
    left-16
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-xl
    border
    border-cyan-400/30
    bg-[#131723]/80
    text-cyan-400
    shadow-[0_0_20px_rgba(34,211,238,0.2)]
    backdrop-blur-md
    animate-tech-5
  "
>
  <SiTailwindcss size={28} />
</div>
      </div>
    </div>
  );
};

export default HeroHome;
