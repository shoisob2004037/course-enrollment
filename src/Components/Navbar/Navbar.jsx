import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';




const NavigationBar = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='text'>C<span >ources</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className="active mx-auto text-white" aria-current="page">Home</Nav.Link>
            <Nav.Link href="/courses" className='mx-auto text-white'>Courses</Nav.Link>
            <Nav.Link href="/" className='mx-auto text-white'>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
