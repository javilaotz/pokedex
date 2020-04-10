import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

const NavbarComp = () => {


  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Pokedex</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavbarComp;