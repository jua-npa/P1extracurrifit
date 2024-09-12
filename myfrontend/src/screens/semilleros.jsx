import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../includes/header";
import Footer from "../includes/footer";
import '../styles/semilleros.css';

const baseURL = 'http://localhost:8000/'

function Semi() {
    const [semilleros, setSemilleros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(baseURL+'/semilleros/')
            .then(response => {
                console.log(response.data); // Verifica la estructura de los datos aquí
                if (Array.isArray(response.data)) {
                    setSemilleros(response.data);
                } else {
                    console.error('La respuesta de la API no es un array:', response.data);
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Header />
            <div className="semilleros-container">
                <div className="text-container">
                    <h1>Estos son los semilleros</h1>
                </div>
                <div className="semilleros-list">
                    {semilleros.length > 0 ? (
                        semilleros.map((semillero) => (
                            <div key={semillero.id} className="semillero-card">
                                <h5>{semillero.nombre}</h5>
                                <h6>{semillero.escuela}</h6>
                                <p>{semillero.descripcion}</p>
                                <button className="ver-mas">Ver más</button>
                            </div>
                        ))
                    ) : (
                        <p>No hay semilleros disponibles.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Semi;