import { useState } from "react";

const PlaylistItem = ({ title, desc, date, cover }) => {
    const [isOptionOpen, setIsOptionOpen] = useState(false);

    const toggleOption = () => {
        setIsOptionOpen(!isOptionOpen);
    };

    return (
        <tr className="group hover:bg-[#FFFFFF10] transition-all duration-300 relative">
            <td className="w-[300px] lg:w-[400px] py-2 pl-2">
                <div className="flex flex-row items-center">
                    <div className="relative bg-gray-500 w-14 h-14 rounded-lg overflow-hidden">
                        <img
                            src={cover}
                            alt={`${title} cover`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <img
                                src="./assets/icons/play-btn.svg"
                                alt="play"
                                className="w-4 h-4 cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="text-sm md:text-md text-white ml-4 cursor-pointer">
                        {title}
                    </div>
                </div>
            </td>

            <td className="py-2 text-xs md:text-sm text-left text-slate-400">{desc}</td>
            <td className="py-2 text-xs md:text-sm text-left text-slate-400">{date}</td>

            <td className="py-2 text-right relative">
                <div
                    className="text-white flex pr-4 justify-end hover:text-red-500 transition-all cursor-pointer"
                    onClick={toggleOption}
                >
                    <img
                        src={"./assets/icons/option.svg"}
                        alt="option"
                        className="w-5 h-3"
                    />
                </div>

                {isOptionOpen && (
                    <div className="absolute right-0 mt-2 w-44 z-50 bg-background text-white rounded-lg overflow-hidden border-secondary border-4 shadow-lg">
                        <ul className="text-xs md:text-sm">
                            <li
                                className="px-4 py-2 hover:bg-secondary cursor-pointer"
                                onClick={toggleOption}
                            >
                                Favourite
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-secondary cursor-pointer"
                                onClick={toggleOption}
                            >
                                Add to Playlist
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-secondary cursor-pointer"
                                onClick={toggleOption}
                            >
                                Add to Queue
                            </li>
                        </ul>
                    </div>
                )}
            </td>
        </tr>
    );
};

export default PlaylistItem;
