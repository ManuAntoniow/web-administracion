// REACT 
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// BOOTSTRAP
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

// CSS
import './Acciones.css'

// DB
import axios from 'axios'
import { URL } from '../../App'

const AccionesUnidad = ({data}) => {
  const navigate = useNavigate()
  const [documento, setDocumento] = useState({})
  const handleInputChange = (event) =>{
    setDocumento(event.target.value)
  }
  const transfeir = () => {
    axios.post(`${URL}negocio/transferirUnidad/edificio/${data.edificio.codigo}/piso/${data.piso}/numero/${data.numero}/documento/${documento}`)
    .then((res) => {
      console.log(res.data)
      navigate('/unidades')
    })
    .catch((error) => {
      console.error('ERROR:', error)
      alert('algo salio mal')
    })
  }
  const agregarDuenio = () => {
    axios.post(`${URL}negocio/agregarDuenioUnidad/edificio/${data.edificio.codigo}/piso/${data.piso}/numero/${data.numero}/documento/${documento}`)
    .then((res) => {
      console.log(res.data)
      navigate('/unidades')
    })
    .catch((error) => {
      console.error('ERROR:', error)
      alert('algo salio mal')
    })
  }
  const alquilar = () => {
    axios.post(`${URL}negocio/alquilarUnidad/edificio/${data.edificio.codigo}/piso/${data.piso}/numero/${data.numero}/documento/${documento}`)
    .then((res) => {
      console.log(res.data)
      navigate('/unidades')
    })
    .catch((error) => {
      console.error('ERROR:', error)
      alert('algo salio mal')
    })
  }
  return (
    <Card>
      <Card.Title>Acciones</Card.Title>
      <Card.Body>
        <Form.Group controlId="formGridUsuario" className='mb-3'>
          <Form.Label>Transferir Unidad</Form.Label>
          <div className='cambiarEstado'>
            <Form.Control placeholder="Ingrese un documento" name='estado' onChange={handleInputChange} className='estado'/>
            <Button onClick={transfeir}>Transferir</Button>
          </div>
        </Form.Group>  

        <Form.Group controlId="formGridUsuario" className='mb-3'>
          <Form.Label>Agregar un Dueño</Form.Label>
          <div className='cambiarEstado'>
            <Form.Control placeholder="Ingrese un documento" name='estado' onChange={handleInputChange} className='estado'/>
            <Button onClick={agregarDuenio}>Agregar</Button>
          </div>
        </Form.Group>  

        <Form.Group controlId="formGridUsuario" className='mb-3'>
          <Form.Label>Alquilar Unidad</Form.Label>
          <div className='cambiarEstado'>
            <Form.Control placeholder="Ingrese un documento" name='estado' onChange={handleInputChange} className='estado'/>
            <Button onClick={alquilar}>Alquilar</Button>
          </div>
        </Form.Group> 
      </Card.Body>
    </Card>
  )
}

export default AccionesUnidad