import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import SidebarBtn from "../../components/MainComp/SidebarBtn";
import SidebarPlaylistBtn from "../../components/MainComp/SidebarPlaylistBtn";

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const activeBtnRef = useRef(null);

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

    const playlistData = [
        {
            name: "Love Song",
            icon: "bg-red-500",
            path: "/playlist/love-song",
        },
        {
            name: "Gaming Mode",
            icon: "bg-green-500",
            path: "/playlist/gaming-mode",
        },
        {
            name: "Fanny Sad",
            icon: "bg-blue-500",
            path: "/playlist/fanny-sad",
        },
        // {
        //     name: "Coding Vibes",
        //     icon: "bg-yellow-500",
        //     path: "/playlist/coding-vibes",
        // },
        {
            name: "Japanese Song",
            icon: "bg-japanese",
            path: "/playlist/japanese-song",
        },
    ];

    const allData = [...btnData, ...playlistData];

    const activeIndex = allData.findIndex((btn) => btn.path === currentPath);

    const [hoverPosition, setHoverPosition] = useState(0);

    useEffect(() => {
        if (activeBtnRef.current) {
            const { top } = activeBtnRef.current.getBoundingClientRect();
            setHoverPosition(top - 95);
        }
    }, [currentPath]);

    const handleButtonClick = (index, e) => {
        const { top } = e.currentTarget.getBoundingClientRect();
        setHoverPosition(top - 95);
    };

    return (
        <div className="relative flex flex-col pt-[22px] overflow-x-hidden pl-8 h-screen min-w-64 max-w-64">

            <div
                className="absolute left-0 top-0 bottom-0 w-1 h-10 mt-2 bg-primary transition-transform duration-300"
                style={{
                    transform: `translateY(${hoverPosition}px)`,
                    opacity: activeIndex !== -1 ? 1 : 0,
                }}
            ></div>

            <div
                className="absolute -left-7 top-0 bottom-0 w-16 h-10 mt-2 bg-gradient-to-r from-primary50 to-transparent transition-all duration-300"
                style={{
                    transform: `translateY(${hoverPosition}px)`,
                    opacity: activeIndex !== -1 ? 1 : 0,
                    zIndex: 10,
                }}
            ></div>

            {btnData.map((order, index) => (
                <Link
                    to={order.path}
                    key={index}
                    ref={currentPath === order.path ? activeBtnRef : null}
                    onClick={(e) => handleButtonClick(index, e)}
                >
                    <SidebarBtn
                        key={index}
                        name={order.name}
                        icon={order.icon}
                        isActive={currentPath === order.path}
                    />
                </Link>
            ))}

            <div className="mt-10 mb-1 text-base text-slate-400 font-medium">
                Your Playlist
            </div>

            {playlistData.map((order, index) => (
                <Link
                    to={order.path}
                    key={index + playlistData.length}
                    ref={currentPath === order.path ? activeBtnRef : null}
                    onClick={(e) => handleButtonClick(index + btnData.length, e)}
                >
                    <SidebarPlaylistBtn
                        key={index + playlistData.length}
                        name={order.name}
                        icon={order.icon}
                        isActive={currentPath === order.path}
                    />
                </Link>
            ))}

        </div>
    );
};

export default Sidebar;
