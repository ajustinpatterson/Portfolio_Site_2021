import React from 'react';
import insta from '../../assets/instagram.svg';
import medium from '../../assets/medium-m.svg';
import lnkin from '../../assets/linkedin-alt.svg';
import github from '../../assets/github.svg';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="nav-btn">
        <a
          href="http://www.instagram.com/ajustinpatterson"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={insta}
            style={{ paddingBottom: '.05em' }}
            alt="placeholder"
          />
        </a>
      </div>

      <div className="nav-btn">
        <a
          href="http://www.medium.com/@ajustinpatterson"
          target="_blank"
          rel="noreferrer"
        >
          <img src={medium} alt="placeholder" />
        </a>
      </div>

      <div className="nav-btn">
        <a
          href="http://www.linkedin.com/in/ajustinpatterson"
          target="_blank"
          rel="noreferrer"
        >
          <img src={lnkin} alt="placeholder" />
        </a>
      </div>

      <div className="nav-btn">
        <a
          href="http://github.com/ajustinpatterson"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="placeholder" />
        </a>
      </div>
    </div>
  );
};

export default Header;
