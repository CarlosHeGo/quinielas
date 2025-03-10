import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardApuesta from '../components/CardApuesta'
import { QuinielaContext } from '../context/QuinielaContext'

function Home() {
  const {apuestas} = useContext(QuinielaContext);
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Apuestas realizadas:</h1>
      <Row>
        {apuestas.map((apuesta) => (
          <Col key={apuesta.jornada} xs={12} sm={3} md={4} lg={6} className="mb-4">
            <CardApuesta apuesta={apuesta} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home;