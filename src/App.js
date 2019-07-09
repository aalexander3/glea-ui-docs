import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Buttons, Icons, Home } from './pages'
import Navbar from './Navbar'

function App() {
  return (
    <div className='App'>
      <div className='aside'>
        <Navbar />
      </div>
      <div className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/buttons' component={Buttons} />
          <Route exact path='/icons' component={Icons} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
