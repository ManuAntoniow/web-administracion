// REACT
import { useState } from 'react'
import {Link} from 'react-router-dom'

// BOOTSTRAP
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

// CSS
import './Tablas.css'

const TablaUnidades = ({datosTable, sinDatos}) => {
  const [rowsToShow, setRowsToShow] = useState(15)
  const handleShowMoreRows = () => {
    setRowsToShow(rowsToShow + 20)
  }
  return (
    <>
      { sinDatos ?
        <h3>Sin Datos</h3>
      :
      <>
        <Table striped responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Piso</th>
              <th>Numero</th>
              <th>Habitado</th>
              <th>Edificio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datosTable.slice(0, rowsToShow).map((info) => {
              return(
                <tr key={info.identificador}>
                  <td>{info.identificador}</td>
                  <td>{info.piso}</td>
                  <td>{info.numero}</td>
                  <td>{info.habitado}</td>
                  <td>{info.edificio.nombre}</td>
                  <td>
                    <Link to={`/unidad/${info.identificador}`}>Ver mas info</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        {rowsToShow < datosTable.length && (
          <Button onClick={handleShowMoreRows}>Mostrar más filas</Button>
        )}
      </>
      }
    </>
  )
}

export default TablaUnidades