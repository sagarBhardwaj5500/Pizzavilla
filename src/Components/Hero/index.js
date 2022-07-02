import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems className="appearAnimation">
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <div style={{ display: "flex", gap: "10px" }}>
            <HeroBtn>Place Order</HeroBtn>
            <HeroBtn>
              <Link className="cart" to="/cart">Visit Cart</Link>
            </HeroBtn>
          </div>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
