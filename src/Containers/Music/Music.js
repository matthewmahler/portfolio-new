import React, { Component } from "react";
import classes from "./Music.module.css";
import YouTube from "react-youtube";

class Music extends Component {
  render() {
    const opts = {
      width: "100%",
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <div>
        <div>
          <div>
            <h4 className={classes.header}>What I'm Listening To</h4>
            <iframe
              title="Addicted"
              src="https://open.spotify.com/embed/user/1225470066/playlist/1uDtA4L029Cv2Jp4ZIKaKT"
              width="100%"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </div>
          <div>
            <h4 className={classes.header}>My Music</h4>
            <YouTube
              videoId="AkNrcnvUmL8"
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Music;
