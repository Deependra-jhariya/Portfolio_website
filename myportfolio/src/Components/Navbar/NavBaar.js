import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
// import Home from "../../Routes/Home";
// import About from "../../Routes/About";
import Contact from "../../Routes/Contact";
import { COLORS } from "../Colors/Colors";
import Home from "../../Containers/Home";
import About from "../../Containers/About"
import Project from "../../Containers/Project"
import './NavBaarStyle.css'
function NavBaar() {
  return (
    <BrowserRouter>   <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="navBaar_text">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/project">
              Project
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
 
  );
}

export default NavBaar;
