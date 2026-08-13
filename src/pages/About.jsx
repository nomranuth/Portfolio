import React from 'react'
import HeroAbout from '../components/about/HeroAbout'

const About = () => {
  return (
    <div className=" min-h-screen relative z-10">
      <section className="flex flex-col citems-enter justify-center min-h-screen">
        <HeroAbout />
      </section>
    </div>
  )
}

export default About