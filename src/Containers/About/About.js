import React, { Component } from "react";
import classes from "./About.module.css";
import Gram from "../../Components/Gram/Gram";

class About extends Component {
  render() {
    return (
      <div className={classes.aboutSection}>
        <div>
          <div className={classes.mainSection}>
            <p className={classes.about}>
              For the last 15 years I've eaten, slept and breathed music, from
              playing in multiple bands to being an all around concert addict
              and everything in between. Ultimately, this led me to Ramapo
              College of New Jersey where I graduated in 2015 with a B.A. in
              Music Production and Audio Engineering. After a few years of
              freelancing around New Jersey it was time for a new challenge.
            </p>
            <p className={classes.about}>
              Realizing my passion for web development, I pivoted career paths,
              enrolled in the Rutgers Coding Bootcamp for Full Stack
              Development, and haven’t looked back. My current pet project is a
              music streaming service geared towards unknown and unsigned local
              bands built in modern javascript (
              <span className={classes.mongo}>MongoDB</span>,
              <span className={classes.express}> Express</span>,
              <span className={classes.react}> React</span>,
              <span className={classes.node}> Node</span>, and
              <span className={classes.graph}> GraphQL</span>) but when I’m not
              working on websites and web apps, you can usually find me in the
              pit singing along to every word of my favorite songs.
            </p>
          </div>
          <div className={classes.photoSection}>
            <Gram className={classes.gram} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
