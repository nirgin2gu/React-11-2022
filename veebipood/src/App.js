import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht";
import Ostukorv from "./pages/Ostukorv";
import LisaToode from "./pages/LisaToode";


function App() {
  return (
    <div className="App">
      <Link to="/avaleht"></Link>
        <img classname="pilt" src="https://upload.wikimedia.org/wikipedia/commons/6/63/Norfolk_potato_field_-_geograph.org.uk_-_180521.jpg" alt="" />
      <button className="nupp">Nupp</button>
    

      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
        
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Toodet lisama</button>
      </Link>
      
      <Routes>
        
         <Route path="avaleht" element={ <Avaleht />} />
         <Route path="ostukorv" element={<Ostukorv />} />
         <Route path="lisa-toode" element={ <LisaToode />} />
      </Routes>
    
    </div>
  );
}

export default App;
