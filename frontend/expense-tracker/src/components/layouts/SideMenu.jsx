import React from 'react'
import { SIDE_MENU_DATA } from '../../utils/data'
import { useContext } from 'react'
import { userContext } from '../../context/userContext'
import { useNavigate } from "react-router-dom"
import CharAvatar from '../Cards/CharAvatar'

const SideMenu = ({ activeMenu }) => {
    const { user, clearUser } = useContext(userContext)
    const navigate = useNavigate();

    const handleClick = (route) => {
        if (route === "logout") {
            handleLogout();
            return;
        }

        navigate(route)
    };

    const handleLogout = () => {
        if (!window.confirm("Are you sure you want to logout?")) return;

        localStorage.clear();
        clearUser();
        navigate("/login");
    }

    return <div className='w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20'>
        <div className='flex flex-col items-center justify-center gap-3 mt-3 mb-7'>
            {user?.profileImageUrl ? (
                <img
                    src={user.profileImageUrl}
                    alt='Profile Image'
                    className='w-20 h-20 rounded-full object-cover object-center'
                />
            ) : (
                <CharAvatar
                    fullName={user?.fullName}
                    width="w-20"
                    height="h-20"
                    style="text-xl"
                />
            )}


            <h5 className='text-gray-950 font-medium leading-6'>
                {user?.fullName || ""}
            </h5>
        </div>
        {SIDE_MENU_DATA.map((item, index) => (
            <button
                key={`menu_${index}`}
                className={`w-full flex items-center gap-4 text-[15px] transition-all duration-200 ease-in-out ${activeMenu === item.label
                    ? "text-white bg-primary"
                    : "text-slate-700 hover:bg-gray-100"
                    } py-3 px-6 rounded-lg mb-3 cursor-pointer`}
                onClick={() => handleClick(item.path)}
            >

                <item.icon className="text-xl" />
                {item.label}
            </button>
        ))}
    </div >
}

export default SideMenu