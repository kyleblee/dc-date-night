import React, { Component } from 'react';
import Header from './containers/Header';
import { Footer } from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './containers/Homepage';
import SignIn from './containers/SignIn';
import GenerateDate from './containers/GenerateDate';
import CuratedDateForm from './containers/CuratedDateForm';
import BrowseDates from './containers/BrowseDates';
import ShowDate from './containers/ShowDate';
import './App.css';

class App extends Component {
  requireAuth = props => {
    if (!sessionStorage.jwt) {
      return <Redirect to="/sign-in" />;
    }

    if (props.match.path === "/dates/new") {
      if (sessionStorage.expert !== "true") {
        return <Redirect to="/" />;
      }

      return <CuratedDateForm {...props}/>;
    }
    // Other authenticated routes can be added here as else / if statements
    // that draw from props.match.path in a similar way.
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div id="containing-div">
            <div id="push-footer">
              <Header />
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/plan-my-date" component={GenerateDate} />
                <Route path="/dates/:id/edit" component={CuratedDateForm}/>
                <Route path="/dates/new" render={this.requireAuth} />
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
