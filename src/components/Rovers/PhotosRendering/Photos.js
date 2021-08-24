import './Photos.css'
import {useHistory} from "react-router-dom";

export default function Photos ({photos}){

    let history = useHistory();


    console.log(photos);
    let {img_src, camera:{earth_date, full_name}, rover:{name, status, landing_date}} = photos
    return (
        <div>
            <button className={'back-button'} onClick={history.goBack}> Back to previous page </button>
        <div className={'dataBox'}>
            <p className={'name-box'}>{name}</p>
            <p className={'full-name-box'}> Rover's full name : {full_name}</p>
            <p>Landing date: {landing_date}</p>
            <img src={img_src} alt="" className={'roverPhotos'}/>
            <br/>
        </div>
        </div>
    );
}
