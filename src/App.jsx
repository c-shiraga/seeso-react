import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Top from './components/Top';
import Main from './components/Main';
import Events from './components/Events';
import Community from './components/Community';
import Contact from './components/Contact';
import './assets/styles/index.css';
import Footer from './components/Footer';


const App = () => {

  return (
    <div>
      <Router>
          <div>
              <Route exact path='/' component={Top}/>
              <Route path='/Main' component={Main}/>
              <Route path='/Events' component={Events}/>
              <Route path='/Community' component={Community}/>
              <Route path='/Contact' component={Contact}/>
          </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App

