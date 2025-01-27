import React from "react";
import { useState } from "react"
import { NavLink } from "react-router-dom";

const Home = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }

    return <>

        <div style={{ width: isOpen === true ? "8%" : "" }} className="bg-blue-500 w-[22%] h-screen fixed transition-all duration-700 pl-16">

            <i style={{ display: isOpen === true ? "none" : ""  }} onClick={handleIsOpen} className="fa-solid fa-bars text-4xl text-white absolute right-2 top-1"></i>
            <i onClick={handleIsClose} style={{ display: isOpen === true ? "block" : "none" }} className="fa-solid fa-x text-4xl text-white pl-2 pt-1 hidden"></i>

            <div className="pt-32 ">

              <ul className="text-white text-2xl" >
              <li><i class="fa-solid fa-dashboard "> <NavLink to="/about"> Dashboard </NavLink></i></li><br/>
              <li><i class="fa-solid fa-user"> <NavLink to="/users"> Users</NavLink></i><br/></li>
              <li className="mt-10"><i class="fa-solid fa-users"> <NavLink to="/contact"> Student</NavLink></i></li>
                
              </ul>

              
            </div>
        </div>
        
        <div style={{marginLeft: isOpen === true ? "12%" : ""}} className="ml-[28%] transition-all duration-700">
            {children}
        </div>
        

    </>
}

export default Home