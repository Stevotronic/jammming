import './App.css';
import SearchBar from './Searchbar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import Tracklist from './Tracklist/Tracklist';
import Track from './Track/Track';
import BtnSave from './Buttons/BtnSave';
import BtnSearch from './Buttons/BtnSearch';

function App() {
  return (
    <div>
      <h1>De app der apps</h1>
      <SearchBar />
      <BtnSearch />
      <SearchResults />
      <Playlist />
      <Tracklist />
      <Track />
      <BtnSave />
    </div>
  );
}

export default App;
