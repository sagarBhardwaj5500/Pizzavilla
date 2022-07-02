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
        </NavIcon>
          <CartIcon>
            <Link to="/cart" />;
          </CartIcon>
      </Nav>
    </>
  );
};

export default Navbar;
