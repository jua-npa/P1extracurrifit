// Event.js
import React, { useEffect, useState } from 'react';
import direccion from '../util/axios';
import Header from "../includes/header";
import Footer from "../includes/footer";
import Modal from '../includes/eventModal'; 
import '../styles/events.css';

function Event() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar el modal
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada
    const [categorias, setCategorias] = useState([]); // Estado para almacenar las categorías únicas

    useEffect(() => {
        direccion.get('/resumen_eventos/') // Endpoint para generar resúmenes de eventos
            .then(response => {
                console.log("Resúmenes de eventos generados", response.data);
            })
            .catch(error => {
                console.error("Error generando resúmenes de eventos", error);
            });

        direccion
            .get('/events/') // Endpoint para obtener la lista de eventos
            .then(response => {
                console.log(response.data); // Verifica la estructura de los datos aquí
                if (Array.isArray(response.data)) {
                    setEvents(response.data);
                    // Obtener categorías únicas
                    const uniqueCategories = [...new Set(response.data.map(event => event.category))];
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

    const handleOpenModal = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    // Filtrar eventos por título, categoría o término de búsqueda
    const filteredEvents = events.filter((event) => {
        return (
            (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             event.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedCategory ? event.category === selectedCategory : true) // Filtrar por categoría si está seleccionada
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
            <div className="events-container">
                <div className="text-container">
                    <h1>Estos son los eventos disponibles</h1>
                </div>
                {/* Barra de búsqueda */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Buscar evento por título o categoría..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="events-list">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <div key={event.id} className="event-card">
                                <h5>{event.title}</h5>
                                <h6>{event.category}</h6>
                                <p>{event.resumen}</p>
                                <button className="ver-mas" onClick={() => handleOpenModal(event)}>
                                    Ver más
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No hay eventos disponibles.</p>
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
            {/* Modal para mostrar detalles del evento */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} event={selectedEvent} />
            )}
        </>
    );
}

export default Event;
