import { useParams } from "react-router-dom";
import MusicItem from "../components/ListenComp/MusicItem";
import playlists from "../data/playlist.json";
import Footer from "../layouts/MainLayouts/Footer";

const Playlist = () => {
    const { playlist } = useParams(); 

    const currentPlaylist = playlists.yourPlaylists?.[playlist] || {
        title: "",
        songs: [],
        cover: "",
    };
    const songs = currentPlaylist.songs || []; 

    return (
        <div className="w-full p-4 flex flex-col items-center relative text-white">
            <div
                className="absolute inset-0 bg-cover h-64 bg-center rounded-lg"
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${currentPlaylist.color}60, transparent)`,
                }}
            ></div>
            <div className="w-full flex items-center z-20 mb-8">
                <img
                    src={currentPlaylist.cover}
                    alt={`${playlist} cover`}
                    className="min-w-36 min-h-36 max-w-36 max-h-36 rounded-lg mr-6 bg-gray-400"
                />
                <div className="flex flex-col w-full">
                    <h2 className="text-3xl font-bold mb-2">
                        {currentPlaylist.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-2">
                        {songs.length} Songs
                    </p>
                </div>
                <button className="bg-primary relative text-white p-6 rounded-full h-fit w-fit flex items-center mr-8 top-10">
                    <img
                        src="/assets/icons/play-btn.svg"
                        alt="play"
                        className="w-4 h-4 cursor-pointer"
                    />
                </button>
            </div>

            <div className="w-full rounded-lg">
                <table className="w-full">
                    <thead>
                        <tr className="text-left">
                            <th className="py-2 pl-2">Song</th>
                            <th className="py-2">Album</th>
                            <th className="py-2">Duration</th>
                            <th className="py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song, index) => (
                            <MusicItem
                                key={index}
                                title={song.title}
                                artist={song.artist}
                                album={song.album}
                                duration={song.duration}
                                cover={song.cover}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
};

export default Playlist;
