import React, { Component } from 'react';
import Header from './containers/header';
import Footer from './containers/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import GenerateDate from './containers/GenerateDate';
import CuratedDateForm from './containers/CuratedDateForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route path="/plan-my-date" component={GenerateDate} />
            <Route path="/curated/new" component={CuratedDateForm} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
