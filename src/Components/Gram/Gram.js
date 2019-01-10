import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Gram.module.css";
import data from "../PortfolioData/PortfolioData";

class Gram extends Component {
  render() {
    const paths = data.photos;
    return (
      <Carousel showThumbs={false}>
        {paths.map((img, i) => {
          return (
            <div className={classes.photos} key={i}>
              <img src={img} alt="" />
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default Gram;
