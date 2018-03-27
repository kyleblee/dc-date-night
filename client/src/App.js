import React, { Component } from 'react';
import Header from './containers/Header';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Homepage from './containers/Homepage';
import SignIn from './containers/SignIn';
import GenerateDate from './containers/GenerateDate';
import BrowseDates from './containers/BrowseDates';
import ShowDate from './containers/ShowDate';
import MobileMenuList from './components/header/MobileMenuList';
import { requireAuth } from './utils/auth';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div id="containing-div">
            <div id="push-footer">
              <Header />
              <MobileMenuList />
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/plan-my-date" component={GenerateDate} />
                <Route path="/dates/:id/edit" render={requireAuth}/>
                <Route path="/dates/new" render={requireAuth} />
                <Route path="/dates/:id" component={ShowDate} />
                <Route path="/dates" component={BrowseDates} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
