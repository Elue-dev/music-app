import React from 'react';


const LibrarySong = ({song}) => {
    return (
        <div className="librarys-ong">
          <img src={song.cover} alt=""></img> 
    <h3>{song.name}</h3>
    <h4>{song.artist}</h4>
        </div>
    )
}


export default LibrarySong