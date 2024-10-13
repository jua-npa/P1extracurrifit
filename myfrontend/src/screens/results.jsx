import { useEffect, useState } from 'react';
import direccion from '../util/axios'; // Asume que tienes configurada la instancia de Axios
import Header from "../includes/header";
import Footer from "../includes/footer";
import '../styles/results.css'; // Asegúrate de tener estilos para esta página

function Resultados() {
    const [resultados, setResultados] = useState([]);  // Estado para almacenar los resultados
    const [loading, setLoading] = useState(true);      // Estado para gestionar el loading
    const [error, setError] = useState(null);          // Estado para gestionar errores

    // Obtener el término de búsqueda desde la URL
    const queryParams = new URLSearchParams(window.location.search);
    const searchTerm = queryParams.get('search') || '';

    useEffect(() => {
        if (searchTerm) {
            direccion
                .get(`/buscar/?search=${searchTerm}`)  
                .then(response => {
                    console.log(response.data);
                    if (Array.isArray(response.data)) {
                        setResultados(response.data);
                    } else {
                        console.error('La respuesta de la API no es un array:', response.data);
                    }
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        } else {
            setLoading(false); // Si no hay término de búsqueda, no muestra resultados
        }
    }, [searchTerm]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Header />
            <div className="resultados-container">
                <div className="text-container">
                    <h1>Resultados para: {searchTerm}</h1>
                </div>
                <div className="resultados-list">
                    {resultados.length > 0 ? (
                        resultados.map((grupo) => (
                            <div key={grupo.id} className="grupo-card">
                                <img src={grupo.imagen} alt={grupo.nombre} className="grupo-imagen" />
                                <h3>{grupo.nombre}</h3>
                                <p>{grupo.descripcion}</p>
                            </div>
                        ))
                    ) : (
                        <p>No se encontraron resultados para {searchTerm}.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Resultados;
