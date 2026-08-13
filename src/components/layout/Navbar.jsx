import React from 'react'
import { FaAngleLeft,FaAngleRight  } from 'react-icons/fa6'
import { IoIosSunny } from 'react-icons/io'
import { NavLink } from 'react-router'


const Navbar = () => {

    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skill', path: '/skill' },
        { name: 'Project', path: '/project' },
        { name: 'Contact', path: '/contact' }
    ]

  return (
    <nav className="bg-[#131723] sticky top-0 z-50">
    <div className="flex justify-between w-4/5 mx-auto py-6">

        {/* Logo */}
        <h1 className="text-[#00C68D] text-3xl flex gap-2 items-center font-inter font-bold ">
            <FaAngleLeft className="text-white" />
            NomRanuth 
            <div className="flex items-center">
                <span className="text-white">/</span>
                <FaAngleRight className="text-white"/>
            </div>
        </h1>

        {/* Navigation */}
        <ul className="flex items-center gap-12 group">
            {navigation.map((item, index) => (
                <li key={index}>
                    <NavLink
                        to={item.path}
                        className={({isActive}) => 
                            `relative text-white text-xl font-inter
                            transition-all duration-300
                            after:absolute
                            after:left-1/2
                            after:content-['']
                            after:-translate-x-1/2
                            after:-bottom-2
                            after:h-[2px]
                            after:bg-[#00C68D]
                            after:transition-all    
                            after:duration-300
                            ${
                                isActive
                                ? "after:w-full text-[#00C68D] group-hover:after:w-0"
                                : "after:w-0 hover:after:w-full"
                            }
                              hover:text-[#00C68D]
                            `
                        }
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
            <button className="text-white  border-l pl-4">
                <IoIosSunny size={28} />
            </button>
        </ul>
    </div>
</nav>
  )
}

export default Navbar