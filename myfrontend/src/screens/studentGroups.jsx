import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../includes/header";
import Footer from "../includes/footer";
import '../styles/groups.css';
import { baseUrl } from '../config';

function StGroups() {
    const [grupos, setGrupos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(baseUrl+'students/groups/')
            .then(response => {
                console.log('Datos de la API:', response.data);
                setGrupos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
                setError('Error al obtener los datos');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header />
            <div className="grupos-container">
                <div className="text-container">
                    <h1>Estos son los grupos estudiantiles</h1>
                </div>
                <div className="grupos-list">
                    {grupos.map((grupo) => (
                        <div key={grupo.id_group} className="grupo-card">
                            <img src={grupo.image} alt={grupo.name} className="grupo-imagen" />
                            <h3>{grupo.name}</h3>
                            <p>{grupo.description}</p>
                            <button className="ver-mas">Ver más</button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default StGroups;
