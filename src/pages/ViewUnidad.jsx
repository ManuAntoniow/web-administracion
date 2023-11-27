//REACT
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// DB
import axios from 'axios'
import { URL } from '../App'

// BOOTSTRAP
import Spinner from 'react-bootstrap/Spinner'

// COMPONENTS
import UnidadCard from '../components/Cards/UnidadCard'
import AccionesUnidad from '../components/Acciones/AccionesUnidad'

const ViewUnidad = () => {
  const {idUnidad} = useParams()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  useEffect(() => {
    axios.get(`${URL}unidades/${idUnidad}`)
    .then((res) => {
      setData(res.data)
      setLoading(false)
    })
    .catch((error) => {
      console.error('ERROR:', error.message)
    })
  }, [])
  return (
    <div className='contenido'>
      {loading ?
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      :
      <>
        <UnidadCard data={data}/>
        <AccionesUnidad data={data}/>
      </>
      }
    </div>
  )
}

export default ViewUnidad