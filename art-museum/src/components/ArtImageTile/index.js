import { Link } from "react-router-dom";
const ArtImageTile = function(props){
    return(
     
            <Link to={`/galleries/${props.galleryId}/art/${props.art.id}`}> 
                <img src= {props.art.images[0].baseimageurl} width="200" height='300'></img>
            </Link>
      
    )
}

export default ArtImageTile;