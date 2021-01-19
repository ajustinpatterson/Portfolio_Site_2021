import React from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';

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
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });

    return unlisten;
  }, [history, isFirstMount]);

  return (
    <div className="App" id="outer-container">
      <Nav outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />
      <Header />
      <div id="page-wrap">
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
