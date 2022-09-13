import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes ,Route } from 'react-router-dom';
import Allmusic from './pages/Allmusic';


function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes>
      <Route path='/allsongs'  element={<Allmusic />} exact />
      </Routes>
      
    </Router>
  );
}

export default App;
