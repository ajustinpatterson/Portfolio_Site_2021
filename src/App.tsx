import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav/Nav';

import './App.css';
import FrontPage from './containers/FrontPage/FrontPage';
import Header from './components/Header/Header';
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

function App() {
  return (
    <div className="App" id="outer-container">
      <Nav outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />
      <div id="page-wrap">
        <Header />
        <FrontPage />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
