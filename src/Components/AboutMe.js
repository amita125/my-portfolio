import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Stylesheet/Aboutme.css";
import Button from 'react-bootstrap/Button';
import pdf from "../images/amitacv.pdf"
function AboutMe() {
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <div className="aboutme">
                        <h2>Who am I ?</h2>
                        <p className="info_aboutme">
                            I am An enthusiastic and action-oriented graduate in computer science from University of Westminster who has also completed Full-Stack Developer traineeship at futureproof which gave me the valauable and professional skills needed to start careeer as a Full-stack Web developer.<br />
                            I'm passionate about improving the dynamic user experience through design and i'm constantly looking to learn new things everyday.
                            <br />
                        </p>
                        <div className="button-cv">
                            <Button variant="outline-success" id="cv-button" href={pdf}>Download CV</Button>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="skills">
                        <h1>Skills</h1>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '90%' }} >
                                <div className="tag" > HTML </div>
                            </div>
                            <span className="rate"> 90 % </span>
                        </div>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '90%' }} >
                                <div className="tag" > CSS </div>
                            </div>
                            <span className="rate"> 90 % </span>
                        </div>
                        <div className="bar" >
                            <div className="bar fill" style={{ width: '90%' }} >
                                <div className="tag" id="skilltag" > Bootstrap </div>
                            </div>
                            <span className="rate"> 90 % </span>
                        </div>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '70%' }} >
                                <div className="tag" > React </div>
                            </div>
                            <span className="rate"> 70 % </span>
                        </div>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '70%' }} >
                                <div className="tag" > Javascript </div>
                            </div>
                            <span className="rate"> 70 % </span>
                        </div>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '70%' }} >
                                <div className="tag" > Node.js </div>
                            </div>
                            <span className="rate"> 70 % </span>
                        </div>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '50%' }} >
                                <div className="tag" > Python </div>
                            </div>
                            <span className="rate"> 50 % </span>
                        </div>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '50%' }} >
                                <div className="tag" > Java </div>
                            </div>
                            <span className="rate"> 50 % </span>
                        </div>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '50%' }} >
                                <div className="tag" > C# </div>
                            </div>
                            <span className="rate"> 50 % </span>
                        </div>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '40%' }} >
                                <div className="tag" > Php </div>
                            </div>
                            <span className="rate"> 40 % </span>
                        </div>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '50%' }} >
                                <div className="tag" > Jquery </div>
                            </div>
                            <span className="rate"> 50 % </span>
                        </div>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '60%' }} >
                                <div className="tag" > UI design </div>
                            </div>
                            <span className="rate"> 60 % </span>
                        </div>
                        <div className="bar " >
                            <div className="bar fill" style={{ width: '60%' }} >
                                <div className="tag" > TDD </div>
                            </div>
                            <span className="rate"> 60 % </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default AboutMe
