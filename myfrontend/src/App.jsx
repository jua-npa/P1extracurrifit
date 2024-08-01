import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener datos
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/home'); // Cambia el endpoint según tu API
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return ( 
   <div className="container mt-5">
      <h1 className="text-center">¡Holitaaa</h1>
      {error && <div className="alert alert-danger">Error: {error.message}</div>}
      {data ? (
        <div className="alert alert-success" role="alert">
          Datos obtenidos: {JSON.stringify(data)}
        </div>
      ) : (
        <div className="alert alert-info">Cargando datos...</div>
      )}
    </div>
  );
}

export default App
