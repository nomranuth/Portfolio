import React from "react";
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaReact,} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiGithubLine, RiTelegram2Fill } from "react-icons/ri";
import { SiTailwindcss, SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#131723] text-white  space-y-4">
      <hr className="border-gray-600" />
      <div className="grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 space-y-2 w-4/5 mx-auto py-8">
        <div className="space-y-2">
          <div className="flex items-center ">
            <FaAngleRight className="text-white" size={24}/>
            <h1 className="text-3xl font-inter font-bold text-[#00C68D]">
              NomRanuth
            </h1>
            <FaAngleLeft className="text-white" size={24}/>
          </div>
          <p className="text-gray-300 text-sm font-inter">
            Frontend Developer <br />
            Passionate Frontend Developer from Cambodia. <br />
            Building modern and responsive web applications.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-inter">Social Medis</h1>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nomranuth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubLine
                size={28}
                className="border-[#00C68D] border rounded-full hover:scale-105 p-[2px] duration-300"
              />
            </a>
            <a
              href="https://web.facebook.com/nom.ranuth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                size={28}
                className="border-[#00C68D] border rounded-full hover:scale-105 p-[2px] duration-300"
              />
            </a>
            <RiTelegram2Fill
              size={28}
              className="border-[#00C68D] border rounded-full hover:scale-105 p-[2px] duration-300"
            />
            <MdEmail
              size={28}
              className="border-[#00C68D] border rounded-full hover:scale-105 p-[2px] duration-300" 
            />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-inter">Contact Me</h1>
          <p className="text-gray-300 text-sm font-inter">
            Email: nomranuth22@gmail.com
          </p>
          <p className="text-gray-300 text-sm font-inter">Phone: 0884782763</p>
          <p className="text-gray-300 text-sm font-inter">
            Location: Phnom Penh, Cambodia
          </p>
        </div>
        <div className="space-y-2 ">
          <h1 className="text-xl font-inter ">Build by</h1>
          <p className="text-gray-300 font-inter text-sm">Built with React, Tailwind CSS & Vite</p>
          <div className="flex items-center gap-2">
            <FaReact className="text-cyan-400 border rounded-md p-[2px] hover:scale-105 duration-300" size={28}/>
            <SiTailwindcss className="text-sky-500 border rounded-md p-[2px] hover:scale-105 duration-300" size={28} />
            <SiVite className="text-purple-500 border rounded-md p-[2px] hover:scale-105 duration-300" size={28}/>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
