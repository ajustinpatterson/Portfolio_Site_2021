import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <p id="l">
        This site built from scratch with React (hooks), Typescript, SASS,
        react-burger-menu, FramerMotion, and email.js. Source code available
        here.
      </p>
      <div className="spacer"></div>
      <p id="r">© Justin Patterson 2021</p>
    </div>
  );
};

export default Footer;
