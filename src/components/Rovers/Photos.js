import {Rovers} from './Rovers.css'
export default function Photos ({photos}){
    console.log(photos);
    let {img_src, camera:{earth_date}, rover:{name, status, full_name}} = photos
    return (
        <div className={'dataBox'}>
            {/*<p>Id of Photo: {id}</p>*/}
            <p>{name}</p>
            <p>{full_name}</p>
            <img src={img_src} alt="" className={'roverPhotos'}/>
        </div>
    );
}
