import React from 'react';
import './App.css';
import FrontPage from './containers/FrontPage/FrontPage';
import Header from './components/Header/Header';
import Portfolio from './containers/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Header />
      <FrontPage />
      <Portfolio />
    </div>
  );
}

export default App;
