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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              varius augue vestibulum nisl dignissim fringilla. Duis vestibulum
              purus sapien, nec ultricies enim maximus ac. Sed tincidunt tortor
              non dui imperdiet dignissim. Vestibulum vel mattis lectus. Integer
              dignissim ante libero, nec porttitor ex auctor sit amet.
            </p>
            <p className={classes.about}>
              Nulla egestas venenatis tincidunt. Suspendisse ullamcorper augue
              eget massa iaculis ultrices. Suspendisse potenti. Nunc consectetur
              a nulla a commodo. Donec consequat in ligula sed blandit. Etiam eu
              malesuada tellus, eget malesuada orci. Morbi consectetur libero
              justo, vel pellentesque velit ultricies quis. Integer in fringilla
              arcu. sapien nibh.
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
