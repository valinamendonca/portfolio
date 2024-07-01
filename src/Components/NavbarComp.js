import React from 'react'
import logo from '../assets/logo.png'
import {saveAs} from 'file-saver'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

function NavbarComp() {
    const downloadPdf = () => {
      const pdfUrl = process.env.PUBLIC_URL +`/cv.pdf`;; 
  
      fetch(pdfUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.blob();
        })
        .then((blob) => {
          saveAs(blob, 'cv.pdf');
        })
        .catch((error) => {
          console.error('Error downloading PDF:', error);
          // Handle error
        });
    };

  return (
    <Navbar  expand="lg" className="bg-body-tertiary" style={{position: "fixed", top: "0px", width: "100vw", zIndex: "100"}} bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#about">
            <img
              src={logo}
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mx-3">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#tech">Technologies</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Button type="button" onClick={downloadPdf}>download Resume</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp