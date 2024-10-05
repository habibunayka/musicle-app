import React from "react";
import PlaylistItem from "../../components/ListenComp/PlaylistItem";
import MusicItem from "../../components/ListenComp/MusicItem";
import Footer from "../MainLayouts/Footer";

const playlistData = [
    {
        title: "New Year Celebration",
        desc: "52 Songs • 7h 12m",
        date: "01 January 2024",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c9968f8cb346f6e04f6cbf7b2"
    },
    {
        title: "Valentine Vibes",
        desc: "44 Songs • 6h 20m",
        date: "14 February 2023",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8407774eb80bf59d69c1178f44"

    },
    {
        title: "Summer Chill",
        desc: "50 Songs • 5h 45m",
        date: "15 July 2023",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8410fcf8aa28507ffa4cd090bc"

    },
    {
        title: "Winter Wonderland",
        desc: "30 Songs • 4h 10m",
        date: "25 December 2023",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c3677c0bab9a3058d877f3d5a"
    },
];

const songData = [
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        duration: "4:23",
        thumbnail: "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
        audio: "./assets/audios/perfect.mp3"
    },
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        duration: "3:20",
        thumbnail: "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
        audio: "./assets/audios/blinding-lights.mp3"
    },
    {
        title: "Stay",
        artist: "The Kid LAROI, Justin Bieber",
        album: "÷ F*CK LOVE 3: OVER YOU",
        duration: "2:21",
        thumbnail: "https://i.scdn.co/image/ab67616d00001e0241e31d6ea1d493dd77933ee5",
        audio: "./assets/audios/shape-of-you.mp3"
    },
    {
        title: "Someone You Loved",
        artist: "Lewis Capaldi",
        album: "Divinely Uninspired to a Hellish Extent",
        duration: "3:02",
        thumbnail: "https://i.scdn.co/image/ab67616d00001e02fc2101e6889d6ce9025f85f2",
        audio: "./assets/audios/someone-you-loved.mp3"
    }
];


const Playlists = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <h2 className="text-primary font-medium text-2xl">
                        Maybe You Like
                    </h2>
                    <h4 className="text-slate-400 font-medium text-md mb-4">
                        Based on Your Playlist
                    </h4>
                </div>
                <div className="text-primary font-medium text-md mr-10 cursor-pointer">See All</div>
            </div>

            <table className="w-full table-auto text-left">
                <thead className="mb-4">
                    <tr>
                        <th className="text-slate-400 font-medium text-md pl-2">Title</th>
                        <th className="text-slate-400 font-medium text-md">Description</th>
                        <th className="text-slate-400 font-medium text-md">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {playlistData.map((song, index) => (
                        <PlaylistItem
                            key={index}
                            title={song.title}
                            desc={song.desc}
                            date={song.date}
                            cover={song.cover}
                            
                        />
                    ))}
                </tbody>
            </table>

            <div className="mt-8">
                <h3 className="text-primary font-medium text-2xl">Recommended Music</h3>
                <h4 className="text-slate-400 font-medium text-md mb-4">
                    Based on Your Music
                </h4>
                <table className="w-full table-auto text-left">
                    <thead className="mb-4">
                        <tr>
                            <th className="text-slate-400 font-medium text-md pl-2">Title</th>
                            <th className="text-slate-400 font-medium text-md">Album</th>
                            <th className="text-slate-400 font-medium text-md">Duration</th>
                            <th className="text-slate-400 font-medium text-md"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {songData.map((song, index) => (
                            <MusicItem
                                key={index}
                                title={song.title}
                                artist={song.artist}
                                album={song.album}
                                duration={song.duration}
                                cover={song.thumbnail}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
};

export default Playlists;
