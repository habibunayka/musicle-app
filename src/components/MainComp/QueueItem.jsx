

const SongList = ({ title, desc, image }) => {
    return (
        <div className="relative flex flex-row justify-between items-center my-1 p-2.5 rounded-lg hover:bg-[#FFFFFF10] transition-all duration-300 group">
            <div className="flex flex-row items-center">
                <div className="relative bg-gray-500 w-14 h-14 rounded-lg overflow-hidden">
                <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        
                        <img
                            src="http://localhost:5173/assets/icons/play-btn.svg"
                            alt="play"
                            className="w-4 h-4 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center ml-4 gap-1">
                    <div className="text-sm text-white font-medium">
                        {title}
                    </div>
                    <div className="text-sm text-slate-400">{desc}</div>
                </div>
            </div>
        </div>
    );
};

export default SongList;
