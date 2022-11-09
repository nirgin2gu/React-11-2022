import {useState} from "react";
// ffc
  function Avaleht() {
    const [kogus, uuendaKogus] = useState(5);
    const [sonum, uuendaSonum] = useState("");
    const [laigitud,uuendaLaigitud] = useState(false);
    

    console.log(kogus); //tekib selline kirje browseri konsooli 
                        //browseris:parem hiireklops lehel -> inspect -> console

   function vahenda () {
    // kogus = kogus -1
    
    uuendaKogus(kogus -1);
    console.log(kogus);
    uuendaSonum("Kogus vähendatud");
}
    function suurenda() {
        uuendaKogus(kogus + 1);
        uuendaSonum("Kogus suurendatud");
    }
    function nulli() {
            uuendaKogus(0);
            uuendaSonum("Kogus nullitud");

    }


//tab nihutab paremale
//shift + tab nihutab vasakule
// ctrl+ä kommentaar
// loogelised sulud on viide javascriptile {}


    return ( 
    <div>
        {laigitud === false && <img onClick={() => uuendaLaigitud(true)} src="/mittelaigitud.svg" alt="" /> }
        {laigitud === true && <img onClick={() => uuendaLaigitud(false)} src="/laigitud.svg" alt="" /> }
        
        <div>------------</div>
          <div>{sonum}</div>
        {/*button hidden={kogus === 0} onClick={nulli}>Nulli tagasi</button> <br /> */}
        { kogus > 0 && <button  onClick={nulli}>Nulli tagasi </button> }
        <br/>
        <button disabled={kogus === 0} onClick={vahenda}>-</button>
        <div>{kogus}</div>
        <button onClick={suurenda}>+</button>
         
        <div>See on avaleht</div> 
        <button>Nupp</button>
    </div>
    
    );
}

export default Avaleht;