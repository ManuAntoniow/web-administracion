// REACT
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// BOOTSTRAP
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

// CSS
import './Cards.css'

// DB
import axios from 'axios'
import { URL } from '../../App'

// CONTEXT
import { UserContext } from '../../context/UserContext'

const CrearReclamoCard = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const context = useContext(UserContext)
  const [datos, setDatos] = useState({
    "documento": context.documento,
    "estado": "nuevo",
    "ubicacion": "",
    "descripcion": "",
    "codigo": 0
  })
  const [img, setImg] = useState()
  useEffect(() => {
    const procesarResultados = (data) => {
      const objetosEncontrados = []
      for (const objeto of data) {
        for (const persona of objeto.inquilinos) {
          if (persona.documento === context.documento) {
            objetosEncontrados.push(objeto)
          }
        }
        for (const persona of objeto.duenios) {
          if (persona.documento === context.documento) {
            objetosEncontrados.push(objeto)
          }
        }
      }
      const organizado = {}
      objetosEncontrados.forEach((item) => {
        const edificioCodigo = item.edificio.codigo
        if (organizado[edificioCodigo]) {
          organizado[edificioCodigo].unidades.push(item.identificador)
        } else {
          organizado[edificioCodigo] = {
            edificio: edificioCodigo,
            unidades: [item.identificador],
          }
        }
      })
      const resultado = Object.values(organizado)
      setData(resultado)
      setLoading(false)
    }
    axios.get(`${URL}unidades`)
      .then((res) => {
        procesarResultados(res.data)
      })
      .catch((error) => {
        console.error('ERROR en inquilinos:', error)
      })
  }, [])
  const handleInputChange = (event) =>{
    if (event.target.name !== 'imagen') {
      setDatos({
        ...datos,
        [event.target.name] : event.target.value
      })
    } else {
      setImg(event.target.value)
    }
  }
  const crearReclamo = (event) => {
    event.preventDefault()
    if (datos.identificador) {
      axios.post(`${URL}reclamos`, datos)
      .then((res) => {
        console.log(res.data)
        if (img && res.data.idReclamo) {
          const info = {
            "path": img,
            "idReclamo": res.data.idReclamo,
            "tipo": 'reclamo'
          }
          axios.post(`${URL}imagenes`, info)
          .then((res) => {
            console.log(res.data)
          })
        }
        navigate('/inicio')
      })
    } else {
      alert('campos incompletos')
    }
  }  
  return (
    <div className='contenido'>
      { loading ?
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      :
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
                <Form.Group controlId="formGridUsuario">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control placeholder="link de la imagen" name='imagen' onChange={handleInputChange}/>
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
      }
    </div>
  )
}

export default CrearReclamoCard