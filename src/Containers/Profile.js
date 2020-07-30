import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import Girlcode from "../images/flower.jpg";
import "../Stylesheet/Profile.css";
import Navigation from "../Components/Navigation";
import AboutMe from "../Components/AboutMe";
import Projects from "../Components/Projects";

function Profile() {
    return (
         <Container fluid>
          <Row>
          <Col>
           <Navigation />
            <section id = "introduction" >
              <img src={Girlcode} alt="React Logo" id="logoimg" />
              <div id="intro">
                <div id="intro-button">
                  <div className="css-typing" id="intro-info1">
                    <p className="hello">Hello I'm <span id="highlight">Amita Ghale.</span>
                    </p><p className="hello">I'm a Full-stack Web Developer</p>
                  </div>
                  <div className="view-project">
                    <a href="#projects"><Button id="view-button"> View my Work </Button></a> 
                  </div> 
                  </div>
              </div>
              {/* <span>Photo by <a href="https://unsplash.com/@yoal_des?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Yoal Desurmont</a> on <a href="https://unsplash.com/s/photos/jungle?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
            </section>
            <div className="mainInfo">
     
              <section id="info">
                <div className="spacer">
                  <h1 className="section-title">About ME</h1>
                </div>
                
                <AboutMe />               
              </section>
              
              <section id="projects">
                <div className="spacer">
                </div>
                <h1>Projects</h1>
                <Projects />
              </section>
              
              <footer id="contact">
                &copy; Copyright 2020 Amita Ghale 

                
              </footer>
            </div>
            </Col>
          </Row>
        </Container>
    );
}

export default Profile

//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>