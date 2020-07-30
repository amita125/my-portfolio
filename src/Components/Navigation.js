import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../Stylesheet/Navigation.css";
function Navigation() {
  return (
    <Navbar id="navigation" collapseOnSelect expand="lg"  >
      <Navbar.Brand href="/" >
        <img id="logo-img" src={require('../images/formal.svg')} 
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" >
        <Nav>
          <Nav.Link href="#projects" ><img id="navi-img-port" src={require('../images/monitor.svg')} alt="project" /></Nav.Link>
          <Nav.Link href=" mailto: amitaghale@gmail.com "> <img id="navi-img-mail" src={require('../images/mail.svg')} alt="contact" /></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/amita-ghale-15ab36189/"> <img id="navi-img-linkedin" src={require('../images/linkedin.svg')} alt="linkedin" /></Nav.Link> 
          <Nav.Link href="https://github.com/amita125"> <img id="navi-img-git" src={require('../images/github.svg')} alt="github" /></Nav.Link>
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