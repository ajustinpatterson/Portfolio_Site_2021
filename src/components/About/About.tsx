import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './About.scss';

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className="intro-title">Hello!</h3>
      <div className="intro-body">
        <p>
          You could say I've got a bit of wanderlust. I've called a few places
          home. Born in Ventura County, California, raised in Eugene and
          Portland, Oregon, three years in China, and now based in Barcelona.
        </p>
        <p>
          My developer journey started a year and a half ago, learning a bit of
          Java on Youtube. It quickly became an addiction once I started
          fiddling with JavaScript at the end of 2019.
        </p>
        <p>
          Now, I'm working on more front end
          <Link to="/Portfolio">challenges</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default About;
