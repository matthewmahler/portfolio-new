import React, { Component } from "react";
import classes from "./Navbar.module.css";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    let leftBrace = "{ ";
    let rightBrace = " }";
    return (
      <Container fluid={true} className={classes.navContainer}>
        <Row>
          <Col sm="12" md={{ size: 6 }} className="py-3">
            <NavLink tag={Link} to="/">
              <h1 className={classes.fullName}>
                Matthew <span className={classes.accents}>{leftBrace}</span>
                James
                <span className={classes.accents}>{rightBrace} </span>
                Mahler
              </h1>
            </NavLink>
          </Col>
          <Col sm="12" md={{ size: 6 }} className="py-3">
            <Nav className={classes.navFull}>
              <NavItem>
                <NavLink tag={Link} to="/About" className={classes.navLink}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Portfolio" className={classes.navLink}>
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Contact" className={classes.navLink}>
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Resume" className={classes.navLink}>
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Music" className={classes.navLink}>
                  Music
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Navbar;
