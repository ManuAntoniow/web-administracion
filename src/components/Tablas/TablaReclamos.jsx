// REACT
import {Link} from 'react-router-dom'

// BOOTSTRAP
import Table from 'react-bootstrap/Table'

// CSS
import './Tablas.css'

const TablaReclamos = ({datosTable, sinDatos}) => {
  return (
    <>
      { sinDatos ?
        <h3>Sin Datos</h3>
      :
        <Table striped responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Codigo Edificio</th>
              <th>Identificador Unidad</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datosTable.map((info) => {
              return(
                <tr key={info.idReclamo}>
                  <td>{info.idReclamo}</td>
                  <td>{info.codigo}</td>
                  <td>{info.identificador}</td>
                  <td>{info.estado}</td>
                  <td>
                    <Link to={`/reclamo/${info.idReclamo}`}>Ver mas info</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      }
    </>
  )
}

export default TablaReclamos