import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Lavit Samson",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],

      home: {
        title: "Web Developer",
        subtitle: "Transforming imaginations into reality...",
        text: "Your satisfaction my priority",
      },

      about: {
        title: "About Me",
      },

      contact: {
        title: "Let's Talk",
      },
    };
  }

  render() {
    return (
      <Router>
        <div className='row-template' fluid={true}>
          <div className='header'>
            <Navbar />
          </div>
          <div className='main'>
            <Switch>
              <Route path="/" exact><Home /></Route>
              <Route path="/about"><About /></Route>
              <Route path="/contact"><Contact /></Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;