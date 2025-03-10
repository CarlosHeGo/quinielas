import React, { useState, useContext } from "react";
import { Button, Card, CardBody, CardText, CardTitle, Container, Table, Modal, ModalFooter, Form } from "react-bootstrap";
import { QuinielaContext } from "../context/QuinielaContext";

function CardApuesta({ apuesta }) {
    const { crearApuesta } = useContext(QuinielaContext);
    const [show, setShow] = useState(false);
    const [selectedApuestas, setSelectedApuestas] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckboxChange = (partidoIndex, resultado) => {
        setSelectedApuestas(prevState => ({
            ...prevState,
            [`${partidoIndex}-${resultado}`]: !prevState[`${partidoIndex}-${resultado}`] 
        }));
    };

    const handleGuardarApuesta = () => {
        for (let key in selectedApuestas) { 
            const partes = key.split("-");
            const partidoIndex = parseInt(partes[0]);
            const resultado = partes[1];
    
            crearApuesta(apuesta.jornada, partidoIndex, resultado);
        }
    
        setSelectedApuestas({});
        handleClose();
    };

    return (
        <Container fluid="lg">
            <Card>
                <CardBody>
                    <CardTitle>Jornada: {apuesta.jornada}</CardTitle>
                    <CardText>
                        {apuesta.fecha}
                    </CardText>
                    <div>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Local</th>
                                    <th>Visitante</th>
                                    <th>Apuestas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {apuesta.partidos.map((partido, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{partido.local}</td>
                                        <td>{partido.visitante}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <div style={{ background: "lightblue" }}>
                                                1: {partido.apuestas["1"]}
                                            </div>
                                            <div>X: {partido.apuestas["X"]}</div>
                                            <div style={{ background: "lightblue" }}>
                                                2: {partido.apuestas["2"]}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <Button onClick={handleShow}>Crear apuesta</Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Nueva apuesta</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Jornada: {apuesta.jornada}</p>
                            <p>Fecha: {apuesta.fecha}</p>
                            <Form>
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Local</th>
                                            <th>Visitante</th>
                                            <th>1</th>
                                            <th>X</th>
                                            <th>2</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {apuesta.partidos.map((partido, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{partido.local}</td>
                                                <td>{partido.visitante}</td>
                                                <td>
                                                    <Form.Check 
                                                        type="checkbox"
                                                        checked={selectedApuestas[`${index}-1`] || false}
                                                        onChange={() => handleCheckboxChange(index, '1')}
                                                    />
                                                </td>
                                                <td>
                                                    <Form.Check 
                                                        type="checkbox"
                                                        checked={selectedApuestas[`${index}-X`] || false}
                                                        onChange={() => handleCheckboxChange(index, 'X')}
                                                    />
                                                </td>
                                                <td>
                                                    <Form.Check 
                                                        type="checkbox"
                                                        checked={selectedApuestas[`${index}-2`] || false}
                                                        onChange={() => handleCheckboxChange(index, '2')}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Form>
                        </Modal.Body>
                        <ModalFooter>
                            <Button variant="primary" onClick={handleGuardarApuesta}>Guardar apuesta</Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
        </Container>
    );
}

export default CardApuesta;