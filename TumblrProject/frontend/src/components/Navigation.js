import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import tumblricon from "./images/tumblricon2.png";

function NavScrollExample() {
  return (
    <div className="navdiv">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" classname="navit"><img src={tumblricon} alt='tumblricon'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll
            >
              <form class="nosubmit">
                <input class="nosubmit" type="search" placeholder="Search Tumblr" />
              </form>
            </Nav>
            <div className="navi">
                <div classname="naviright">
                  <Link to='/Login'>
                    <button className="navibuttonlogin">Log In</button>
                  </Link>
                  <Link to='/Signup'>
                       <button className="navibuttonsignup">Sign Up</button>
                  </Link>
                </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
