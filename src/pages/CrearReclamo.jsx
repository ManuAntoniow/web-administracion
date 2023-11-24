// REACT 
import { useState, useEffect, useContext } from "react"

// COMPONENTS
import CrearCard from "../components/Cards/CrearCard"

// BOOTSTRAP
import Spinner from 'react-bootstrap/Spinner'

// DB
import axios from 'axios'
import { URL } from '../App'

// CONTEXT
import { UserContext } from '../context/UserContext'

const CrearReclamo = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const context = useContext(UserContext)
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
  return (
    <div className='contenido'>
      { loading ?
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      :
        <CrearCard data={data} documento={context.documento}/>
      }
    </div>
  )
}

export default CrearReclamo