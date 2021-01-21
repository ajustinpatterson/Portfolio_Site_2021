import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import FrontPage from './containers/FrontPage/FrontPage';
import Portfolio from './containers/Portfolio/Portfolio';
import Resume from './containers/Resume/Resume';
import About from './containers/About/About';
import Contact from './components/Contact/Contact';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      console.log('is first mount: ', isFirstMount);

      isFirstMount && setIsFirstMount(false);
    });

    return unlisten;
  }, [history, isFirstMount]);

  console.log('location: ', location);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="App" id="outer-container">
        <Nav outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />
        <Header />
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
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
