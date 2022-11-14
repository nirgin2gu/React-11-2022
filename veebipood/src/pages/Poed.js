import {useState} from "react"

function Poed() {
   // const[poed, muudaPoed] = useState([]);
   const[poed, muudaPoed] = useState(["Kristiine", "Põhja-Tallinn", "Mustamäe", "Kesklinn", "Haabersti", "Õismäe"]);

   const sorteeriAZ = () => {
    poed.sort();
    muudaPoed(poed.slice()); //browseris: parem klõps, inspect, console

   }

    return ( 
    <div>
        <button onClick={sorteeriAZ}>Järjesta tähestiku alusel</button>
        { poed.map((yksPood, j2rjekorranumber) => <div key={j2rjekorranumber}>{yksPood}</div>)}
        <div>-----------------------------------</div>
        <div>Kristiine</div>
        <div>Põhja-Tallinn</div>
        <div>Mustamäe</div>
        <div>Kesklinn</div>
        <div>Haabersti</div>
        <div>Õismäe</div>
    </div> );
}

export default Poed;