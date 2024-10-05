import { useState, useEffect } from "react";
import songData from "../../data/song.json";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const results = songData.songs.filter(
            (song) =>
                song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.album.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSongs(results);
    }, [searchTerm]);

    return (
        <div className="w-full h-fit sticky top-0 bg-background">
            <div className="flex flex-row w-full h-fit">
                <div className="flex flex-row rounded-lg items-center bg-[#FFFFFF20] h-full py-2.5 px-3">
                    <img
                        src="/assets/icons/search.svg"
                        alt="search-icon"
                        className="mr-3"
                    />
                    <input
                        type="text"
                        className="border-none h-full w-[550px] text-[15px] text-white bg-transparent focus:outline-none focus:ring-0"
                        placeholder="Search by artists, song, or albums"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </div>
            </div>

            {isFocused && searchTerm && (
                <div className="absolute bg-[#101010] p-4 rounded-lg w-[607px] max-h-60 overflow-y-auto shadow-lg mt-3 z-50 overflow-x-hidden">
                    {filteredSongs.length > 0 ? (
                        filteredSongs.map((song, index) => (
                            <div
                                key={index}
                                className="flex flex-row py-3 px-4 border-b border-gray-500 last:border-none hover:bg-[#FFFFFF10] cursor-pointer group" // Tambahkan cursor-pointer dan group
                            >
                                <div className="relative bg-gray-500 w-14 h-14 rounded-lg overflow-hidden">
                                    <img
                                        src={song.thumbnail} 
                                        alt={`${song.title} thumbnail`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <img
                                            src="./assets/icons/play-btn.svg"
                                            alt="play"
                                            className="w-4 h-4 cursor-pointer"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col ml-3">
                                    <div className="text-white text-sm">
                                        <strong>{song.title}</strong> - {song.artist}
                                    </div>
                                    <div className="text-gray-400 mt-2 text-xs">
                                        {song.album}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-gray-400 text-sm">
                            No results found
                        </div>
                    )}
                </div>
            )}

            {isFocused && !searchTerm && (
                <div className="absolute bg-[#161616] p-4 rounded-lg w-[607px] max-h-60 overflow-y-auto shadow-lg z-30 mt-3 overflow-x-hidden">
                    <div className="text-gray-400 text-sm mb-3 px-4">
                        Recently explored music
                    </div>
                    {songData.songs.slice(0, 5).map((song, index) => (
                        <div
                            key={index}
                            className="flex flex-row py-3 px-4 border-b items-center border-gray-500 hover:bg-[#FFFFFF10] last:border-none cursor-pointer group" // Pastikan ini sama
                        >
                            <div className="relative bg-gray-500 w-14 h-14 rounded-lg overflow-hidden">
                                <img
                                    src={song.thumbnail} 
                                    alt={`${song.title} thumbnail`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <img
                                        src="/assets/icons/play-btn.svg"
                                        alt="play"
                                        className="w-4 h-4 cursor-pointer"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <div className="text-white text-sm">
                                    <strong>{song.title}</strong> - {song.artist}
                                </div>
                                <div className="text-gray-400 mt-2 text-xs">
                                    {song.album}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
