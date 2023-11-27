// REACT
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// BOOTSTRAP
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

// CSS
import './Cards.css'

// DB
import axios from 'axios'
import { URL } from '../../App'

const CrearUsuarioCard = () => {
  const navigate = useNavigate()
  const [datos, setDatos] = useState({
    'contrasenia': '0000'
  })
  const handleInputChange = (event) =>{
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }
  const crearUsuario = (event) => {
    event.preventDefault()
    axios.post(`${URL}personas`, datos)
    .then((res) => {
      console.log(res.data)
      navigate('/personas')
    })
    .catch((error) => {
      console.error('ERROR en inquilinos:', error)
      alert('algo salio mal')
    })
  } 
  return (
    <div className='contenido'>
      <Card>
        <Card.Title>Crear Nuevo Usuario</Card.Title>
        <Card.Text>
          <form className='CardForm' onSubmit={crearUsuario}>
            <Row className='mb-3'>
              <Form.Group controlId="formGridUsuario">
                <Form.Label>Documento</Form.Label>
                <Form.Control placeholder="Ej: DNI1234" name='documento' onChange={handleInputChange}/>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId="formGridUsuario">
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="Ej: pepe, martinez" name='nombre' onChange={handleInputChange}/>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group controlId="formGridUsuario">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="ejemplo@ejemplo.com" name='mail' onChange={handleInputChange}/>
              </Form.Group>
            </Row>
            <Row className='SubmitButton mb-3'>
              <Button type='submit'>Crear</Button>
            </Row>
          </form>
        </Card.Text>
      </Card>
    </div>
  )
}

export default CrearUsuarioCard