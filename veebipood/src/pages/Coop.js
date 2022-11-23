import coopTootedFailist from "../ecoop.json";

function Coop() {
    return ( 
    <div>
        {coopTootedFailist.data.map(element => <div key ={element.id}</div>)}
    </div> 
    );
}

export default Coop;