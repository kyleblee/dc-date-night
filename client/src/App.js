import React, { Component } from 'react';
import Header from './containers/header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import DatesList from './containers/DatesList';
import './App.css';

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
