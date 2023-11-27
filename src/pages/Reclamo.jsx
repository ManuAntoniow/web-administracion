//REACT
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

// DB
import axios from 'axios'
import { URL } from '../App'

// BOOTSTRAP
import Spinner from 'react-bootstrap/Spinner'

// COMPONENTS
import ReclamoCard from '../components/Cards/ReclamoCard'
import AccionesReclamo from '../components/Acciones/AccionesReclamo'

// CONTEXT
import { UserContext } from '../context/UserContext'

const Reclamo = () => {
  const context = useContext(UserContext)
  const {idReclamo} = useParams()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  useEffect(() => {
    axios.get(`${URL}reclamos/${idReclamo}`)
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
        <ReclamoCard data={data}/>
        {context.documento === 'ADMIN000' ?
          <AccionesReclamo/> : <></>
        }
      </>
      }
    </div>
  )
}

export default Reclamo