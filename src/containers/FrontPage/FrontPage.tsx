import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import profile from '../../assets/Profile.jpg';
import unicoder from '../../assets/unicoder.svg';
import backend from '../../assets/server-network-alt.svg';
import care from '../../assets/heart.svg';

import './FrontPage.scss';

const FrontPage = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text">
        <h1 className="my-name">Justin Patterson</h1>
        <h4>FULL STACK SOFTWARE DEVELOPER</h4>
        <p id="blurb">
          Hi! I'm Justin, a developer living in Barcelona, Spain. I specialize
          in React and Node.js, with an emphasis on clean, modern design.{' '}
        </p>
        <p id="blurb">
          I've worked in teams of 2-4 developers with aggressive deadlines to
          deliver varied user experiences on CI/CD platforms such as Heroku and
          Netlify, with deep roots in Git version control and testing suites
          such as Mocha/Chai and Jest. My background in education means that I
          strive to write code that is semantic, well-organized, and tells a
          story, all while utilizing honed presentation skills and changing hats
          every minute. Have a look at my
          <Link to="/portfolio"> portfolio </Link> to see my work, and feel free
          to <a href="mailto:ajustinpatterson@outlook.com"> connect </a>
          if you fancy a chat!
        </p>
      </div>
      <img
        src={profile}
        className="profile-pic"
        alt="profile"
        title="Photo by Berta Vilanova :)"
      />
      <div className="skill-trees">
        <div id="main-skill">
          <ul id="specific-skills">
            <li></li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default FrontPage;
