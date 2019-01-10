import React, { Component } from "react";
import classes from "./Portfolio.module.css";
import { Container, Row, Col, Card } from "reactstrap";
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
      <Container fluid={true} className={classes.portfolioContainer}>
        <Row>
          <Col md={{ size: 12 }}>
            <h1 className={classes.header}>Projects</h1>
          </Col>

          <Col
            sm="12"
            md={{ size: 5, offset: 1 }}
            className={`${classes.leftSection} "py-2"`}
          >
            {this.state.projects.map((project, i) => {
              return (
                <Card
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
                </Card>
              );
            })}
          </Col>

          <Col
            sm="12"
            md={{ size: 5 }}
            className={`${classes.rightSection} "py-2"`}
          >
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
            <Row>
              <Col sm="12" md={{ size: 6 }}>
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
              </Col>
              <Col sm="12" md={{ size: 6 }}>
                <p className={classes.description}>
                  {this.state.projects[this.state.selected].description}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
