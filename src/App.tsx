import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
//
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
  return (
    <AnimatePresence mode="wait">
      <Header />

      <div className="App" id="outer-container">
        <Nav outerContainerId={'outer-container'} pageWrapId={'page-wrap'} />

        <div id="page-wrap">
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </AnimatePresence>
  );
}

export default App;
