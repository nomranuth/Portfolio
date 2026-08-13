import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroAbout = () => {
  return (
    <div className="flex justify-between items-center w-full h-screen px-50">
      <div className="space-y-4">
        <h1 className="text-white text-7xl font-inter font-bold">Hi,</h1>
        <h1 className="text-7xl font-inter font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          <TypeAnimation
            sequence={[
              "I'm Nom Ranuth",
              5000,
              "",
              500,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </h1>
        <h2 className="text-white text-2xl">I'm looking for Internship</h2>
        <p className="text-gray-300 text-xl max-w-xl">
          This is a about page. You will know about me such as 
        </p>
        <div className="flex space-x-4 mt-10">
          <button className="text-white text-lg font-inter bg-gradient-to-br from-blue-500 to-pink-500 hover:scale-105 transition-all duration-300 py-2 px-4 rounded-xl cursor-pointer">
            Get to Touch
          </button>
          <button className="text-white text-lg font-inter border border-t-blue-500 border-l-blue-500 border-b-pink-500 border-r-pink-500 hover:scale-105 transition-all duration-300 py-2 px-4 rounded-xl cursor-pointer">
            View Projects
          </button>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="absolute h-[540px] w-[540px] rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-30 blur-3xl"></div>
        <div className="absolute h-[530px] w-[530px] animate-spin rounded-full bg-gradient-to-r from-blue-500 via-purple-500   to-pink-500 [animation-duration:7s]"></div>
        <div className="relative rounded-full bg-slate-950 p-1">
          <img
            src="/src/assets/img/myPicture.png"
            className="h-128 w-128 rounded-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default HeroAbout