import React, { Component } from "react";
import classes from "./About.module.css";
import { Container, Row, Col } from "reactstrap";
import Gram from "../../Components/Gram/Gram";

class About extends Component {
  render() {
    return (
      <Container fluid={true} className={classes.aboutSection}>
        <Row>
          <Col
            sm="12"
            md={{ size: 5, offset: 1 }}
            className={classes.mainSection}
          >
            <p className={classes.about}>
              For the last 15 years I've eaten, slept and breathed music, from
              playing in multiple bands to being an all around concert addict
              and everything in between. Ultimately, this led me to Ramapo
              College of New Jersey where I graduated in 2015 with a B.A. in
              Music Production and Audio Engineering. after a few years of
              freelancing around New Jersey it was time for a change.
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
              pit screaming every word of my favorite songs.
            </p>
          </Col>
          <Col
            sm="12"
            md={{ size: 4, offset: 1 }}
            className={classes.photoSection}
          >
            <Gram className={classes.gram} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
