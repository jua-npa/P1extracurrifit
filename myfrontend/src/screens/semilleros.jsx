<<<<<<< HEAD
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
    const [selectedSchool, setSelectedSchool] = useState('');

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

    const schools = [...new Set(semilleros.map((s) => s.escuela))]; // Obtener las escuelas únicas

    const filteredSemilleros = semilleros.filter((semillero) => {
        return (
            (semillero.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
             semillero.escuela.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedSchool === '' || semillero.escuela === selectedSchool) // Filtrar por escuela seleccionada
        );
    });

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
            </div>
            <Footer />
            {/* Modal para mostrar detalles del semillero */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} semillero={selectedSemillero} />
        </>
    );
}

=======
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

    useEffect(() => {
        direccion
            .get('/semilleros/')
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

    const handleOpenModal = (semillero) => {
        setSelectedSemillero(semillero);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedSemillero(null);
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
                <div className="semilleros-list">
                    {semilleros.length > 0 ? (
                        semilleros.map((semillero) => (
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
            </div>
            <Footer />
            {/* Modal para mostrar detalles del semillero */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} semillero={selectedSemillero} />
        </>
    );
}

>>>>>>> origin/juanGarzon
export default Semi;