// REACT 
import { useParams } from 'react-router-dom'

// COMPONENTS
import CrearReclamoCard from "../components/Cards/CrearReclamoCard"
import CrearUsuarioCard from "../components/Cards/CrearUsuarioCard"

const Cambios = () => {
  const {tipo} = useParams()
  if (tipo === 'crearReclamo') {
    return (
      <CrearReclamoCard/>
    )
  } else if (tipo === 'crearUsuario') {
    return (
      <CrearUsuarioCard/>
    )
  }
}

export default Cambios