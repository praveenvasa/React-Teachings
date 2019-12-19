import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Facebook} from './Facebook';
import {InstaGram} from './instagrams';

import './App.css';
import { Home } from './home';

class App extends Component {
  render() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/facebook/:id' component={Facebook}/> 
        <Route path='/instagram' component={InstaGram} />
        <Route render={()=><h1>NOT FOUND PAGE</h1>} />
      </Switch>

      </BrowserRouter>
    </div>
  )}
 }

export default App;