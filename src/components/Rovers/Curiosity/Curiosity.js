import {useEffect, useState} from "react";
import {fetchNASACuriosity} from "../../../fetchService/FetchApi";
import CuriosityRover from "./CuriosityRover";



export default function Curiosity ({data}){

    // let {match:{url}, history} = props;

    let [rovers, setRovers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [photosPerPage, setPhotosPerPage] = useState(20)

    useEffect(async () => {
        setLoading(true);
      const res =  await fetchNASACuriosity()
            .then(value =>
                setRovers(
                    [{...value}]))
        setLoading(false);
    },[]);

const indexOfLastPhoto = currentPage * photosPerPage;
const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
const currentPages = rovers.slice(indexOfFirstPhoto, indexOfLastPhoto)


    return (

        <div>
            {
                rovers.map(value => <CuriosityRover key={value.id} value={value}/>)
            }
        </div>

    );
}
