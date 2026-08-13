import React from 'react'
import HeroHome from '../components/home/HeroHome'

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col citems-enter justify-center min-h-screen">
          <HeroHome />
        </section>
      </div>
    </div>
  )
}
  
export default Home