import React from "react";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Post from './components/Post';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import "./App.css";

function App() {
  return <div className="App">

  <Router>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/:id' component={Post} />
    </Switch>

  </Router>
   
  </div>;
}

export default App;
