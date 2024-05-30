import { useState } from 'react';
import './HomePage.css';

function DomePage() {
  // State for the playlist
  const [playlist, setPlaylist] = useState([
    { id: 1, title: 'Song 1', src: 'song1.mp3', artist: 'Artist 1' },
    { id: 2, title: 'Song 2', src: 'song2.mp3', artist: 'Artist 2' },
    { id: 3, title: 'Song 3', src: 'song3.mp3', artist: 'Artist 3' },
    // Add more songs as needed
  ]);

  const [audioSrc, setAudioSrc] = useState('');

  // Function to add a new song to the playlist
  const addSongToPlaylist = () => {
    const newSong = { id: playlist.length + 1, title: 'New Song', src: 'newSong.mp3', artist: 'New Artist' };
    setPlaylist([...playlist, newSong]);
  };

  const playSong = (src) => {
    setAudioSrc(src);
  };

  return (
    <>
      <div className="big-container">
        {playlist.map((song) => (
          <div className={`song-box${song.id}`} key={song.id}>
            <div className={`card-${song.id}`} />
            <div className="cont">
              <div className="song" onClick={() => playSong(song.src)}>{song.title}</div>
              <marquee>
                <div className="art">{song.artist}</div>
              </marquee>
            </div>
          </div>
        ))}
      </div>
      <audio src={audioSrc} controls autoPlay />
      <header>
        <div className="circ">
          <i className="fa-solid fa-s fa-3x" />
        </div>
        <div className="head-in">Music</div>
        <div className="head-in1">Podcast</div>
      </header>
      <footer>
        <div className="home">
          <i className="fa-solid fa-house fa-2x" />
          <br />
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass fa-2x" />
        </div>
        <div className="library">
          <i className="fa-solid fa-list fa-2x" />
        </div>
        <div className="premium">
          <i className="fa-brands fa-spotify fa-2x" />
        </div>
        <button onClick={addSongToPlaylist}>Add Song</button>
      </footer>
    </>
  );
}

export default DomePage;
