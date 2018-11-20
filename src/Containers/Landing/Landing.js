import React, { Component } from "react";
import classes from "./Landing.module.css";
import { Container, Row, Col } from "reactstrap";

class Landing extends Component {
  render() {
    return (
      <Container fluid={true} className={classes.aboutSection}>
        <Row>
          <Col
            sm="12"
            md={{ size: 5, offset: 1 }}
            className={classes.mainSection}
          >
            <h1 className={classes.bigTagline}>I am a</h1>
          </Col>
          <Col sm="12" md={{ size: 5 }} className={classes.mainSection}>
            <span className={classes.tagline}>Music Producer,</span>
            <span className={classes.tagline}>Audio Engineer,</span>
            <span className={classes.tagline}>Multi-Instrumentalist</span>
            <span className={classes.tagline}>turned</span>
            <span className={classes.tagline}>Full Stack Web Developer</span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
