
import './App.css';
import CharactersList from './components/CharactersList';
import {Routes, Route} from 'react-router-dom';
import Character from './components/Character';
import Search from './components/Search';


function App() {
  return (
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/characters/:id" element={<Character />} />
      </Routes>
  );
}

export default App;
