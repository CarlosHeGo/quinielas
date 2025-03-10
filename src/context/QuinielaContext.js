import { createContext, useEffect, useState } from "react";

export const QuinielaContext = createContext();

export const QuinielaProvider = ({children}) => {
    const[apuestas, setApuestas] = useState([]);

    useEffect(() => {
        const fetchApuestas = async () => {
            const response = await fetch('/quinielas.json');
            const data = await response.json();
            setApuestas(data.apuestas);
        };
        fetchApuestas();
    }, []);

    const crearApuesta = (jornada, partidoIndex, resultado) => {
        setApuestas(apuestas => apuestas.map(j => 
            j.jornada === jornada ? { 
                ...j, 
                partidos: j.partidos.map((p, i) => 
                    i === partidoIndex ? { 
                        ...p, 
                        apuestas: { 
                            ...p.apuestas, 
                            [resultado]: (p.apuestas[resultado] || 0) + 1 
                        } 
                    } : p 
                ) 
            } : j 
        ));
    };

    return(
        <QuinielaContext.Provider value={{apuestas, crearApuesta}}>
            {children}
        </QuinielaContext.Provider>
    );
};