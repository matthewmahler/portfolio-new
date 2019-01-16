import React, { Component } from "react";
import classes from "./Resume.module.css";

class Resume extends Component {
  render() {
    return (
      <div className={classes.resumeContainer}>
        <div>
          <div className={classes.pdfContainer}>
            <h2 className={classes.header}>Resume</h2>
            <embed
              src={require("../../assets/Matthew Mahler Resume 2019.pdf")}
              alt="pdf"
              pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"
              className={classes.pdf}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
