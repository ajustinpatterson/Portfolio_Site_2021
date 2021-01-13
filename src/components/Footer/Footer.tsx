import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <p id="l">
        Technologies used on this page include React, Typescript, SASS, and
        email.js
      </p>
      <div className="spacer"></div>
      <p id="r">© Justin Patterson 2021</p>
    </div>
  );
};

export default Footer;
