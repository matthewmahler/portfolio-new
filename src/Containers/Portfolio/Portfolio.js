import React, { Component } from "react";
import classes from "./Portfolio.module.css";
import data from "../../Components/PortfolioData/PortfolioData";

class Portfolio extends Component {
  state = {
    selected: 0,
    projects: data.projects
  };

  selectProject = key => {
    this.setState({
      selected: key
    });
  };

  render() {
    return (
      <div className={classes.portfolioContainer}>
        <div>
          <div>
            <h1 className={classes.header}>Projects</h1>
          </div>

          <div>
            {this.state.projects.map((project, i) => {
              return (
                <div
                  className={classes.card}
                  key={i}
                  onClick={() => this.selectProject(i)}
                >
                  <img
                    src={project.path}
                    className={
                      this.state.selected === i
                        ? `${classes.highlight} ${classes.tile}`
                        : classes.tile
                    }
                    alt=""
                  />
                  <h4 className={classes.cardTitle}>{project.title}</h4>
                </div>
              );
            })}
          </div>

          <div>
            <a
              className={classes.link}
              href={this.state.projects[this.state.selected].link}
              target="_"
            >
              <h2 className={classes.projectTitle}>
                {this.state.projects[this.state.selected].title}
              </h2>
            </a>
            <h3 className={classes.projectSubtitle}>
              {this.state.projects[this.state.selected].subTitle}
            </h3>
            <div>
              <div>
                <ul className={classes.techList}>
                  <li className={classes.techListTitle}>Technologies Used:</li>
                  {this.state.projects[this.state.selected].techList.map(
                    (tech, i) => {
                      return (
                        <li className={classes.techItem} key={i}>
                          {tech}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
              <div>
                <p className={classes.description}>
                  {this.state.projects[this.state.selected].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
