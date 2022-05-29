
import './App.css';
import NavBar from './components/Navbar/navbar.js';
import ItemListContainer from './components/ItemContainer/ItemListContainer.js';
import ItemDetailContainer from './components/DetailContainer/ItemDetailContainer.js'

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      {/* <ItemListContainer /> */}
    </div>
    <ItemDetailContainer />
    </>
  );
}

export default App;
