// REACT
import { useState } from 'react'

// BOOTSTRAP
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

// CSS
import './Tablas.css'

// DB
import axios from 'axios'
import { URL } from '../../App'

const TablaPersonas = ({datosTable, sinDatos}) => {
  const [rowsToShow, setRowsToShow] = useState(15)
  const handleShowMoreRows = () => {
    setRowsToShow(rowsToShow + 20)
  }
  const eliminar = (event) => {
    console.log(event.target.id)
    axios.delete(`${URL}personas/eliminar/${event.target.id}`)
    .then((res) => {
      console.log(res.data)
      location.reload()
    })
    .catch((error) => {
      console.error('ERROR:', error)
      alert('algo salio mal')
    })
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
              <th>Documento</th>
              <th>Nombre</th>
              <th>e-mail</th>
              <th>Contraseña</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datosTable.slice(0, rowsToShow).map((info) => {
              return(
                <tr key={info.documento}>
                  <td>{info.documento}</td>
                  <td>{info.nombre}</td>
                  <td>{info.mail}</td>
                  <td>{info.contrasenia}</td>
                  <td>
                  <Button variant='danger' onClick={eliminar} id={info.documento}>Eliminar</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        {rowsToShow < datosTable.length && (
          <Button className='mb-4' onClick={handleShowMoreRows}>Mostrar más filas</Button>
        )}
      </>
      }
    </>
  )
}

export default TablaPersonas