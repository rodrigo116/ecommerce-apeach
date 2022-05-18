
import './App.css';
import NavBar from './components/Navbar/navbar.js';
import CardList from './components/CardList/CardList.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CardList title='Cocteles' />
    </div>
  );
}

export default App;
