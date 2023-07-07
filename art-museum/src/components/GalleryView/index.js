import {useParams} from "react-router"

const GalleryView = function (props) {
    const params = useParams();
    
    const gallery = props.galleries.records.find((item) => item.id == params.galleryId);

   return(
        <h2>Hello from {gallery.name}</h2>
    );
}

export default GalleryView;