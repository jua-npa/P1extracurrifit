import React, { useEffect, useState } from 'react';
import direccion from '../util/axios';
import Header from "../includes/header";
import Footer from "../includes/footer";
import Modal from '../includes/grupoModal';
import '../styles/groups.css';

function StGroups (){
    const [grupo, setGrupos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [selectedgrupo, setSelectedgrupo] = useState(null);

    useEffect(() => {
        direccion
            .get('/grupos/')
            .then(response => {
                console.log(response.data);
                if (Array.isArray(response.data)) {
                    setGrupos(response.data);
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

    const handleOpenModal = (grupo) => {
        setSelectedgrupo(grupo);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedgrupo(null);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Header />
            <div className="grupos-container">
                <div className="text-container">
                    <h1>Estos son los grupos estudiantiles</h1>
                </div>
                <div className="grupos-list">
                    {grupo.length > 0 ? (
                        grupo.map((grupo) => (
                            <div key={grupo.id} className="grupo-card">
                                <img src={grupo.imagen} alt={grupo.nombre} className="grupo-imagen" />
                                <h3>{grupo.nombre}</h3>
                                <p>{grupo.descripcion}</p>
                                <button className="ver-mas" onClick={() => handleOpenModal(grupo)}>
                                    Ver más
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No hay semilleros grupos.</p>
                    )}
                </div>
            </div>
            <Footer />
            {/* Modal para mostrar detalles del semillero */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} grupo={selectedgrupo} />
        </>
    );
}
export default StGroups;