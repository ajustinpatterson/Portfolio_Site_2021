import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import FrontPage from './containers/FrontPage/FrontPage';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

function App() {
  return (
    <Router>
      <div className="App" id="outer-container">
        <Nav outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />
        <Header />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
