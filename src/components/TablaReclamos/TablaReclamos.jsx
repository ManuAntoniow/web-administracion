// REACT 
import { useState, useEffect } from "react"

// BOOTSTRAP
import Table from 'react-bootstrap/Table'

// DB
import axios from 'axios'
import { URL } from '../../App'

const TablaReclamos = () => {
  const [datosTable, setDatosTable] = useState()

  useEffect(() => {
    axios.get(`${URL}reclamos/reclamosPorPersona/DNI30609972`)
  })

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Codigo Edificio</th>
          <th>Identificador Unidad</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </Table>
  )
}

export default TablaReclamos