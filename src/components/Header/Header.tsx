import React from 'react';
import insta from '../../assets/instagram.svg';
import medium from '../../assets/medium-m.svg';
import lnkin from '../../assets/linkedin-alt.svg';
import github from '../../assets/github.svg';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <button className="nav-btn">
        <img src={insta} style={{ paddingBottom: '.05em' }} alt="placeholder" />
      </button>
      <button className="nav-btn">
        <img src={medium} alt="placeholder" />
      </button>
      <button className="nav-btn">
        <img src={lnkin} style={{ paddingBottom: '.3em' }} alt="placeholder" />
      </button>
      <button className="nav-btn">
        <img
          src={github}
          style={{ paddingBottom: '.05em' }}
          alt="placeholder"
        />
      </button>
    </div>
  );
};

export default Header;
