import React, { Component } from "react";
import classes from "./Resume.module.css";
import { Container, Row, Col } from "reactstrap";

class Resume extends Component {
  render() {
    return (
      <Container fluid={true} className={classes.resumeContainer}>
        <Row>
          <Col
            sm="12"
            md={{ size: 8, offset: 2 }}
            className={classes.pdfContainer}
          >
            <h2 className={classes.header}>Resume</h2>
            <embed
              src={require("../../assets/resume.pdf")}
              alt="pdf"
              pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"
              className={classes.pdf}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Resume;
