import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';


const BurgerMenu = () => {
  return (
    <Menu>
      <NavLink exact activeClassName="active" to="/">        Home
      </NavLink>
      <NavLink activeClassName="active" to="/users">        Users
      </NavLink>
      <NavLink activeClassName="active" to="/contact">        Contact
      </NavLink>
    </Menu>
  );
};

export default BurgerMenu;