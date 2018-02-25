import React, { Component } from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Homepage from './containers/Homepage';
import SignIn from './containers/SignIn';
import GenerateDate from './containers/GenerateDate';
import CuratedDateForm from './containers/CuratedDateForm';
import BrowseDates from './containers/BrowseDates';
import ShowDate from './containers/ShowDate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/plan-my-date" component={GenerateDate} />
              <Route exact path="/dates" component={BrowseDates} />
              <Route exact path="/dates/new" component={CuratedDateForm} />
              <Route exact path="/dates/:id" component={ShowDate} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
