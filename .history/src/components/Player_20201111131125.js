import React, {useEffect} from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,
    faPause,
    faAngleLeft,
    faAngleRight } from '@fortawesome/free-solid-svg-icons';
   

const Player = ({audioRef,
    currentSong,
    isPlaying,
    setIsPlaying,
    setSongInfo,
    setSongs,
    songInfo,
    songs,
    setCurrentSong,
}) => {
    //useeffect

    useEffect(() => {
        const newSongs = songs.map((song) => {
            if(song.id === currentSong.id){
                return{
                    ...song,
                    active: true
                }
            }else{
                return{
                    ...song,
                    active: false
                };
            }
        });
        setSongs(newSongs)
    },[currentSong])
   
    // event handlers
    const playSongHandler = () => {
if(isPlaying) {
    audioRef.current.pause();
    setIsPlaying(!isPlaying);
}else{
    audioRef.current.play();
    setIsPlaying(!isPlaying);
}
    };
    // add the styles
    const trackAnime = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
   
const getTime = (time) => {
    return(
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) 
    );
};
const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo( {...songInfo, currentTime: e.target.value});

}

const skipTrackHandler = async (direction) => {
let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
if(direction === 'skip-forward')  {
 await  setCurrentSong(songs[(currentIndex + 1) % songs.length]);
}
if(direction === 'skip-back')  {
    if((currentIndex - 1) % songs.length === -1){
        setCurrentSong(songs[songs.length - 1]);
        if(isPlaying) audioRef.current.play();
        return;
    }
    setCurrentSong(songs[(currentIndex - 1)  % songs.length]);
}
if(isPlaying) audioRef.current.play();
};
   
    
 


    return (
        <div className="player">
          <div className="time-control">
    <p>{getTime(songInfo.currentTime)}</p>
    <div style={{
        backgroundColor: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
        }} className="track">
              <input min={0}
              max={songInfo.duration || 0}
              onChange={dragHandler}
              value={songInfo.currentTime}
              type="range" />
              <div style={trackAnime} className="animate-track"></div>
              </div>
              
              <p>{songInfo.duration ? getTime(songInfo.duration) : "0.00"}</p>
          </div>
          <div className="play-control">
              <FontAwesomeIcon
              onClick={() => skipTrackHandler('skip-back')}
              className="skip-back"
              size="2x"
              icon={faAngleLeft} />

              <FontAwesomeIcon
              onClick={playSongHandler}
              className="play"
              size="2x"
              icon={isPlaying ? faPause : faPlay} />

              <FontAwesomeIcon
              onClick={() => skipTrackHandler('skip-forward')}
              className="skip-forward"
              size="2x"
              icon={faAngleRight} />

          </div>
         </div>
    );
}


export default Player