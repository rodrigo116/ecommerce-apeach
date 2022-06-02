
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar/navbar.js';
import Home from './pages/Home.js'
import Menu from './pages/Menu.js'
import Detail from './pages/Detail.js'
import NotFound from './pages/NotFound.js'
import Nosotros from './pages/Nosotros.js'
import Contacto from './pages/Contacto.js'


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/menu/:category' element={<Menu />} />
          <Route path='/product/:id' element={<Detail />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
