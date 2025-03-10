import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {QuinielaProvider} from './context/QuinielaContext';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import NavBarComponent from "./components/NavBarComponent";
import ApuestasJornada from "./pages/ApuestasJornada";

function App() {

  return (
    <QuinielaProvider>
      <Router>
        <NavBarComponent />
        <Container>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/jornada/:jornada" element={<ApuestasJornada />}/>
          </Routes>
        </Container>
      </Router>
    </QuinielaProvider>
  );
}

export default App;