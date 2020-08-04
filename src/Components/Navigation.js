import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { HashLink as Link } from "react-router-hash-link";
import "../Stylesheet/Navigation.css";
function Navigation() {
  return (
    <Navbar id="navigation" collapseOnSelect expand="lg">
      <Navbar.Brand>
        <Link smooth to="/#introduction">
          <img
            id="logo-img"
            src={require("../images/naviIcon/formal.svg")}
            alt="React Bootstrap logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Item>
            <Link smooth to="/#info">
              About ME
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link smooth to="/#projects">
              Projects
            </Link>
          </Nav.Item>
          <Nav.Item>
            <a href=" mailto: amitaghale@gmail.com ">
              <img
                className="navi-img"
                id="navi-img-mail"
                src={require("../images/naviIcon/mail1.svg")}
                alt="contact"
              />
            </a>
          </Nav.Item>
          <Nav.Item>
            <a href="https://www.linkedin.com/in/amita-ghale-15ab36189/">
              <img
                className="navi-img"
                src={require("../images/naviIcon/linkedin.svg")}
                alt="linkedin"
              />
            </a>
          </Nav.Item>
          <Nav.Item>
            <a href="https://github.com/amita125">
              <img
                className="navi-img"
                src={require("../images/naviIcon/github.svg")}
                alt="github"
              />
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ); 
}

export default Navigation

//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> - cv

//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> - career / cvand bag
//Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>- linkdin

//<div>Icons made by <a href="https://www.flaticon.com/authors/prettycons" title="prettycons">prettycons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> - monitor

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>- formal