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
          href="https://www.instagram.com/ajustinpatterson"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="placeholder" />
        </a>
      </div>

      <div className="nav-btn-medium">
        <a
          href="https://ajustinpatterson.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={medium} alt="placeholder" />
        </a>
      </div>

      <div className="nav-btn-lnkdn">
        <a
          href="https://www.linkedin.com/in/ajustinpatterson"
          target="_blank"
          rel="noreferrer"
        >
          <img src={lnkin} alt="placeholder" style={{ width: '90%' }} />
        </a>
      </div>

      <div className="nav-btn-github">
        <a
          href="https://github.com/ajustinpatterson"
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
