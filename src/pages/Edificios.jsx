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
import TablaEdificios from '../components/Tablas/TablaEdificios'

const Edificios = () => {
  const [loading, setLoading] = useState(true)
  const [sinDatos, setSinDatos] = useState(true)
  const [buscar, setBuscar] = useState()
  const [datosTable, setDatosTable] = useState()
  useEffect(() => {
    axios.get(`${URL}edificios`)
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
    const filtrar = datosTable.filter(objeto => objeto.nombre.includes(buscar))
    setDatosTable(filtrar)
  }
  return (
    <div className='contenido'>
      <div className="cabecera">
        <div className='acciones'>
          <h4>Edificios</h4>
          <Stack direction="horizontal" gap={3}>
            <Form.Control placeholder="ingrese nombre edificio" onChange={handleInputChange}/>
            <Button onClick={search}>Buscar</Button>
            <div className="vr" />
            <Button variant="outline-danger" onClick={() => location.reload()}>Resetear</Button>
          </Stack>
          <div></div>
        </div>
        <hr/>
      </div>
      {loading ?
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      :
        <div>
          <TablaEdificios datosTable={datosTable} sinDatos={sinDatos}/>
        </div>
      }
    </div>
  )
}

export default Edificios