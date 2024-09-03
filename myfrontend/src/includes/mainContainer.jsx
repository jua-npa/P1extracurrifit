import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footer.jsx';
import Header from './header.jsx';
import MyCarousel from './carousel.jsx';
import '../styles/mainContainer.css'

function MainContainer() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener datos
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/home'); 
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return ( 
    <>
    <Header/>
   <div className="container mt-5">
      <MyCarousel/>
      {error && <div className="alert alert-danger">Error: {error.message}</div>}
      {data ? (
        <>
        <div className="alert alert-success" role="alert">
          modificado por juan pablo rua
        </div>
        <div className="alert alert-success" role="alert">
          modificado por juan pablo rua
        </div>
        <div className="alert alert-success" role="alert">
          modificado por juan pablo rua
        </div>
        <div className="alert alert-success" role="alert">
          modificado por juan pablo rua
        </div>
        </>
      ) : (
        <div className="alert alert-info">Cargando datos...</div>
      )}
        
    </div>
    <div>
    <Footer/>
    </div>

    </>
  );
}

export default MainContainer
