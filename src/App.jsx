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
import Statisctic from "./pages/Statisctic";
import Playlist from "./pages/Playlist"; 
import PlaylistPage from "./pages/PlaylistPage";

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 912);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Router>
            {isMobile && (
                <div className="fixed inset-0 flex items-center font-poppins font-normal justify-center overflow-hidden bg-black bg-opacity-80 z-50">
                    <div className="bg-background p-6 rounded-lg shadow-md text-center">
                        <p className="text-white mb-4">
                            Aplikasi ini tidak mendukung perangkat mobile.
                        </p>
                        <a
                            href="https://habibunayka.com"
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="bg-primary text-white px-4 py-2 rounded"
                        >
                            Download this app
                        </a>
                    </div>
                </div>
            )}
            <div className="flex flex-col justify-between bg-background max-h-screen w-full overflow-hidden font-poppins zoom">
                <div className="flex z-30">
                    <Navbar />
                </div>
                <div className="flex flex-row justify-between overflow-hidden max-h-screen w-full">
                    <Sidebar />
                    <div className="w-full overflow-y-auto overflow-x-hidden">
                        <Routes>
                            <Route path="/" element={<Listen />} /> 
                            <Route path="/statistic" element={<Statisctic />} /> 
                            <Route path="/playlist/" element={<PlaylistPage />} /> 
                            <Route path="/playlist/:playlist" element={<Playlist />} /> 
                        </Routes>
                    </div>
                    <RightSidebar />
                </div>

                <MusicPlayer />
            </div>
        </Router>
    );
}

export default App;
