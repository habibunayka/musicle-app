import { useState } from "react";

const SidebarBtn = ({ name, icon, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const isButtonActive = isActive || isHovered;

    return (
        <div
            className="relative flex flex-row items-center py-4 w-fit cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={isButtonActive ? `${icon}-active.svg` : `${icon}.svg`}
                alt=""
                className="w-6 h-6 ml-2 transition-all duration-300"
            />

            <div
                className={`${
                    isButtonActive ? "text-primary" : "text-white"
                } text-sm ml-4 transition-all duration-300`}
            >
                {name}
            </div>
        </div>
    );
};

export default SidebarBtn;
