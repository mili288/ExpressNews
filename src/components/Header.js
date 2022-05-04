import React from 'react'
import '../styles/Navbar.css';
import {Navbar, Container, Nav, FormControl, Button, Form, NavDropdown} from 'react-bootstrap'

function Header() {
  

  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
  <Container fluid>
    <Navbar.Brand href="/" className="mx-5">Express News</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/business">Business</Nav.Link>
        <Nav.Link href="/sport">Sport</Nav.Link>
        <Nav.Link href="/entertainment">Entertainment</Nav.Link>
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Header