import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Sidebar from "./layouts/MainLayouts/Sidebar";
import Listen from "./pages/Listen";
import RightSidebar from "./layouts/MainLayouts/RightSidebar";
import MusicPlayer from "./layouts/MainLayouts/MusicPlayer";
import Navbar from "./layouts/MainLayouts/Navbar";
import Statistic from "./pages/Statistic";
import Playlist from "./pages/Playlist";
import PlaylistPage from "./pages/PlaylistPage";
import MobileNavbar from "./layouts/MainLayouts/MobileNavbar";

function App() {
    
    const [songs] = useState([
        {
            title: "Can I Be Him",
            artist: "James Arthur",
            src: "/assets/music/Can-I-Be-Him.mp3",
            image: "https://i.scdn.co/image/ab67616d00001e0220beb61f61fcbeb33b10a9ab",
        },
        {
            title: "HELPP!!!",
            artist: "Kobo Kanaeru",
            src: "/assets/music/help.mp3",
            image: "https://i.scdn.co/image/ab67616d00001e02e0c4007daaad3c26ce9090e9",
        },
        {
            title: "Someone You Loved",
            artist: "Lewis Capaldi",
            src: "/assets/music/someone-you-loved.mp3",
            image: "https://i.scdn.co/image/ab67616d00001e02fc2101e6889d6ce9025f85f2",
        },
    ]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0); 
    
    return (
        <Router>
            <div className="flex flex-col justify-between bg-background max-h-screen w-full overflow-hidden font-poppins zoom">
                <div className="flex z-30">
                    <Navbar />
                </div>
                <div className="flex flex-row justify-between overflow-hidden max-h-screen w-full">
                    <Sidebar />
                    <div className="w-full overflow-y-auto overflow-x-hidden">
                        <Routes>
                            <Route path="/" element={<Listen />} />
                            <Route path="/statistic" element={<Statistic />} />
                            <Route path="/playlist/" element={<PlaylistPage />} />
                            <Route path="/playlist/:playlist" element={<Playlist />} />
                        </Routes>
                    </div>
                    <RightSidebar
                        currentSongIndex={currentSongIndex}
                        songs={songs}
                    />
                </div>
                
                <MusicPlayer
                    currentSongIndex={currentSongIndex}
                    setCurrentSongIndex={setCurrentSongIndex}
                    songs={songs}
                />
                <MobileNavbar/>
            </div>
        </Router>
    );
}

export default App;
