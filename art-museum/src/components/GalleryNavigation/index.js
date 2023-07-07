import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

const GalleryNavigation = ({ galleries }) => {
  return (
    <nav>
      {
        galleries.records.map((gallery) => (
          <NavLink
            key={gallery.id}
            to={`/galleries/${gallery.id}`}
          >
            {gallery.name}
          </NavLink>
        ))
      }
    </nav>
  );
};

export default GalleryNavigation;
