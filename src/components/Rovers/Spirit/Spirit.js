import {useEffect, useState} from "react";
import {fetchNASASpirit} from "../../../fetchService/FetchApi";
import SpiritRover from "./SpiritRover";

export default function Spirit (){
    let [rovers, setRovers] = useState([]);

    useEffect(() => {
        fetchNASASpirit().then(value => setRovers([{...value}]))
    },[]);
    console.log(rovers);


    return (

        <div>
            {
                rovers.map(value => <SpiritRover key={value.id} value={value}/>)
            }
        </div>
    );
}
