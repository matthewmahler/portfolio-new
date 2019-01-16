import React, { Component } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
const path = require("../../assets/LogoMakr_7NNF2w.png");

class Navbar extends Component {
  render() {
    return (
      <div className={classes.navContainer}>
        <Link tag={Link} to="/" className={classes.logoFull}>
          <img src={path} className={classes.logoImage} alt="logo" />
          <h1 className={classes.fullName}>
            <span className={classes.names}>Matt</span>{" "}
            <span className={classes.names}>Mahler</span>
          </h1>
        </Link>

        <div className={classes.navFull}>
          <span>
            <Link tag={Link} to="/About" className={classes.navLink}>
              About
            </Link>
          </span>
          <span>
            <Link tag={Link} to="/Portfolio" className={classes.navLink}>
              Portfolio
            </Link>
          </span>
          <span>
            <Link tag={Link} to="/Contact" className={classes.navLink}>
              Contact
            </Link>
          </span>
          <span>
            <Link tag={Link} to="/Resume" className={classes.navLink}>
              Resume
            </Link>
          </span>
          <span>
            <Link tag={Link} to="/Music" className={classes.navLink}>
              Music
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Navbar;
