import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Urls from './util/urls.js'
import MainContainer from './includes/mainContainer.jsx';
import StGroups from './screens/studentGroups.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App () {
  return (
    <Router>
      <Routes>
        <Route path = {Urls.home} element ={<MainContainer/>}/>
        <Route path = {Urls.studentGroups} element ={<StGroups/>}/>
      </Routes>
    </Router>
  );
}

export default App;
