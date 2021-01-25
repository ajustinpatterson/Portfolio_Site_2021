import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
//
import Nav from './components/Nav/Nav';
import FrontPage from './containers/FrontPage/FrontPage';
import Portfolio from './containers/Portfolio/Portfolio';
import Resume from './containers/Resume/Resume';
import About from './containers/About/About';
import Contact from './components/Contact/Contact';

import Header from './components/Header/Header';

import './App.css';

function App() {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });

    return unlisten;
  }, [history, isFirstMount]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Header />

      <div className="App" id="outer-container">
        <Nav outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />

        <div id="page-wrap">
          <Switch location={location} key={location.pathname}>
            <Route
              exact
              path="/"
              component={(props: any) => (
                <FrontPage isFirstMount={isFirstMount} {...props} />
              )}
            />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/resume" component={Resume} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
