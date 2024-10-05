import { useState, useEffect, useRef } from "react";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);
    const duration = 246; 

    const songs = [
        { title: "Can I Be Him", artist: "James Arthur", src: "/assets/music/Can-I-Be-Him.mp3" },
    ];

    const [currentSongIndex, setCurrentSongIndex] = useState(0); 

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress < 100) {
                        return prevProgress + (100 / duration);
                    } else {
                        clearInterval(interval);
                        return 100;
                    }
                });
            }, 1000);
        } else if (!isPlaying && progress > 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying, duration]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const handleSeek = (e) => {
        const { clientX } = e;
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const offsetX = clientX - left;
        const newProgress = Math.min(Math.max((offsetX / width) * 100, 0), 100);
        setProgress(newProgress);
        audioRef.current.currentTime = (newProgress / 100) * duration;
    };

    const handlePrevious = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
        resetPlayer();
    };

    const handleNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
        resetPlayer();
    };

    const resetPlayer = () => {
        setProgress(0); 
        audioRef.current.currentTime = 0; 
        if (isPlaying) {
            audioRef.current.play(); 
        } else {
            audioRef.current.pause();
        }
    };

    useEffect(() => {
        audioRef.current.src = songs[currentSongIndex].src;
        resetPlayer(); 
    }, [currentSongIndex]);

    return (
        <div className="flex flex-row justify-between items-center bg-secondary w-full p-4 text-white">
            <audio
                ref={audioRef}
                onEnded={() => setIsPlaying(false)}
            />
            
            <div className="flex flex-row items-center w-64">
                <div className="w-14 h-14 bg-gray-500 rounded-md overflow-hidden">
                    <img
                        src={`https://i.scdn.co/image/ab67616d00001e0220beb61f61fcbeb33b10a9ab`} 
                        alt="Song Thumbnail"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="ml-4 mr-5 h-full flex gap-1 justify-center flex-col">
                    <span className="font-semibold text-sm">{songs[currentSongIndex].title}</span>
                    <span className="text-xs text-gray-400">{songs[currentSongIndex].artist}</span>
                </div>
            </div>

            <div className="flex flex-col w-[550px] mx-6">
                <div className="flex flex-row items-center justify-center gap-6">
                    <button onClick={handlePrevious} className="text-xl hover:text-gray-400">
                        <img
                            src="/assets/icons/previous.svg" 
                            alt="Previous"
                            className="h-4"
                        />
                    </button>
                    <button
                        onClick={togglePlayPause}
                        className="hover:text-gray-400"
                    >
                        <img
                            src={`/assets/icons/${isPlaying ? "pause-btn" : "play-btn"}.svg`}
                            alt="Play/Pause"
                            className="h-6"
                        />
                    </button>
                    <button onClick={handleNext} className="text-xl hover:text-gray-400">
                        <img
                            src="/assets/icons/next.svg"
                            alt="Next"
                            className="h-4"
                        />
                    </button>
                </div>

                <div className="flex justify-between text-xs">
                    <span>{formatTime((progress / 100) * duration)}</span>
                    <span>{formatTime(duration)}</span> 
                </div>
                <div
                    className="relative w-full h-1 bg-gray-600 rounded-full mt-1 cursor-pointer"
                    onMouseDown={(e) => handleSeek(e)}
                    onTouchStart={(e) => handleSeek(e.touches[0])}
                >
                    <div
                        className="absolute h-1 bg-primary rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="flex flex-row w-64 items-center justify-end gap-2">
                <button className="text-xl hover:text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                    >
                        <path d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm11.008 2.093c.742.743 1.2 1.77 1.198 2.903-.002 1.133-.462 2.158-1.205 2.9l1.219 1.223c1.057-1.053 1.712-2.511 1.715-4.121.002-1.611-.648-3.068-1.702-4.125l-1.225 1.22zm2.142-2.135c1.288 1.292 2.082 3.073 2.079 5.041s-.804 3.75-2.096 5.039l1.25 1.254c1.612-1.608 2.613-3.834 2.616-6.291.005-2.457-.986-4.681-2.595-6.293l-1.254 1.25z" />
                    </svg>
                </button>
                <div className="relative w-32 h-1 bg-gray-600 rounded-full">
                    <div
                        className="absolute h-1 bg-primary rounded-full"
                        style={{ width: "60%" }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
