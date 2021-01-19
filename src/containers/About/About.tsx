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
          <Link to="/Portfolio"> challenges </Link> and sharpening my skills on
          custom react applications while dipping into back end technologies
          like Golang and Java.
        </p>
        <p>
          In my free time, I'm known to walk around Barcelona and snap photos
          with my old Fuji X-10 for my super old
          <a href="http://cancionencantada.tumblr.com"> travel blog</a>. I'm
          also a wannabe novelist and an avid fan of vintage bicycles. Please
          <a href="mailto:ajustinpatterson@outlook.com"> get in touch</a> if I
          can be of any service to you.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
