import './card-product.css';
import ItemCount from '../count/ItemCount'
import {  Card, CardContent, Button } from '@mui/material';


const CardProduct = ({ image, title, price, stock }) => {

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="cardItem">
                    <div>
                        <img className="imagen-item" src={`./${image}.jpg`} alt="producto"/>
                    </div>
                    <p>{title}</p>
                    <span className='precio'> $ {price}</span>
                    <ItemCount stock={stock} />
                    <Button style={{color: "black"}}>Agregar</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardProduct