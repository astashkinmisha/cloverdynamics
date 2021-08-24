import Photos from "../PhotosRendering/Photos";


export default function SpiritRover ({value}){
    console.log(value);
    let {photos} = value;
    return (
        <div>
            {
                photos.map(value => <Photos key={value.id} photos={value}/>)
            }
        </div>
    );
}
