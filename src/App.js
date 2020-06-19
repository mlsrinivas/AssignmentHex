import React from 'react';
import './App.css';
import Header from '../src/components/header'
import Body from '../src/components/body'
import Eco from './components/eco'
import Visibility from './components/Visibility'
import Contact from './components/contacts'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Header} />
        <Route path = "/Body" component = {Body} />
        <Route path = "/Eco" component = {Eco} />
        <Route path = "/Visibility" component = {Visibility} />
        <Route path = "/Contact" component = {Contact} />
        
      </Switch>
    </Router>
  );
}

export default App;
