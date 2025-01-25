import { useState } from "react"
import SideNaveList from "./sideNaveList"

const SideNave = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }

    return <>

        <div style={{ width: isOpen === true ? "8%" : "" }} className="bg-blue-500 w-[22%] h-screen fixed transition-all duration-700">

            <i style={{ display: isOpen === true ? "none" : "" }} onClick={handleIsOpen} className="fa-solid fa-bars text-4xl text-white absolute right-2 top-1"></i>
            <i onClick={handleIsClose} style={{ display: isOpen === true ? "block" : "none" }} className="fa-solid fa-x text-4xl text-white pl-14 pt-1 hidden"></i>

            <div className="pt-32">

                <SideNaveList icon="fa-box" title="Dashboard" />
                <SideNaveList icon="fa-users" title="Students" />
                <SideNaveList icon="fa-user" title="Teacher" />
            </div>
        </div>
        
        <div style={{marginLeft: isOpen === true ? "12%" : ""}} className="ml-[28%] transition-all duration-700">
            {children}
        </div>

    </>
}

export default SideNave