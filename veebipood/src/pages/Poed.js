import {useState, useRef} from "react"



function Poed() {
   // const[poed, muudaPoed] = useState([]);
   const[poed, muudaPoed] = useState(
    [
      {nimi: "Kristiine",aeg: "9-22"},
      {nimi: "Põhja-Tallinn",aeg: "9-22"},
      {nimi: "Mustamäe", aeg: "9-21"},
      {nimi:"Kesklinn",aeg: "9-20"},
      {nimi: "Haabersti",aeg: "9-19"},
      {nimi: "Õismäe",aeg: "9-10"},
      {nimi: "Lasnamäe", aeg: "8-20"},
          ]);

   const sorteeriAZ = () => {
     // poed.sort((a,b) => b.localeCompare(b));     võiv ka kasutada!!
    poed.sort((a,b) => a.nimi.localeCompare(b.nimi));
    muudaPoed(poed.slice()); //browseris: parem klõps, inspect, console
   }
   const sorteeriZA = () => {
    // poed.sort();                       võib ka neid kasuytada
    //  poed.reverse();                       ----//-----
    poed.sort((a,b) => b.localeCompare(a.nimi));
    poed.sort((a,b) => -1 * a.localeCompare(b));
    muudaPoed(poed.slice());
}
   const sorteeriS6naJ2rgi = () => {
poed.sort((a,b) => a.nimi.lenght - b.nimi.lenght);
muudaPoed(poed.slice());
}
   const filtreeri = () => {
       const tagastus = poed.filter(element => element.nimi.endsWith("mäe"));
        muudaPoed(tagastus);
   }
        const muudaTagasi = () => {
             muudaPoed(["Kristiine", "Põhja-Tallinn", "Mustamäe", "Kesklinn", "Haabersti", "Õismäe","Lasnamäe" ]);
}
const filtreeriKellelITeine = () => {
    const tagastus = poed.filter(element => element.nimi.charAt(1) === "i");
    muudaPoed(tagastus);
}

    const muudaIgaYht = () => {
        const tagastus = poed.map(element => {return {nimi:"--" + element.nimi, aeg: element.aeg}});
        muudaPoed(tagastus);
    }
   
    const muudaK6ikV2ikseks = () => {
        const tagastus = poed.map(element => {return{nimi: element.nimi.toLowerCase(), aeg: element.aeg}});
        muudaPoed(tagastus);
    }
  const kustuta = (j2rjekorraNumber) => {
    poed.slice(j2rjekorraNumber,1);
    muudaPoed(poed.slice()); 
  }

  const poodViide = useRef(); //poodRef (muidu paneme Ref poodRef)
  const aegViide = useRef();
   
  const lisaPood = () => {
    poed.push({nimi: poodViide.current.value, aeg: aegViide.current.value});  
    muudaPoed(poed.slice());
  }

   return ( 
    <div>

    <label>Uus pood</label>
    <input ref={poodViide} type = "text" />
    <label>Uue poe lahtiolekuaeg</label>
    <input ref={aegViide} type="text" />
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
              {yksPood.nimi} {yksPood.aeg}
              <button onClick={() =>kustuta(i)} >x</button>
        
            </div>) }
       
    </div> );
}



export default Poed;