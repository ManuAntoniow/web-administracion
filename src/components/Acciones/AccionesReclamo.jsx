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

const AccionesReclamo = ({estadoActual}) => {
  const navigate = useNavigate()
  const {idReclamo} = useParams()
  const [estado, setEstado] = useState({})
  const handleInputChange = (event) =>{
    setEstado({[event.target.name] : event.target.value})
  }
  const cambiarEstado = () => {
    axios.put(`${URL}reclamos/${idReclamo}`, estado)
    .then((res) => {
      console.log(res.data)
      navigate('/inicio')
    })
    .catch((error) => {
      console.error('ERROR en inquilinos:', error)
      alert('algo salio mal')
    })
  }
  const eliminar = () => {
    axios.delete(`${URL}reclamos/eliminar/${idReclamo}`)
    .then((res) => {
      console.log(res.data)
      navigate('/inicio')
    })
    .catch((error) => {
      console.error('ERROR en inquilinos:', error)
      alert('algo salio mal')
    })
  }
  return (
    <Card className='mb-4'>
      <Card.Title>Acciones</Card.Title>
      <Card.Body>
        <Form.Group controlId="formGridUsuario">
          <Form.Label>Estado</Form.Label>
          <div className='cambiarEstado'>
            <Form.Select name='estado' className='estado' onChange={handleInputChange}>
              <option>Seleccione ...</option>
              {estadoActual == 'nuevo' ?
                <>
                <option>abierto</option>
                <option>desestimado</option>
                <option>anulado</option>
                </>
              : <></>}
              {estadoActual == 'abierto' ?
                <>
                <option>en proceso</option>
                <option>desestimado</option>
                <option>anulado</option>
                </>
              : <></>}
              {estadoActual == 'en proceso' ?
                <>
                <option>terminado</option>
                <option>anulado</option>
                </>
              : <></>}
            </Form.Select>
            <Button onClick={cambiarEstado}>Cambiar</Button>
          </div>
        </Form.Group>    
        <div className='eliminarReclamo'>
          <Button variant='outline-danger' onClick={eliminar}>Eliminar Reclamo</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default AccionesReclamo