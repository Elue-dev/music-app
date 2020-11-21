import React from 'react';


const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) => {
   const songSelectHandler = () => {
       setCurrentSong(song)
    //    add active state
    
    //    check if the song is playing
    if(isPlaying){
        const playPromise = audioRef.current.play();
        if(isPlaying !== undefined){
            playPromise.then((audio) => {
                audioRef.current.play();
            });
        }
    }
   }


    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
          <img src={song.cover} alt=""></img> 
          <div className="song-description">
    <h3>{song.name}</h3>
    <h4>{song.artist}</h4>
    </div>
        </div>
    )
}


export default LibrarySong