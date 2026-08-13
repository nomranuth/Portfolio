import React from 'react'
import Home from './pages/Home';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = () => {

  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/skill',
      element: <Skill />
    },
    {
      path: '/project',
      element: <Project />
    },
    {
      path: '/contact',
      element: <Contact />
    },
  ];

  return (
    <div className="bg-[#131723]">
      <Navbar />

      {/* Routes */}
      <Routes>
          {routes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              element={route.element} 
            />
          ))}
      </Routes>

      <Footer />

    </div>
  )
}

export default App