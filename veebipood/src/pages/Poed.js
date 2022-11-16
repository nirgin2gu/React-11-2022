import {useState, useRef} from "react"

function Poed() {
   // const[poed, muudaPoed] = useState([]);
   const[poed, muudaPoed] = useState(["Kristiine", "Põhja-Tallinn", "Mustamäe", "Kesklinn", "Haabersti", "Õismäe, Lasnamäe"]);

   const sorteeriAZ = () => {
     // poed.sort((a,b) => b.localeCompare(b));     võiv ka kasutada!!
    poed.sort();
    muudaPoed(poed.slice()); //browseris: parem klõps, inspect, console
   }
   const sorteeriZA = () => {
    // poed.sort();                       võib ka neid kasuytada
    //  poed.reverse();                       ----//-----
    poed.sort((a,b) => b.localeCompare(a));
    poed.sort((a,b) => -1 * a.localeCompare(b));
    muudaPoed(poed.slice());
}
   const sorteeriS6naJ2rgi = () => {
poed.sort((a,b) => a.lenght - b.lenght);
muudaPoed(poed.slice());
}
   const filtreeri = () => {
       const tagastus = poed.filter(element => element.endsWith("mäe"));
        muudaPoed(tagastus);
   }
        const muudaTagasi = () => {
             muudaPoed(["Kristiine", "Põhja-Tallinn", "Mustamäe", "Kesklinn", "Haabersti", "Õismäe","Lasnamäe" ]);
}
const filtreeriKellelITeine = () => {
    const tagastus = poed.filter(element => element.charAt(1) === "i");
    muudaPoed(tagastus);
}

    const muudaIgaYht = () => {
        const tagastus = poed.map(element => "--" + element);
        muudaPoed(tagastus);
    }
   
    const muudaK6ikV2ikseks = () => {
        const tagastus = poed.map(element => element.toLowerCase());
        muudaPoed(tagastus);
    }
  const kustuta = (j2rjekorraNumber) => {
    poed.slice(j2rjekorraNumber,1);
    muudaPoed(poed.slice()); 
  }

  const poodViide = useRef(); //poodRef (muidu paneme Ref poodRef)
   
  const lisaPood = () => {
    poed.push(poodViide.current.value);  
    muudaPoed(poed.slice());
  }

   return ( 
    <div>

    <label>Uus pood</label>
    <input ref={poodViide} type = "text" />
    <button onClick={lisaPood} >Sisesta</button>
        <br />
        <button onClick={muudaTagasi}>Muuda tagasi</button>
        <button onClick={sorteeriAZ}>Järjesta tähestiku alusel</button>
        <button onClick={sorteeriZA}>Järjesta Z - A</button>
        <button onClick={filtreeri}>Jäta alles vaid mäe-d sisaldavad</button>
        <button onClick={sorteeriS6naJ2rgi}>Filtreeri sõna järgi</button>
        <button onClick={filtreeriKellelITeine}>Jäta alles i-d sisaldavad</button>
        <button onClick={muudaIgaYht}>Muuda igaüht</button>
        <button onClick={muudaK6ikV2ikseks}>Muuda kõik väikseks</button>

        { poed.map((yksPood, i) => 
            <div key={i}>
              {yksPood}
              <button onClick={() =>kustuta(i)} >x</button>
        
            </div>) }
        <div>-----------------------------------</div>
        <div>Kristiine</div>
        <div>Põhja-Tallinn</div>
        <div>Mustamäe</div>
        <div>Kesklinn</div>
        <div>Haabersti</div>
        <div>Õismäe</div>
        <div>Lasnamäe</div>
    </div> );
}



export default Poed;