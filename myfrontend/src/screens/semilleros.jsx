// Semi.js
import React, { useEffect, useState } from 'react';
import direccion from '../util/axios';
import Header from "../includes/header";
import Footer from "../includes/footer";
import Modal from '../includes/semilleroModal'; // Importa el modal
import '../styles/semilleros.css';

function Semi() {
    const [semilleros, setSemilleros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar el modal
    const [selectedSemillero, setSelectedSemillero] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSchool, setSelectedSchool] = useState(''); // Estado para la escuela seleccionada
    const [escuelas, setEscuelas] = useState([]); // Estado para almacenar las escuelas únicas

    useEffect(() => {
        direccion.get('/resumen/') // Asegúrate de que este endpoint esté correctamente configurado
            .then(response => {
                console.log("Resúmenes generados", response.data);
            })
            .catch(error => {
                console.error("Error generando resúmenes", error);
            });
        direccion
            .get('/semilleros/')
            .then(response => {
                console.log(response.data); // Verifica la estructura de los datos aquí
                if (Array.isArray(response.data)) {
                    setSemilleros(response.data);
                    // Obtener escuelas únicas
                    const uniqueSchools = [...new Set(response.data.map(semillero => semillero.escuela))];
                    setEscuelas(uniqueSchools);
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

    const handleOpenModal = (semillero) => {
        setSelectedSemillero(semillero);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedSemillero(null);
    };

    // Filtrar semilleros por nombre, escuela o término de búsqueda
    const filteredSemilleros = semilleros.filter((semillero) => {
        return (
            (semillero.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
             semillero.escuela.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedSchool ? semillero.escuela === selectedSchool : true) // Filtrar por escuela si está seleccionada
        );
    });

    const handleSchoolClick = (school) => {
        setSelectedSchool(school);
    };

    const handleResetFilter = () => {
        setSelectedSchool('');
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Header />
            <div className="semilleros-container">
                <div className="text-container">
                    <h1>Estos son los semilleros</h1>
                </div>
                {/* Barra de búsqueda */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Buscar semillero por nombre o escuela..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="semilleros-list">
                    {filteredSemilleros.length > 0 ? (
                        filteredSemilleros.map((semillero) => (
                            <div key={semillero.id} className="semillero-card">
                                <h5>{semillero.nombre}</h5>
                                <h6>{semillero.escuela}</h6>
                                <p>{semillero.resumen}</p>
                                <button className="ver-mas" onClick={() => handleOpenModal(semillero)}>
                                    Ver más
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No hay semilleros disponibles.</p>
                    )}
                </div>

                {/* Botón de filtro */}
                <div className="school-filter">
                    <h3>Filtrar por escuela</h3>
                    <div className="school-buttons">
                        {escuelas.map((escuela, index) => (
                            <button
                                key={index}
                                onClick={() => handleSchoolClick(escuela)}
                                className="school-button"
                                style={{ backgroundColor: selectedSchool === escuela ? '#002776' : '#fff', color: selectedSchool === escuela ? '#fff' : '#000' }} // Cambia el color según la selección
                            >
                                {escuela}
                            </button>
                        ))}
                        <button onClick={handleResetFilter} className="reset-filter">
                            Resetear Filtro
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
            {/* Modal para mostrar detalles del semillero */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} semillero={selectedSemillero} />
            )}
        </>
    );
}

export default Semi;
