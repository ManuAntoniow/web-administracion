// CSS
import './Cards.css'

// BOOTSTRAP
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const UnidadCard = ({data}) => {
  return (
    <Card className='infoCard'>
      <Card.Title>Unidad</Card.Title>
      <Card.Text>
        <ul>
          <li>ID: {data.identificador}</li>
          <li>Piso: {data.piso}</li>
          <li>Numero: {data.numero}</li>
          <li>Habitado: {data.habitado}</li>
        </ul>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Inquilinos</Accordion.Header>
          <Accordion.Body>
            {data.inquilinos.map((info) => {
              return(
                <ul>
                  <li>Nombre: {info.nombre}</li>
                  <li>Documento: {info.documento}</li>
                  <li>email: {info.mail}</li>
                </ul>
              )
            })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Duenios</Accordion.Header>
          <Accordion.Body>
            {data.duenios.map((info) => {
              return(
                <ul>
                  <li>Nombre: {info.nombre}</li>
                  <li>Documento: {info.documento}</li>
                  <li>email: {info.mail}</li>
                </ul>
              )
            })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Edificio</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Codigo: {data.edificio.codigo}</li>
              <li>Direccion: {data.edificio.nombre}</li>
              <li>Nombre: {data.edificio.direccion}</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Card.Text>
    </Card>
  )
}

export default UnidadCard