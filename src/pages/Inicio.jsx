// REACT 
import { useState, useEffect, useContext } from "react"
import {Link} from 'react-router-dom'

// BOOTSTRAP
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'

// COMPONENTS
import TablaReclamos from "../components/Tablas/TablaReclamos"

// DB
import axios from 'axios'
import { URL } from '../App'

// CONTEXT
import { UserContext } from '../context/UserContext'

const Inicio = () => {
  const [datosTable, setDatosTable] = useState()
  const [buscar, setBuscar] = useState()
  const [loading, setLoading] = useState(true)
  const [sinDatos, setSinDatos] = useState(true)
  const context = useContext(UserContext)
  useEffect(() => {
    var endpoint = `${URL}reclamos/reclamosPorPersona/${context.documento}`
    if (context.documento === 'ADMIN000') {
      endpoint = `${URL}reclamos`
    }
    axios.get(endpoint)
    .then((res) => {
      console.log(res.data)
      setDatosTable(res.data)
      setLoading(false)
      setSinDatos(false)
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        console.log('No hay reclamos con ese DNI (404)')
        setLoading(false)
      } else {
        console.error('ERROR:', error.message)
      }
    })
  }, [])
  const handleInputChange = (event) =>{
    setBuscar(event.target.value)
  }
  const search = () => {
    console.log(buscar)
    console.log(datosTable)
    const filtrar = datosTable.filter(objeto => String(objeto.idReclamo).includes(String(buscar)))
    setDatosTable(filtrar)
  }
  return (
    <div className='contenido'>
      <div className="cabecera">
        <div className='acciones'>
          <h4>Reclamos</h4>
          <Stack direction="horizontal" gap={3}>
            <Form.Control placeholder="ingrese un ID" onChange={handleInputChange}/>
            <Button onClick={search}>Buscar</Button>
            <div className="vr" />
            <Button variant="outline-danger" onClick={() => location.reload()}>Resetear</Button>
          </Stack>
          <Button as={Link} to='/cambios/crearReclamo'>Crear reclamo</Button>
        </div>
        <hr/>
      </div>
      { loading ?
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      :
        <TablaReclamos datosTable={datosTable} sinDatos={sinDatos}/>
      }
    </div>
  )
}

export default Inicio