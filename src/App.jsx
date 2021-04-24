import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Top from './components/Top';
import Events from './components/Events';
import Community from './components/Community';
import Contact from './components/Contact';
import './assets/styles/index.css';


const App = () => {

  return (
    <div>
      
      <Router>
          <div>
              <Navbar />
              <Route exact path='/' component={Top}/>
              <Route path='/Events' component={Events}/>
              <Route path='/Community' component={Community}/>
              <Route path='/Contact' component={Contact}/>
          </div>
      </Router>
    </div>
  )
}

export default App

