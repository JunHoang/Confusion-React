import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes';
import DishDetail from './components/DishdetailComponent';
import Main from './components/MainComponent';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
