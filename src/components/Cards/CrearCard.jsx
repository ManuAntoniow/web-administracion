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

const CrearCard = ({data, documento}) => {
  const navigate = useNavigate()
  const [datos, setDatos] = useState({
    "documento": documento,
    "estado": "nuevo",
    "ubicacion": "",
    "descripcion": "",
    "codigo": 0
  })
  const handleInputChange = (event) =>{
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }
  const crearReclamo = (event) => {
    event.preventDefault()
    if (Object.keys(datos).length == 6) {
      axios.post(`${URL}reclamos`, datos)
      .then((res) => {
        console.log(res.data)
        navigate('/inicio')
      })
    } else {
      alert('campos incompletos')
    }
  }
  return (
    <Card>
      <Card.Title>Crear Nuevo Reclamo</Card.Title>
      <Card.Text>
        <form className='CardForm' onSubmit={crearReclamo}>
          <Row className='mb-3'>
            <Form.Group controlId="formGridUsuario">
              <Form.Label>Ubicacion</Form.Label>
              <Form.Control placeholder="ubicacion" name='ubicacion' onChange={handleInputChange}/>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group controlId="formGridPass">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control 
                as='textarea' 
                rows={3}
                placeholder="Descriva el problema" 
                name='descripcion' 
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group controlId="formGridPass">
              <Form.Label>Codigo Edificio</Form.Label>
              <Form.Select name='codigo' onChange={handleInputChange}>
                <option>Seleccionar ...</option>
                {data.map((info) => {
                  return(
                    <option>{info.edificio}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group controlId="formGridPass">
              <Form.Label>ID Unidad</Form.Label>
              <Form.Select name='identificador' onChange={handleInputChange}>
                <option>Seleccionar ...</option>
                {data
                  .filter((info) => info.edificio == datos.codigo)
                  .flatMap((info) =>
                    info.unidades.map((unidad) => (
                      <option key={unidad}>{unidad}</option>
                    ))
                  )
                }
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className='SubmitButton mb-3'>
            <Button type='submit'>Crear</Button>
          </Row>
        </form>
      </Card.Text>
    </Card>
  )
}

export default CrearCard