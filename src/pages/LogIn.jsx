// REACT
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// BOOTSTRAP
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

// IMG
import logo from '../img/logo.png'

// DB
import axios from 'axios'

// CONTEXT
import { UserContext } from '../context/UserContext'

const LogIn = () => {
  const navigate = useNavigate()
  const context = useContext(UserContext)
  const [datos, setDatos] = useState({})
  
  /*cada vez que hay un cambio en los inputs 
  ya sea en el usuario o contraseña
  setea esa informacion en datos*/
  const handleInputChange = (event) =>{
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  /*valida que el nombre del usuario exista 
  y luego valida si la contraseña de ese usuario es correcta*/
  const logIn = async(event) => {
    event.preventDefault()
    console.log(datos)
    const res = await axios.post(``, datos)
    console.log(res.data)
    if (res.data) {
      context.userActive()
      navigate('/inicio')
    } else {
      alert('usuario o contraseña incorrectos')
    }
  }
  
  return (
    <div className='contenido' style={{height: "100vh"}}>
      <img src={logo} alt='logo' className='logoInicio'/>
      <Card className='login'>
        <Card.Title>Administracion de Edificios</Card.Title>
        <Card.Text>
          <form className='loginForm' onSubmit={logIn}>
            <Row>
              <Form.Group controlId="formGridUsuario">
                <Form.Label>E-Mail</Form.Label>
                <Form.Control placeholder="Ingrese su mail Claro" type='email' name='mail' onChange={handleInputChange}/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="formGridPass">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control placeholder="Ingrese su contraseña" type="password" name='password' onChange={handleInputChange}/>
              </Form.Group>
            </Row>
            <Row className='logInButton'>
              <Button variant="danger" type='submit'>Ingresar</Button>
            </Row>
          </form>
        </Card.Text>
      </Card>
    </div>
  )
}

export default LogIn