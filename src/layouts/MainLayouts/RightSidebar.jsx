import SongItem from '../../components/MainComp/QueueItem'

const RightSidebar = ({ currentSongIndex, songs }) => {
    const currentSong = songs[currentSongIndex]; 

    return (
        <div className="relative flex flex-col overflow-x-auto pb-44 -mt-4 pl-2 pr-4 h-screen min-w-[360px] max-w-80 text-white">
            <div className="flex flex-col items-center px-4 mb-6">
                <div className="w-full mt-4 mb-6 h-72 bg-gray-600 rounded-lg">
                    <img
                        src={currentSong.image}
                        alt="Album Cover"
                        className="rounded-md w-full h-auto object-cover mb-4"
                    />
                </div>
                <div className="text-left w-full mt-4">
                    <h2 className="text-xl font-semibold">{currentSong.title}</h2>
                    <p className="text-slate-400 text-md">{currentSong.artist}</p>
                </div>
            </div>

            <div className="flex flex-col mt-2">
                <div className="flex flex-row justify-between px-4 mb-2">
                    <div className="text-slate-400 text-sm">Next in Queue</div>
                    <div className="text-primary text-sm cursor-pointer">
                        Show all
                    </div>
                </div>

                <div className="flex flex-col px-4 space-y-1">
                    {songs.map((song, index) => (
                        <SongItem
                            key={index}
                            title={song.title}
                            desc={song.desc}
                            image={song.image} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
