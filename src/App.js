
import './App.css';
import NavBar from './components/Navbar/navbar.js';
import CardList from './components/CardList/CardList.js';
import ItemListContainer from './components/ItemContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
