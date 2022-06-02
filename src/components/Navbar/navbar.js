import './navbar.css';
import CartWidget from '../CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'

function appBarLabel() {
return (
    <div className='nav'>
        <Link className='btn' to={`/`} ><img className='fotoLogo' src="/logo-apeach.jpg" alt="logo" /></Link>
        <ul> 
            <li><Link className='btn' to={`/`} >Home</Link></li>
            <li>Menu
                <ul>
                    <li><Link className='btn' to={`/menu/cocteles`} >Cocteles</Link></li>
                    <li><Link className='btn' to={`/menu/platos`} >Platos</Link></li>
                    <li><Link className='btn' to={`/menu/picadas`} >Picadas</Link></li>
                </ul>
            </li>
            <li><Link className='btn' to={`/nosotros`} >Nosotros</Link></li>
            <li><Link className='btn' to={`/contacto`} >Contacto</Link></li>
        </ul>
        <Link className='btn' to={`/`} ><h2 className='nombreBar'>Apeach Bar</h2></Link>
        <div>
            <CartWidget/> 
        </div>
    </div>
    );
}


export default appBarLabel