import React, { Component } from "react";
import classes from "./Contact.module.css";
import { Container, Row, Col } from "reactstrap";
import Icons from "../../Components/Icons/Icons";

class Contact extends Component {
  render() {
    return (
      <Container fluid={true} className={classes.contactContainer}>
        <Row>
          <Col
            sm="12"
            md={{ size: 4, offset: 4 }}
            className={classes.leftSection}
          >
            <h2 className={classes.header}>Contact Me</h2>
            <span className={classes.address}>Matthew James Mahler</span>
            <span className={classes.address}> 56 Laidlaw Ave </span>
            <span className={classes.address}> Jersey City, NJ 07306</span>
            <span className={classes.address}>
              matthewjamesmahler@gmail.com
            </span>
            <span className={classes.address}> 908-217-1194</span>
            <Icons />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
