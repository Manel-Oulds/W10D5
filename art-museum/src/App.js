import logo from './logo.svg';
import './App.css';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ArtImageTile from './components/ArtImageTile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Galleries</h1>
        <GalleryNavigation galleries={harvardArt} />
      </header>
      
    <Switch>

              <Route path ="/galleries/:galleryId/art/:artId">
                <h2>Art Image</h2>
              </Route>
              <Route path="/galleries/:galleryId">
                  <GalleryView galleries={harvardArt} /> 
              </Route> 
              <Route path= "/error">
                  <h2>Error 404 Page not Found</h2>
              </Route>
              <Route exact path="/">
                  <h2> Harvard Art Museum</h2>
                  <p>Look but don not touch!. Please select the gallery in the navigation bar</p>
              </Route>
                <Route>
                    <h2>Error 404 Page not Found</h2>
                </Route>
              
    </Switch>
      


      
    </div>

  );
}

export default App;
