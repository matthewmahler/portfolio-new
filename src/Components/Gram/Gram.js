import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Gram.module.css";

class Gram extends Component {
  render() {
    const paths = [
      require("../../assets/44874029_10213407095995180_6113696503438508032_o.jpg"),
      require("../../assets/40403719_10213026852449329_5886796151444733952_n.jpg"),
      require("../../assets/39920006_10212983652289352_4095213027102556160_o.jpg"),
      require("../../assets/35882953_10212573611718594_5248738107758477312_n.jpg"),
      require("../../assets/34635621_10212476639694354_7780732272050700288_n (2).jpg"),
      require("../../assets/34117643_10212433357172318_7572579435124097024_n.jpg"),
      require("../../assets/19620521_10209987102697485_5226421796081044663_o.jpg")
    ];
    return (
      <Carousel showThumbs={false}>
        {paths.map((img, i) => {
          return (
            <div className={classes.photos}>
              <img src={img} alt="" />
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default Gram;
