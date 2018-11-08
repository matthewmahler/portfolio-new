import React, { Component } from "react";
import classes from "./Portfolio.module.css";
import { Container, Row, Col, Card } from "reactstrap";

class Portfolio extends Component {
  state = {
    selected: 0,
    projects: [
      {
        title: "Overlynics",
        subTitle: "A Statistical Tracker for Blizzard's Overwatch",
        path: require("../../assets/Overwatch_circle_logo.svg.ce34116f.png"),
        techList: [
          "Axios",
          "Bcrypt-Nodejs",
          "Body-Parser",
          "Dotenv",
          "Express.js",
          "Mongoose",
          "Passport.js",
          "React-Vis",
          "Nodemon",
          "React.js",
          "JSX",
          "HTML5",
          "CSS3",
          "Node.js",
          "MongoDB"
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius augue vestibulum nisl dignissim fringilla. Duis vestibulum purus sapien, nec ultricies enim maximus ac. Sed tincidunt tortor non dui imperdiet dignissim. Vestibulum vel mattis lectus. Integer dignissim ante libero, nec porttitor ex auctor sit amet."
      },
      {
        title: "Slotify",
        subTitle: "A Spotify Clone",
        path: require("../../assets/icons8_Play_Button_Circled_100px.png"),
        techList: [
          "PhP",
          "MySQL",
          "jQuery",
          "AJAX",
          "Xampp",
          "Apache",
          "HTML5",
          "CSS3"
        ],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius augue vestibulum nisl dignissim fringilla. Duis vestibulum purus sapien, nec ultricies enim maximus ac. Sed tincidunt tortor non dui imperdiet dignissim. Vestibulum vel mattis lectus. Integer dignissim ante libero, nec porttitor ex auctor sit amet."
      },
      {
        title: "NYT-Reader",
        subTitle: "A Web Scraper with Cherrio and React",
        path: require("../../assets/nyt_logo_by_noyi_in-dce8kku.png"),
        techList: ["React.js", "Node.js", "MongoDB", "Express.js", "Cheerio"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius augue vestibulum nisl dignissim fringilla. Duis vestibulum purus sapien, nec ultricies enim maximus ac. Sed tincidunt tortor non dui imperdiet dignissim. Vestibulum vel mattis lectus. Integer dignissim ante libero, nec porttitor ex auctor sit amet."
      },
      {
        title: "This Portfolio :)",
        subTitle: "A Responsive React Portfolio",
        path: require("../../assets/you-are-here.png"),
        techList: ["React.js", "CSS Modules", "HTML5", "JSX", "Reactstrap"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius augue vestibulum nisl dignissim fringilla. Duis vestibulum purus sapien, nec ultricies enim maximus ac. Sed tincidunt tortor non dui imperdiet dignissim. Vestibulum vel mattis lectus. Integer dignissim ante libero, nec porttitor ex auctor sit amet."
      }
    ]
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
          <Col sm="12" md={{ size: 5, offset: 1 }} className="py-2">
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
            <h2 className={classes.projectTitle}>
              {this.state.projects[this.state.selected].title}
            </h2>
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
