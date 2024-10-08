import { useNavigate } from "react-router-dom";
import playlists from "../data/playlist.json";
import Footer from "../layouts/MainLayouts/Footer";

const PlaylistPage = () => {
    const navigate = useNavigate(); 

    return (
        <div className="w-full p-4">
            <h2 className="text-2xl font-bold mb-4 text-white">
                Your Playlists
            </h2>
            <div className="flex overflow-x-auto no-scrollbar space-x-4 mb-8">
                {Object.keys(playlists.yourPlaylists).map((key) => (
                    <div 
                        key={key} 
                        className="flex-shrink-0 w-48 relative"
                        onClick={() => navigate(`/playlist/${playlists.yourPlaylists[key].link}`)}
                        style={{ cursor: "pointer" }}
                    >
                        <div
                            className="rounded-lg overflow-hidden shadow-lg"
                            style={{
                                backgroundColor:
                                    playlists.yourPlaylists[key].color,
                            }}
                        >
                            <img
                                src={playlists.yourPlaylists[key].cover}
                                alt={playlists.yourPlaylists[key].title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute bg-[#00000040] inset-0 flex items-center justify-center">
                                <h3 className="text-xl font-semibold text-white">
                                    {playlists.yourPlaylists[key].title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">Discover</h2>
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                {Object.keys(playlists.discover).map((key) => (
                    <div
                        key={key}
                        className="rounded-lg overflow-hidden h-48 shadow-lg relative cursor-pointer"
                        style={{
                            backgroundColor: playlists.discover[key].color,
                        }}
                    >
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src={playlists.discover[key].cover}
                                alt={playlists.discover[key].title}
                                className="w-36 h-36 absolute overflow-hidden right-0 bottom-0 rotate-[20deg] rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 pt-4 pl-4 flex items-start justify-start">
                                <h3 className="text-xl font-semibold text-white">
                                    {playlists.discover[key].title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default PlaylistPage;
