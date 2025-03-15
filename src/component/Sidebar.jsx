import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import React from 'react'
import { useSelector } from "react-redux";
 

const SidebarItem = [
    {
        icons: <CiHome size={"25px"} />,
        title: "Home"
    },
    {
        icons: < SiYoutubeshorts size={"25px"} />,
        title: "Short"
    },
    {
        icons: < MdOutlineSubscriptions size={"25px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"25px"} />,
        title: "Home"
    },
    {
        icons: < SiYoutubeshorts size={"25px"} />,
        title: "Short"
    },
    {
        icons: < MdOutlineSubscriptions size={"25px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"25px"} />,
        title: "Home"
    },
    {
        icons: < SiYoutubeshorts size={"25px"} />,
        title: "Short"
    },
    {
        icons: < MdOutlineSubscriptions size={"25px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"25px"} />,
        title: "Home"
    },
    {
        icons: < SiYoutubeshorts size={"25px"} />,
        title: "Short"
    },
    {
        icons: < MdOutlineSubscriptions size={"25px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"25px"} />,
        title: "Home"
    },
    {
        icons: < SiYoutubeshorts size={"25px"} />,
        title: "Short"
    },
    {
        icons: < MdOutlineSubscriptions size={"25px"} />,
        title: "Subscription"
    },
    {
        icons: <CiHome size={"25px"} />,
        title: "Home"
    },
    {
        icons: < SiYoutubeshorts size={"25px"} />,
        title: "Short"
    },
    {
        icons: < MdOutlineSubscriptions size={"25px"} />,
        title: "Subscription"
    },
]

const Sidebar = () => {
    
    const open =useSelector((store)=>store.app.open);
    return (
        <div className={`raletive  ml-4 mt-17 overflow-y-scroll overflow-x-hidden left-0 ${open ? "w-[30%]" : "w-[10%]"} p-5 h-[calc(100vh-4.625rem)]`}>

            {
                SidebarItem.map((item, index) => {
                    return (
                        <div key={index} className="flex  my-3 ">
                            {item.icons}
                            <p className={`ml-5 ${open ? "":'hidden'}`}>{item.title}</p>
                        </div>
                    )

                })
            }




        </div>

    )
}

export default Sidebar