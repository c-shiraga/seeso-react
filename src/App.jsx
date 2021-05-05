import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Top from './components/Top';
import Main from './components/Main';
import './assets/styles/index.css';
import ErrorPage from './components/ErrorPage';
import Error404 from './components/Error404';



const App = () => {

  

  return (
    <div>
      <Router>
            <Switch>
              <Route exact path='/' component={Top}/>
              <Route path='/Main' component={Main}/>
              <Route path='/ErrorPage' component={ErrorPage}/>
              <Route component={Error404} />
            </Switch>      
      </Router>
    </div>
  )
}

export default App

