import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavLink, NavIcon, Bars, CartIcon } from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizzavilla</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars onClick={toggle} />
          <CartIcon>
            <Link to="/cart" />;
          </CartIcon>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
