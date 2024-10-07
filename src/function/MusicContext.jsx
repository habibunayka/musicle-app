import React, { createContext, useState } from "react";

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <MusicPlayerContext.Provider
            value={{ currentSong, setCurrentSong, isPlaying, setIsPlaying }}
        >
            {children}
        </MusicPlayerContext.Provider>
    );
};
