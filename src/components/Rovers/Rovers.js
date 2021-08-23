import {useEffect, useState} from "react";
import {getData} from "../../fetchService/FetchApi";
import Rover from "./Rover";

export default function Rovers (){
    let [rovers, setRovers] = useState([{}]);

    useEffect(() => {
        getData().then(value => setRovers([{...value}]))
    })
    console.log(rovers);


    return (
        <div>
            {
                rovers.map(value => <Rover key={value.id} value={value}/>)
            }
        </div>
    );
}
