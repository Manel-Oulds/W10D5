import logo from './logo.svg';
import './App.css';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Galleries</h1>
        <GalleryNavigation galleries={harvardArt} />
      </header>
    </div>
  );
}

export default App;
