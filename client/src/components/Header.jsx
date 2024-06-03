import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import images from '../assets/imgs/Images';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate()
  const handleLogout = () => {
    setAuth({
        ...auth,
        user: null,
        token: null
    })    
    localStorage.removeItem('auth')
    navigate('/login');

}
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
          <Navbar.Brand as={Link} to={'/'}>
            <img src={images.logo} alt="logo" width={250} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link as={Link} to={'/'}>Products</Nav.Link>
              <Nav.Link as={Link} to={'/'}>Blog</Nav.Link>
              <Nav.Link as={Link} to={'/'}>Cart</Nav.Link>
              <Nav.Link as={Link} to={'/'}>Contact</Nav.Link>
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
            {
              !auth.token ? (
                <></>
              ): (
                <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
              )
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
