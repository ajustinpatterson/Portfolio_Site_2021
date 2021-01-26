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
        . ©twenty-twenty-one
      </p>
    </div>
  );
};

export default Footer;
