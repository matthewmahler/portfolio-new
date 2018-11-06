import React, { Component } from "react";
import classes from "./Portfolio.module.css";
import { Container, Row, Col } from "reactstrap";

class Portfolio extends Component {
  render() {
    return (
      <Container fluid="true">
        <Row>
          <Col
            sm="12"
            md={{ size: 5, offset: 1 }}
            className={classes.leftSection}
          >
            Left Content here
          </Col>
          <Col sm="12" md={{ size: 5 }} className={classes.rightSection}>
            Right section here
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
