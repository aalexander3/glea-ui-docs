import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Buttons, Home } from './pages'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/buttons' component={Buttons} />
      </Switch>
    </div>
  );
}

export default App;
