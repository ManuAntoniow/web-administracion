// REACT
import { useState } from 'react'

// CSS
import './Cards.css'

// BOOTSTRAP
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

// DB
import axios from 'axios'
import { URL } from '../../App'

const ReclamoCard = ({data}) => {
  console.log(data)
  return (
    <Card className='reclamoCard'>
      <Card.Title>RECLAMO</Card.Title>
      <Card.Text>
        <ul>
          <li>ID: {data.idReclamo}</li>
          <li>Ubicacion: {data.idReclamo}</li>
          <li>Descripcion: {data.idReclamo}</li>
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
              <li>ID: {data.persona.nombre}</li>
              <li>Documento: {data.persona.documento}</li>
              <li>email: {data.persona.mail}</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Edificio</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>ID: {data.persona.nombre}</li>
              <li>Documento: {data.persona.documento}</li>
              <li>email: {data.persona.mail}</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Card.Text>
    </Card>
  )
}

export default ReclamoCard