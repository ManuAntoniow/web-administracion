//REACT
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

// DB
import axios from 'axios'
import { URL } from '../App'

// BOOTSTRAP
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'

// COMPONENTS
import TablaPersonas from '../components/Tablas/TablaPersonas'

const Personas = () => {
  const [loading, setLoading] = useState(true)
  const [sinDatos, setSinDatos] = useState(true)
  const [buscar, setBuscar] = useState()
  const [datosTable, setDatosTable] = useState()
  useEffect(() => {
    axios.get(`${URL}personas`)
    .then((res) => {
      setDatosTable(res.data)
      setLoading(false)
      setSinDatos(false)
    })
    .catch((error) => {
      console.error('ERROR:', error.message)
    })
  }, [])
  const handleInputChange = (event) =>{
    setBuscar(event.target.value)
  }
  const search = () => {
    console.log(buscar)
    const filtrar = datosTable.filter(objeto => objeto.documento.includes(buscar))
    setDatosTable(filtrar)
  }
  return (
    <div className='contenido'>
      <div className="cabecera">
        <div className='acciones'>
          <h4>Personas</h4>
          <Stack direction="horizontal" gap={3}>
            <Form.Control placeholder="ingrese un documento" onChange={handleInputChange}/>
            <Button onClick={search}>Buscar</Button>
            <div className="vr" />
            <Button variant="outline-danger" onClick={() => location.reload()}>Resetear</Button>
          </Stack>
          <Button as={Link} to='/cambios/crearUsuario'>Crear Usuario</Button>
        </div>
        <hr/>
      </div>
      {loading ?
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      :
        <div>
          <TablaPersonas datosTable={datosTable} sinDatos={sinDatos}/>
        </div>
      }
    </div>
  )
}

export default Personas