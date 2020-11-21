import React, { useState} from 'react';
// adding components
import Player from './components/Player';
import Song from './components/Song';
// import styles
import "./styles/app.scss";
// import util
import data from './util'


function App() {
  const [songs, setSongs] = useState(data())
  return (
    <div className="App">
   <Song />
   <Player />
    </div>
  );
}

export default App;
