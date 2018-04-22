import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './css/style.css';
import App from './components/App';
import NoMatch from './components/NoMatch';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router> 
  )
}

render(<Root/>, document.querySelector('#MMPage'));