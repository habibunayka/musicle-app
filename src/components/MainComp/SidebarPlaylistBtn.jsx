import { useState } from "react";

const SidebarPlaylistBtn = ({ name, icon, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const isButtonActive = isActive || isHovered;

    return (
        <div
            className="relative flex flex-row items-center h-[55px] py-5 justify-center w-fit cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`h-3 w-3 ml-3 rounded-full ${icon}`}></div>

            <div
                className={`${
                    isButtonActive ? "text-primary" : "text-white"
                } text-xs md:text-sm ml-4 transition-all duration-300`}
            >
                {name}
            </div>
        </div>
    );
};

export default SidebarPlaylistBtn;
