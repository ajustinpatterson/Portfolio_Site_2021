import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <p id="l">
        This site baked from scratch with React (hooks), Typescript, SASS,
        react-burger-menu, FramerMotion, and email.js. Source code available
        <a href="https://github.com/ajustinpatterson/Portfolio_Site_2021.git">
          {' '}
          here
        </a>
        . ©twenty-twenty-four
        <p id="small-screen">
          This site is currently optimized for desktop browsers. Check back soon
          for responsive updates :)
        </p>
      </p>
    </div>
  );
};

export default Footer;
