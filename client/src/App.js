import React, { Component } from 'react';
import Header from './containers/header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import DatesList from './containers/DatesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={DatesList} />
        </Router>
      </div>
    );
  }
}

export default App;
