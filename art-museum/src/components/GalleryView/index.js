import {useParams} from "react-router"
import ArtImageTile from "../ArtImageTile";

const GalleryView = function (props) {
    const params = useParams();
    
    const gallery = props.galleries.records.find((item) => item.id == params.galleryId);
    

   return(
    <>
        <h2>Hello from {gallery.name}</h2>
        <div>
            {gallery.objects.map(el=>{
                return(
                   <ArtImageTile art={el} galleryId={gallery.id} />
                )
            })}
        </div>
    </>
    );
}

export default GalleryView;