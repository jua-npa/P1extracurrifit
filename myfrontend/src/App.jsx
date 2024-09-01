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
