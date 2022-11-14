import { useState } from "react";

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel"));
    
    const muudaKeelEst = () => {
        uuendaKeel("est");
        localStorage.setItem("keel", "est");
    }
    const muudaKeelEng = () => {
        uuendaKeel("eng");
        localStorage.setItem("keel", "eng");
    }

    const muudaKeelRus = () => {
        uuendaKeel("rus");
        localStorage.setItem("keel", "eng");
    }

    return ( 
    <div>
        <button onClick={muudaKeelEst}>Eesti</button>
        <button onClick={muudaKeelEng}>Inglise</button>
        <button onClick={muudaKeelEng}>Inglise</button>
        
        { keel ==="est" &&    <div>Lehekülg on eesti keelne</div> }
        { keel ==="eng" &&   <div>Lehekülg on inglise keelne</div> }
        { keel ==="rus" &&   <div>Lehekülg on vene keelne</div> }

    </div> );
}

export default Seaded;

//SALVESTATAKSE 
// 1. Andmebaas -> kõik tundlikud andmed, andmed mida peab kõigile näitama(passwords etc)
// 2. Browseri vahemällu -> lehekülje seadistused(keelevalik, dark mode/light mode, tooteid valides infinite scroll/leheküljenumbrid all)
// 3. Faili -> logid / mis rakenduses toimub / analüütika (kuhu klikid jne, miks ei toimi)