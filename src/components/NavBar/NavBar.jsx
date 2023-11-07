// REACT
import {Link} from 'react-router-dom'

// CSS
import './NavBar.css'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// IMG
import LOGO from '../../img/logo.png'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <img
            src={LOGO}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="logo"
          />
          Sistema de Administracion
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/Xustans'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Xustans/Ubicacion'>Reportes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar