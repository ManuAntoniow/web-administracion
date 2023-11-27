// REACT
import {Link} from 'react-router-dom'

// BOOTSTRAP
import Table from 'react-bootstrap/Table'

// CSS
import './Tablas.css'

const TablaEdificios = ({datosTable, sinDatos}) => {
  return (
    <>
      { sinDatos ?
        <h3>Sin Datos</h3>
      :
        <Table striped responsive>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nombre</th>
              <th>Direccion</th>
            </tr>
          </thead>
          <tbody>
            {datosTable.map((info) => {
              return(
                <tr key={info.codigo}>
                  <td>{info.codigo}</td>
                  <td>{info.nombre}</td>
                  <td>{info.direccion}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      }
    </>
  )
}

export default TablaEdificios