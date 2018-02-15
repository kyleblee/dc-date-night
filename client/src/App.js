import React, { Component } from 'react';
import Header from './containers/header';
import Footer from './containers/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={Homepage} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
