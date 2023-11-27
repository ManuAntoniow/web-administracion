// REACT
import { useContext, useState, useEffect } from 'react'

// CSS
import './ConfigButtons.css'

// BOOTSTRAP
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from "react-bootstrap/esm/Button"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

// CONTEXT
import { UserContext } from '../../context/UserContext'

// DB
import axios from 'axios'
import { URL } from '../../App'

const ConfigButtons = () => {
  const context = useContext(UserContext)
  const [show, setShow] = useState(false)
  const [persona, setPersona] = useState()
  useEffect(() => {
    axios.get(`${URL}personas/${context.documento}`)
    .then((res) => {
      setPersona(res.data)
    })
    .catch((error) => {
      console.error('ERROR:', error.message)
    })
  }, [])
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleInputChange = (event) =>{
    setPersona({
      ...persona,
      [event.target.name] : event.target.value
    })
  }
  const handleLogOut = () => {
    context.logOut()
  }
  const cambiarPass = () => {
    axios.post(`${URL}personas/cambiarContrasenia`, persona)
    .then((res) => {
      console.log(res.data)
      context.logOut()
    })
    .catch((error) => {
      console.error('ERROR:', error.message)
    })
  }
  return (
    <>
    <ButtonGroup>
      <Button variant='dark' onClick={handleLogOut}>Log Out</Button>
      <DropdownButton variant='secondary' as={ButtonGroup} title="⚙" id="bg-nested-dropdown">
        <Dropdown.Item onClick={handleShow}>Cambiar contraseña</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar Contraseña</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formGridPass">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control placeholder="Ingrese su contraseña" type="password" name='contrasenia' onChange={handleInputChange}/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={cambiarPass}>Cambiar Contraseña</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default ConfigButtons