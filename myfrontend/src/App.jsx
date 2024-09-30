<<<<<<< Updated upstream
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
=======
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Urls from './util/urls.js'
import MainContainer from './includes/mainContainer.jsx';
import StGroups from './screens/studentGroups.jsx';
import Calendar from './screens/calendario.jsx';
import Deport from './screens/deportes.jsx';
import Event from './screens/eventos.jsx';
import Semill from './screens/semilleros.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App () {
  return (
    <Router>
      <Routes>
        <Route path = {Urls.home} element ={<MainContainer/>}/>
        <Route path = {Urls.studentGroups} element ={<StGroups/>}/>
        <Route path = {Urls.calendar} element ={<Calendar/>}/>
        <Route path = {Urls.deports} element ={<Deport/>}/>
        <Route path = {Urls.events} element ={<Event/>}/>
        <Route path = {Urls.semill} element ={<Semill/>}/>
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> Stashed changes
