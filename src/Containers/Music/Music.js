import React, { Component } from "react";
import classes from "./Music.module.css";
import { Container, Row, Col } from "reactstrap";
import YouTube from "react-youtube";
import Gram from "../../Components/Gram/Gram";

class Music extends Component {
  render() {
    const opts = {
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (
      <Container fluid={true} className={classes.musicContainer}>
        <Row>
          <Col sm="12" md={{ size: 3, offset: 1 }}>
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
          </Col>
          <Col sm="12" md={{ size: 4 }}>
            <h4 className={classes.header}>My Music</h4>
            <YouTube
              videoId="AkNrcnvUmL8"
              opts={opts}
              onReady={this._onReady}
            />
          </Col>
          <Col sm="12" md={{ size: 3 }}>
            <h4 className={classes.header}>Photos</h4>
            <Gram />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Music;
