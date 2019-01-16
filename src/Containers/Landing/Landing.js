import React, { Component } from "react";
import classes from "./Landing.module.css";

class Landing extends Component {
  render() {
    return (
      <div className={classes.aboutSection}>
        <div>
          <div className={classes.mainSection}>
            <h1 className={classes.bigTagline}>I am a</h1>
          </div>
          <div className={classes.mainSection}>
            <span className={classes.tagline}>Music Producer,</span>
            <span className={classes.tagline}>Audio Engineer,</span>
            <span className={classes.tagline}>Multi-Instrumentalist</span>
            <span className={classes.tagline}>turned</span>
            <span className={classes.tagline}>Full Stack Web Developer</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
