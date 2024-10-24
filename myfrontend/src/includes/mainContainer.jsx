import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './footer.jsx';
import Header from './header.jsx';
import MyCarousel from './carousel.jsx';
import '../styles/mainContainer.css';
// Assuming events.json is available locally
import eventsData from '../util/events.json'; // Adjust the path as needed

function MainContainer() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data (if needed, otherwise skip this if only using events.json)
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
    const firstDay = today.getDate() - today.getDay() + 1; // Monday
    const lastDay = firstDay + 6; // Sunday

    const startOfWeek = new Date(today.setDate(firstDay)).toISOString().split('T')[0];
    const endOfWeek = new Date(today.setDate(lastDay)).toISOString().split('T')[0];

    return { startOfWeek, endOfWeek };
  };

  const { startOfWeek, endOfWeek } = getWeekRange();

  // Function to filter events within the current week
  const getWeeklyEvents = () => {
    return eventsData.filter(event => {
      const eventDate = event.date.split('T')[0]; // Get date part only
      return eventDate >= startOfWeek && eventDate <= endOfWeek;
    });
  };

  const weeklyEvents = getWeeklyEvents();

  return (
    <>
      <Header />
      <div className="container mt-5">
        <MyCarousel />
        {error && <div className="alert alert-danger">Error: {error.message}</div>}
        {data ? (
          <>
            {/* Render events for the current week */}
            <div>
              <h2>Eventos de la semana ({startOfWeek} a {endOfWeek}):</h2>
              {weeklyEvents.length > 0 ? (
                weeklyEvents.map((event) => (
                  <div key={event.id}>
                    <h3>{event.name}</h3>
                    <p>{new Date(event.date).toLocaleDateString()} - {event.time}</p>
                    <p>{event.location}</p>
                    <p>{event.description}</p>
                  </div>
                ))
              ) : (
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
