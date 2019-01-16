import React, { Component } from "react";
import classes from "./Contact.module.css";
import Icons from "../../Components/Icons/Icons";

class Contact extends Component {
  render() {
    return (
      <div className={classes.contactContainer}>
        <div>
          <div className={classes.leftSection}>
            <h2 className={classes.header}>Contact Me</h2>
            <span className={classes.address}>Matthew James Mahler</span>
            <span className={classes.address}>Jersey City, NJ</span>

            <span className={classes.address}>
              matthewjamesmahler@gmail.com
            </span>
            <span className={classes.address}> 908-217-1194</span>
            <Icons />
          </div>
          <div className={classes.rightSection}>
            <form
              method="POST"
              action="https://formspree.io/matthewjamesmahler@gmail.com"
              target="_blank"
            >
              <input
                className={classes.email}
                type="email"
                name="email"
                placeholder="Your email"
              />
              <textarea
                className={classes.message}
                name="message"
                placeholder="Send me a message!"
              />

              <button className={classes.btn} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
