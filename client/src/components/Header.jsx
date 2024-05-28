import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import images from '../assets/imgs/Images';

const Header = () => {
  return (
    <div>
      <div>
        <link rel="stylesheet" href="assets/css/fonts.css" />
        <link rel="stylesheet" href="assets/css/slick.css" />
        <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="assets/css/all.min.css" />
        <link rel="stylesheet" href="assets/css/remixicon.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="assets/css/bootstrap_dist_css_min.css" />
        <link rel="stylesheet" href="assets/css/media.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
      </div>
      <Navbar className='header_nav' expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={images.logo} alt="logo" width={250} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link}>Home</Nav.Link>
              <Nav.Link as={Link}>Products</Nav.Link>
              <Nav.Link as={Link}>Blog</Nav.Link>
              <Nav.Link as={Link}>Cart</Nav.Link>
              <Nav.Link as={Link}>Contact</Nav.Link>
            </Nav>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-secondary" type="submit">Search</button>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
