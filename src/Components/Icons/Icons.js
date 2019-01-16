import React, { Component } from "react";
import classes from "./Icons.module.css";
class Icons extends Component {
  render() {
    const iconData = [
      {
        offset: 1,
        name: "linkedin",
        classes: "fa fa-linkedin fa-4x",
        link: "https://www.linkedin.com/in/matthew-mahler-09003a163/"
      },
      {
        offset: 0,
        name: "github",
        classes: "fa fa-github fa-4x",
        link: "https://www.linkedin.com/in/matthew-mahler-09003a163/"
      },
      {
        offset: 0,
        name: "facebook",
        classes: "fa fa-facebook fa-4x",
        link: "https://www.linkedin.com/in/matthew-mahler-09003a163/"
      },
      {
        offset: 0,
        name: "instagram",
        classes: "fa fa-instagram fa-4x",
        link: "https://www.linkedin.com/in/matthew-mahler-09003a163/"
      },
      {
        offset: 0,
        name: "spotify",
        classes: "fa fa-spotify fa-4x",
        link: "https://www.linkedin.com/in/matthew-mahler-09003a163/"
      }
    ];

    return (
      <div>
        {iconData.map((icon, i) => {
          return (
            <a
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className={classes[icon.name]}
            >
              <i className={icon.classes} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    );
  }
}

export default Icons;
