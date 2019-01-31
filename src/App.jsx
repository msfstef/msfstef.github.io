import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Landing from './components/Landing';
import Work from './components/Work';
import Contact from './components/Contact';
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
          render={({ location }) => {
            const { pathname } = location;
            return (
              <TransitionGroup>
                <CSSTransition 
                  key={pathname}
                  classNames="page"
                  timeout={{
                    enter: 1000,
                    exit: 0,
                  }}
                >
                  <Route
                    location={location}
                    render={() => (
                    <div className="App">
                    <Switch location={location}>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/work' component={Work} />
                    <Route exact path='/contact' component={Contact} />
                    </Switch>
                    </div>
                    )}
                  />
                </CSSTransition>
              </TransitionGroup>
            );}} 
            />
        </div>
      </Router>
    );
  }
}

export default App;
