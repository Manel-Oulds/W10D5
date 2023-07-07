import logo from './logo.svg';
import './App.css';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import {BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Galleries</h1>
        <GalleryNavigation galleries={harvardArt} />
      </header>
      <Router> 
            <Route path="/galleries/:galleryId"> 
                <GalleryView/> 
            </Route>
      </Router>
    </div>

  );
}

export default App;
