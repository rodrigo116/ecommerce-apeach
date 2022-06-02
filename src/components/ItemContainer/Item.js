import './Item.css';
import ItemCount from '../count/ItemCount.js'
import {  Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom'


const Item = ({ image, title, price, stock, id }) => {

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="cardItem">
                    <div>
                        <img className="imagen-item" src={`/${image}.jpg`} alt="producto"/>
                    </div>
                    <p>{title}</p>
                    <span className='precio'> $ {price}</span>
                    <ItemCount stock={stock} />
                    <Button style={{color: "black"}}>
                        <Link to={`/product/${id}`} >Ver Detalle</Link>
                    </Button>
                    <Button style={{color: "black"}}>Agregar</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Item