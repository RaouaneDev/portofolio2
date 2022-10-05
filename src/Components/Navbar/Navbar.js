import React from "react";
import profile from '../../assets/profile-pic.png'
import "./Navbar.css"



import { Navbar, Nav, Container } from "react-bootstrap";
const Navs = () => {
  return (
    <Navbar className="  bg-warning   sticky-top navbar-dark"  expand="lg">
      <Container>
        <Navbar.Brand href="#home" className=" mx-5">
          <img 
          style={{height:"80px"}}
          src={profile} alt="profile"
          className="rounded-circle "
          /></Navbar.Brand>
        
      </Container>
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto ">
            <Nav.Link className="text-dark" href="#home">Home</Nav.Link>
            <Nav.Link className="text-dark"href="#skills">Skills</Nav.Link>
            <Nav.Link className="text-dark"href="#projects">Projects</Nav.Link>
            <Nav.Link className="text-dark"href="#contact">Contact</Nav.Link>


            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
