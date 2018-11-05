import React, { Component } from "react";
import Navbar from "./Containers/Navbar/Navbar";
import About from "./Containers/About/About";
import Portfolio from "./Containers/Portfolio/Portfolio";
import Contact from "./Containers/Contact/Contact";
import Resume from "./Containers/Resume/Resume";
import Music from "./Containers/Music/Music";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" render={() => <About />} />
              <Route exact path="/Portfolio" render={() => <Portfolio />} />
              <Route exact path="/Contact" render={() => <Contact />} />
              <Route exact path="/Resume" render={() => <Resume />} />
              <Route exact path="/Music" render={() => <Music />} />
              <Route
                render={() => <h1 className="text-center">Page Not Found!</h1>}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
