// Deportes.js
import React, { useEffect, useState } from 'react';
import direccion from '../util/axios';
import Header from "../includes/header";
import Footer from "../includes/footer";
import Modal from '../includes/deporteModal'; // Importa el modal
import '../styles/deportes.css';

function Deportes() {
    const [deportes, setDeportes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar el modal
    const [selectedDeporte, setSelectedDeporte] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada
    const [categorias, setCategorias] = useState([]); // Estado para almacenar las categorías únicas

    useEffect(() => {
        direccion.get('/deportes/')
            .then(response => {
                console.log(response.data); // Verifica la estructura de los datos aquí
                if (Array.isArray(response.data)) {
                    setDeportes(response.data);
                    // Obtener categorías únicas
                    const uniqueCategories = [...new Set(response.data.map(deporte => deporte.categoria))];
                    setCategorias(uniqueCategories);
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

    const handleOpenModal = (deporte) => {
        setSelectedDeporte(deporte);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDeporte(null);
    };

    // Filtrar deportes por nombre, escuela o categoría
    const filteredDeportes = deportes.filter((deporte) => {
        return (
            (deporte.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            deporte.categoria.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedCategory ? deporte.categoria === selectedCategory : true) // Filtrar por categoría si está seleccionada
        );
    });

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleResetFilter = () => {
        setSelectedCategory('');
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Header />
            <div className="deportes-container">
                <div className="text-container">
                    <h1>Estos son los deportes</h1>
                </div>
                {/* Barra de búsqueda */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Buscar deporte por nombre o categoria"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="deportes-list">
                    {filteredDeportes.length > 0 ? (
                        filteredDeportes.map((deporte) => (
                            <div key={deporte.id} className="deporte-card">
                                <h5>{deporte.nombre}</h5>
                                <h6>{deporte.escuela}</h6>
                                <p>{deporte.descripcion}</p>
                                <button className="ver-mas" onClick={() => handleOpenModal(deporte)}>
                                    Ver más
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No hay deportes disponibles.</p>
                    )}
                </div>

                {/* Botón de filtro */}
                <div className="category-filter">
                    <h3>Filtrar por categoría</h3>
                    <div className="category-buttons">
                        {categorias.map((categoria, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(categoria)}
                                className="category-button"
                                style={{ backgroundColor: selectedCategory === categoria ? '#002776' : '#fff', color: selectedCategory === categoria ? '#fff' : '#000' }} // Cambia el color según la selección
                            >
                                {categoria}
                            </button>
                        ))}
                        <button onClick={handleResetFilter} className="reset-filter">
                            Resetear Filtro
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
            {/* Modal para mostrar detalles del deporte */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} deporte={selectedDeporte} />
            )}
        </>
    );
}

export default Deportes;
