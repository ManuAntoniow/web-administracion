// REACT
import { useContext } from "react"
import {Link} from 'react-router-dom'

// CSS
import './NavBar.css'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// IMG
import LOGO from '../../img/logo.png'

// COMPONENTS
import ConfigButtons from '../ConfigButtons/ConfigButtons'

// CONTEXT
import { UserContext } from '../../context/UserContext'

const NavBar = () => {
  const context = useContext(UserContext)
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
            {context.documento === 'ADMIN000' ?
              <>
                <Nav.Link as={Link} to='/inicio'>Inicio</Nav.Link>
                <NavDropdown title="Administar" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to='/personas'>Usuarios</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/edificios'>Edificios</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/unidades'>Unidades</NavDropdown.Item>
                </NavDropdown>
              </>
              :
              <>
                <Nav.Link as={Link} to='/inicio'>Inicio</Nav.Link>
                <Nav.Link as={Link} to='/cambios/crearReclamo'>Crear Reclamo</Nav.Link>
              </>
            }
          </Nav>
          <Nav>
            <ConfigButtons/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar