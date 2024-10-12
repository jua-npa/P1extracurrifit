import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Urls from './util/urls.js'
import MainContainer from './includes/mainContainer.jsx';
import StGroups from './screens/grupos_estudiantiles.jsx';
import Calendar from './screens/calendario.jsx';
import Deport from './screens/deportes.jsx';
import Event from './screens/eventos.jsx';
import Semi from './screens/semilleros.jsx';
import Resultados from './screens/results.jsx';
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
        <Route path = {Urls.semill} element ={<Semi/>}/>
        <Route path= {Urls.results} element = {<Resultados/>}/>
      </Routes>
    </Router>
  );
}

export default App;