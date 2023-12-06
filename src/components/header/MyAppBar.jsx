import React from 'react';
import { Navbar, Container, Nav, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import {cloudlemlogo} from "../../../public/cloudlem.jpeg"

import cloudlemlogo from "../../assets/imgs/cloudlemlogo.png"
const ServiceTooltip = () => (
  <Tooltip id="service-tooltip">
    Details of DevOps Engineering
  </Tooltip>
);

const MyAppBar = () => {
  return (
    <>
    <Navbar className='navbar' expand="lg">
      <Container>
        {/* Left side with logo */}
        <Navbar.Brand href="#home">
          <img
            src={cloudlemlogo}
          />
        </Navbar.Brand>

        {/* Right side with menu and dropdown */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='navmenuright'>Home</Nav.Link>

            {/* Services with Tooltip */}
            <OverlayTrigger
              placement="bottom"
              overlay={<ServiceTooltip />}
            >
              <Nav.Link href="#services" className='navmenuright'>Services</Nav.Link>
            </OverlayTrigger>

            <Nav.Link href="#contact" className='navmenuright'>Contact Us</Nav.Link>
            <Nav.Link href="#about" className='navmenuright'>About Us</Nav.Link>

            {/* Dropdown menu */}
            <NavDropdown title="Services"className='navmenuright' id="basic-nav-dropdown"  style={{ color: 'white !important' }}>
              <NavDropdown.Item href="#action/1" >Action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Action 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">Separated link</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#about" className='navmenuright'>About Us</Nav.Link>
            
          </Nav>
         
          
        </Navbar.Collapse>
     
      </Container>
     
    </Navbar>
     
     </>
  );
};

export default MyAppBar;

