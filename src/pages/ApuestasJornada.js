import React, { useContext } from 'react'
import { QuinielaContext } from '../context/QuinielaContext'
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import CardApuesta from '../components/CardApuesta';

function ApuestasJornada() {
    const {apuestas, crearApuesta} = useContext(QuinielaContext);
    const {jornada} = useParams();
    const jornadaNumero = Number(jornada);
    const apuestasFiltradas = apuestas.filter((p) => p.jornada === jornadaNumero);
    return (
        <Container>
            <h2 className="text-center mb-4">Apuesta:</h2>
            <Row>
                {apuestasFiltradas.length>0 ? (
                    apuestasFiltradas.map((p) => (
                        <Col key={p.jornada} fluid>
                            <CardApuesta apuesta={p} crearApuesta={crearApuesta}/>
                        </Col>
                    ))
                ) : (
                    <p className="text-center">No hay apuestas en esta jornada.</p>
                
                )}
            </Row>
        </Container>
    );
}

export default ApuestasJornada