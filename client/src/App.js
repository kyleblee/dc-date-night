import React, { Component } from 'react';
import Header from './containers/header';
import Footer from './containers/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import GenerateDate from './containers/GenerateDate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route path="/plan-a-date" component={GenerateDate} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
