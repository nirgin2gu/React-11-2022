import albums from "../albums.json";
import LisaToode from "./LisaToode";
function Albums() {
    return (
      <div>
        {albums.map(element => <div key={element.id} >{element.id}</div>)}
    </div> 
     );
}

export default Albums;



// kustuta,  muuda jne nagu poed.js