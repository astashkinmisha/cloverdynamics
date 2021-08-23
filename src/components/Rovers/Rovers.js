import {useEffect, useState} from "react";
import {getData} from "../../fetchService/FetchApi";
import Rover from "./Rover";
import Photos from "./Photos";
import {Route} from "react-router-dom";

export default function Rovers (props){

    // let {match:{url}, history} = props;

    let [rovers, setRovers] = useState([]);

    useEffect(() => {
        getData().then(value => setRovers([{...value}]))
    },[])
    console.log(rovers);




    return (

        <div>
            {
                rovers.map(value => <Rover key={value.id} value={value}/>)
            }
            <Route path={'/rovers/photos'} render={(props) => {
                return <Photos{...props}/>
            }}/>
        </div>

    );
}
