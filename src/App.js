import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

class App extends React.Component {
 render() {
    return (
      <Router>
        <div className='row-template' fluid={true}>
          <div className='header'>
            <Navbar />
          </div>
          <div className='main'>
            <Switch>
              <Route path="portfolio/" exact><Home /></Route>
              <Route path="portfolio/about"><About /></Route>
              <Route path="portfolio/contact"><Contact /></Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
