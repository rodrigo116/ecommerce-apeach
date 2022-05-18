import './card-product.css';
import {  Card, CardContent, Button } from '@mui/material';

const CardProduct = ({ image, title, price }) => {

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="cardItem">
                    <div>
                        <img className="imagen-item" src={`./${image}.jpg`} alt="producto"/>
                    </div>
                    <p>{title}</p>
                    <span className='precio'> $ {price}</span>
                    <Button style={{color: "black"}}>Agregar</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardProduct