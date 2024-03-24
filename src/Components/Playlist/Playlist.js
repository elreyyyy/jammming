import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {

  return (
    <div className={styles.Playlist}>
      {/* <!-- Add a TrackList component --> */}
      <Tracklist
        userSearchResults={props.playlistTracks}
      />

    </div>
  );
}

export default Playlist;