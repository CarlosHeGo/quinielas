import React, { useContext, useState } from 'react';
import { QuinielaContext } from '../context/QuinielaContext';
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router';


function NavBarComponent() {
    const { apuestas } = useContext(QuinielaContext);
    const jornadas = [...new Set(apuestas.map(p => p.jornada))].sort();
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <NavbarBrand as={NavLink} to="/" onClick={() => setExpanded(false)}>Quinielas</NavbarBrand>
                <NavbarToggle aria-controls='basic-navbar-nav' onClick={() => setExpanded(expanded ? false : true)}/>
                    <NavbarCollapse id='basic-navbar-nav'>
                        <Nav className="me-auto"></Nav>
                        <NavDropdown title="Jornadas" id='jornadas-dropdown'>
                            {jornadas.map((jornada) => (
                                <NavDropdown.Item key={jornada} as={NavLink} to={`/jornada/${jornada}`} onClick={() => setExpanded(false)}>
                                    {jornada}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export default NavBarComponent