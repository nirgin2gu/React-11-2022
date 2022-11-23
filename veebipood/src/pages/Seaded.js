import { useRef, useState, } from "react";
 
//sort muudab järjekorda (a,b)
// filter vähendab (arv) (element)
// map asendab igaüht (arv täposelt sama, kogus sama) (element)    (element, j2rjekorranumber)

// splice(mitmendatKustutan, mituTükkiKustutan)
//poed.delete(j2rjekorraNumber)

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est" );
    
    const telefonViide = useRef(); //telefonRef (reference/viide)
    const emailViide = useRef(); //emailRef
    
    const sisestaTelefon = () => {
        localStorage.setItem("telefon", telefonViide.current.value);
    }

    const sisestaEmail = () => {
        localStorage.setItem("email", emailViide.current.value);
    }

    // const muudaKeelEst = () => {
       // uuendaKeel("est");
      //  localStorage.setItem("keel", "est");
    //}
    // const muudaKeelEng = () => {
     //   uuendaKeel("eng");
      //  localStorage.setItem("keel", "eng");
    //}

    //const muudaKeelRus = () => {
      //  uuendaKeel("rus");
       // localStorage.setItem("keel", "rus");
    //}
    const muudaKeel = (uusKeel) => {
        uuendaKeel(uusKeel);
        localStorage.storage.setItem("keel", uusKeel);
    }

    
    
    
    return ( 
    <div>
        <button onClick={() => muudaKeel("est") } > Eesti</button>
        <button onClick={() => muudaKeel("eng") } >Inglise</button>
        <button onClick={() => muudaKeel("rus") } >Vene</button>
       
        
        { keel ==="est" &&    <div>Lehekülg on eesti keelne</div> }
        { keel ==="eng" &&   <div>Lehekülg on inglise keelne</div> }
        { keel ==="rus" &&   <div>Lehekülg on vene keelne</div> }
        <label>Meie telefoninumber</label>
        <input defaultValue={localStorage.getItem("telefon")} ref={telefonViide} type = "text" />
        <button onClick={sisestaTelefon}>Sisesta</button>
        <br/>
        
        <label>Meie e-mail</label>
        <input defaultValue={localStorage.getItem("email")} ref={emailViide} type = "text" />
        <button onClick={sisestaEmail}>Sisesta</button>
    </div> );
}

export default Seaded;

//SALVESTATAKSE 
// 1. Andmebaas -> kõik tundlikud andmed, andmed mida peab kõigile näitama(passwords etc)
// 2. Browseri vahemällu -> lehekülje seadistused(keelevalik, dark mode/light mode, tooteid valides infinite scroll/leheküljenumbrid all)
// 3. Faili -> logid / mis rakenduses toimub / analüütika (kuhu klikid jne, miks ei toimi)