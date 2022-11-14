import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht";
import Ostukorv from "./pages/Ostukorv";
import LisaToode from "./pages/LisaToode";
import MuudaToode from "./pages/MuudaToode";
import Seaded from "./pages/Seaded";
import YksikToode from "./pages/YksikToode";
import HaldaTooteid from "./pages/HaldaTooteid";
import Poed from "./pages/Poed";
import Meist from './pages/Meist';



function App() {
  return (
    <div className="App">
      <Link to="/"><img className="pilt" 
      src="https://upload.wikimedia.org/wikipedia/commons/6/63/Norfolk_potato_field_-_geograph.org.uk_-_180521.jpg" 
      alt="" />
      </Link>
        
      
    

        <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
        </Link>

      <Link to="/halda">
        <button className="nupp">Toodet lisama</button>
      </Link>

      <Link to="/poed">
        <button className="nupp">Meie poed</button>
      </Link>
      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>
      <Link to="/meist">
        <button className="nupp">Meist</button>
      </Link>
      
      <Routes>
        
         <Route path="" element={ <Avaleht />} />
         <Route path="ostukorv" element={<Ostukorv />} />
         <Route path="lisa-toode" element={ <LisaToode />} />
         <Route path="halda" element={<HaldaTooteid />} />
         <Route path="muuda" element={<MuudaToode />} />
         <Route path="seaded" element={<Seaded />} />
         <Route path="poed" element={<Poed />} />
         <Route path="toode" element={<YksikToode />} />
         <Route path="meist" element={<Meist />} />

      </Routes>
    
    </div>
  );
}

export default App;
