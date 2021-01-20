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
  //burger menu state
  const [menuOpen, setMenuOpen] = useState(false);

  //burger menu handleClick
  const handleBurgerClick = () => {
    setMenuOpen(false);
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  return (
    <Menu
      pageWrapId={pageWrapId}
      outerContainerId={outerContainerId}
      isOpen={menuOpen}
      onOpen={handleMenuOpen}
    >
      <Link
        id="home"
        className="menu-item"
        to="/"
        onClick={(event) => {
          event.preventDefault();
          handleBurgerClick();
        }}
      >
        Home
      </Link>
      <Link
        id="portfolio"
        className="menu-item"
        to="/portfolio"
        onClick={(event) => {
          event.preventDefault();
          handleBurgerClick();
        }}
      >
        Portfolio
      </Link>
      <Link
        id="about"
        className="menu-item"
        to="/about"
        onClick={(event) => {
          event.preventDefault();
          handleBurgerClick();
        }}
      >
        About
      </Link>
      <Link
        id="contact"
        className="menu-item"
        to="/contact"
        onClick={(event) => {
          event.preventDefault();
          handleBurgerClick();
        }}
      >
        Contact
      </Link>
    </Menu>
  );
};

export default Nav;
