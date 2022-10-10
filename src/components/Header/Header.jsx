import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';


function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" >Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 px-5 py-2 toggleNav"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/topics">Topics</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/blog">Blog</NavLink>
           
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;