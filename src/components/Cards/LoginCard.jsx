// REACT
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// CSS
import './Cards.css'

// BOOTSTRAP
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

// DB
import axios from 'axios'
import { URL } from '../../App'

// CONTEXT
import { UserContext } from '../../context/UserContext'

const LoginCard = () => {
  const navigate = useNavigate()
  const context = useContext(UserContext)
  const [datos, setDatos] = useState({})
  const handleInputChange = (event) =>{
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }
  const logIn = async(event) => {
    event.preventDefault()
    console.log(datos)
    const res = await axios.post(`${URL}personas/login`, datos)
    console.log(res.data)
    if (res.data) {
      context.userActive(res.data.documento)
      navigate('/inicio')
    } else {
      alert('usuario o contraseña incorrectos')
    }
  }
  return (
    <Card>
      <Card.Title>Administracion de Edificios</Card.Title>
      <Card.Text>
        <form className='CardForm' onSubmit={logIn}>
          <Row className='mb-3'>
            <Form.Group controlId="formGridUsuario">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control placeholder="Ingrese su mail" type='email' name='mail' onChange={handleInputChange}/>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group controlId="formGridPass">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control placeholder="Ingrese su contraseña" type="password" name='contrasenia' onChange={handleInputChange}/>
            </Form.Group>
          </Row>
          <Row className='SubmitButton mb-3'>
            <Button type='submit'>Ingresar</Button>
          </Row>
        </form>
      </Card.Text>
    </Card>
  )
}

export default LoginCard