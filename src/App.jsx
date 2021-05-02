import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Top from './components/Top';
import Main from './components/Main';
import Events from './components/Events';
import Community from './components/Community';
import Contact from './components/Contact';
import './assets/styles/index.css';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';


const App = () => {

  return (
    <>
      <Router>
          <div>
              <Route exact path='/' component={Top}/>
              <Route path='/Main' component={Main}/>
              <Route path='/ErrorPage' component={ErrorPage}/>
          </div>
      </Router>
      <Footer />
    </>
  )
}

export default App

