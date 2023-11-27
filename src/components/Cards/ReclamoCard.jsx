// CSS
import './Cards.css'

// BOOTSTRAP
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const ReclamoCard = ({data}) => {
  return (
    <Card className='infoCard'>
      <Card.Title>RECLAMO</Card.Title>
      <Card.Text>
        <ul>
          <li>ID: {data.idReclamo}</li>
          <li>Ubicacion: {data.ubicacion}</li>
          <li>Descripcion: {data.descripcion}</li>
        </ul>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Persona</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Nombre: {data.persona.nombre}</li>
              <li>Documento: {data.persona.documento}</li>
              <li>email: {data.persona.mail}</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Unidad</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>ID: {data.unidad.identificador}</li>
              <li>Piso: {data.unidad.piso}</li>
              <li>Numero: {data.unidad.numero}</li>
              <li>Habitado: {data.unidad.habitado}</li>
            </ul>
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

export default ReclamoCard