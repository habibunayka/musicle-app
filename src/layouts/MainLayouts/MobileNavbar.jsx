import React, { useState } from "react";

const MobileNavbar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const btnData = [
        {
            name: "Listen",
            icon: "/assets/icons/listen",
            path: "/",
        },
        {
            name: "Playlist",
            icon: "/assets/icons/playlist",
            path: "/playlist",
        },
        {
            name: "Statistic",
            icon: "/assets/icons/statistic",
            path: "/statistic",
        },
    ];

    return (
        <div className="flex flex-row lg:hidden bottom-0 bg-background justify-evenly w-full p-4">
            {btnData.map((data, index) => {
                const isButtonActive = hoveredIndex === index;

                return (
                    <div
                        key={index}
                        className="relative flex flex-col items-center justify-center w-fit cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={
                                isButtonActive
                                    ? `${data.icon}-active.svg`
                                    : `${data.icon}.svg`
                            }
                            alt={data.name}
                            className="w-6 h-6 transition-all duration-300"
                            />

                            <div
                                className={`${
                                    isButtonActive ? "text-primary" : "text-white"
                                } text-xs md:text-sm transition-all duration-300`}
                            >
                                {data.name}
                            </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MobileNavbar;
