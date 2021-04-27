import React from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "../Jumbotron";
// Still working on this
function NavSearch() {
  return (
    
     <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
       Google Book Search 
      </a>
      <br/>
      <a className="navbar-brand" href="/saved">
       Saved Books 
      </a>
     </Nav>
     
  );
}

export default NavSearch;
