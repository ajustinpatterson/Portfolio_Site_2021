import React, { useState } from 'react';
import { scaleDown as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = ({
  outerContainerId,
  pageWrapId,
}: {
  outerContainerId: string;
  pageWrapId: string;
}) => {
  const [isOpen, closeMenu] = useState(false);

  return (
    <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
      <Link
        id="home"
        className="menu-item"
        to="/"
        onClick={() => closeMenu(false)}
      >
        Home
      </Link>
      <Link id="portfolio" className="menu-item" to="/portfolio">
        Portfolio
      </Link>
      <Link id="about" className="menu-item" to="/about">
        About
      </Link>
      <Link id="contact" className="menu-item" to="/contact">
        Contact
      </Link>
    </Menu>
  );
};

export default Nav;
