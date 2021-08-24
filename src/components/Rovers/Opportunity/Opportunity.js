import {useEffect, useState} from "react";
import {fetchNASAOpportuntity} from "../../../fetchService/FetchApi";
import OpportunityRover from "./OpportunityRover";

export default function Opportunity (){
let [rovers, setRovers] = useState([]);

useEffect(() => {
    fetchNASAOpportuntity().then(value => setRovers([{...value}]))
},[]);
console.log(rovers);


return (

    <div>
        {
            rovers.map(value => <OpportunityRover key={value.id} value={value}/>)
        }
    </div>

);
}
