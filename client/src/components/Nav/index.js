import React from "react";
import {Link} from "react-router-dom";
import Nav from "Nav";

function Nav() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="navbar">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
  </Navbar>
    {/* // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     Google Book Search 
    //   </a>
    // </nav> */}
    </>
  );
}

export default Nav;
