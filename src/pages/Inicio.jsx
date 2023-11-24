// REACT 
import { useState, useEffect, useContext } from "react"

// BOOTSTRAP
import Spinner from 'react-bootstrap/Spinner'

// COMPONENTS
import TablaReclamos from "../components/TablaReclamos/TablaReclamos"

// DB
import axios from 'axios'
import { URL } from '../App'

// CONTEXT
import { UserContext } from '../context/UserContext'

const Inicio = () => {
  const [datosTable, setDatosTable] = useState()
  const [loading, setLoading] = useState(true)
  const [sinDatos, setSinDatos] = useState(true)
  const context = useContext(UserContext)
  useEffect(() => {
    axios.get(`${URL}reclamos/reclamosPorPersona/${context.documento}`)
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
  return (
    <div className='contenido'>
      <div className="cabeceraReclamos">
        <h4>Reclamos</h4>
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