import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/Landing';
import Work from './components/Work';
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/work' component={Work} />
        </div>
      </Router>
    );
  }
}

export default App;
