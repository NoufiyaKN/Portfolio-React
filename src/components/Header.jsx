import React  from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import nk from '../assets/images/knicon.jpeg'
import '../header.css'

function Header() {

  return (
    <>
        <Navbar expand="lg" className="">
            <Container>
            <Navbar.Brand href="#home">
                <img
                src={nk}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
                <Navbar.Brand href="#home" className='text-white'>NOUFIYA K N</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" me-3 ms-auto">
                    <Nav.Link className='text-white' >HOME</Nav.Link>
                    <Nav.Link className='text-white' >ABOUT ME</Nav.Link>
                    <Nav.Link className='text-white' >SERVICES</Nav.Link>
                    <Nav.Link className='text-white'>SKILLS</Nav.Link>
                    <Nav.Link className='text-white' >PORTFOLIO</Nav.Link>
                    <Nav.Link className='text-white' >CONTACT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </>
  )
}

export default Header