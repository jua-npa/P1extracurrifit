<<<<<<< HEAD
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footer.jsx';
import Header from './header.jsx';
import MyCarousel from './carousel.jsx';
import '../styles/mainContainer.css';

const eventsData = {
    "events": {
        "2024-09-02": ["CineClub EAFIT"],
        "2024-09-03": ["Busqueda en bases bibliograficas", "Talleres cortos", "Concierto osos de niebla"],
        "2024-09-04": ["Asambleas estudiantiles", "Amar y comprender la opera", "Conversacion maestría en derecho"],
        "2024-09-05": ["Taller normas APA", "Conversacion maestría en Economía"],
        "2024-09-06": ["Concurso internacionalizacion", "Concurso AACAJ"]
    }
};

function MainContainer() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data (if needed, otherwise you can remove this if not using data from API)
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

    // Function to get the start and end date of the current week
    const getWeekRange = () => {
        const today = new Date();
        const firstDay = today.getDate() - today.getDay() + 1; // Get the first day of the week
        const lastDay = firstDay + 6; // Get the last day of the week

        const startOfWeek = new Date(today.setDate(firstDay)).toISOString().split('T')[0];
        const endOfWeek = new Date(today.setDate(lastDay)).toISOString().split('T')[0];

        return { startOfWeek, endOfWeek };
    };

    const { startOfWeek, endOfWeek } = getWeekRange();

    return (
        <>
            <Header />
            <div className="container mt-5">
                <MyCarousel />
                {error && <div className="alert alert-danger">Error: {error.message}</div>}
                {data ? (
                    <>
                        <div className="alert alert-success" role="alert">
                            {/* Optional alert */}
                        </div>
                        {/* Render events for the current week */}
                        <div>
                            <h2>Events for the Week ({startOfWeek} to {endOfWeek}):</h2>
                            {Object.entries(eventsData.events).filter(([date]) => {
                                return date >= startOfWeek && date <= endOfWeek;
                            }).map(([date, events]) => (
                                <div key={date}>
                                    <h3>{date}</h3>
                                    <ul>
                                        {events.map((event, index) => (
                                            <li key={index}>{event}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            {Object.keys(eventsData.events).filter(date => date >= startOfWeek && date <= endOfWeek).length === 0 && (
                                <div>No events for this week.</div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="alert alert-info">Cargando datos...</div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default MainContainer;
=======
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
>>>>>>> origin/juanGarzon
