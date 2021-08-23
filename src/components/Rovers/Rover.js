import Photos from "./Photos";

export default function Rover ({value}){
    // console.log(value.photos);
    // let {photos:{img_src}} = value;
    // let {photos:{id:{img_src}}]} = value;
    console.log(value);
    let {photos} = value;
    // console.log(id);
    return (
        <div>
            {
                photos.map(value => <Photos key={value.id} photos={value}/>)
            }
        </div>
    );
}
