import './StyleDetail.css'
import ItemCount from '../count/ItemCount.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {

    const [quantity, setQuantity] = useState(1)
    const [showButton, setShowButton] = useState(false)

    const addProductToCart = () => {
        console.log("producto a agregar", data)
        console.log("cantidad agragada: ", quantity)
        console.log(showButton)
    }


    return(
        <div className="item">
            <img className="item-imagen" src={`/${data.image}.jpg`} alt="producto"/>
            <div className="item-detail">
                <h2>{data.title}</h2>
                <h3>{data.description}</h3>
                <h3 className='precio'> $ {data.price}</h3>
                {!showButton ?
                <ItemCount 
                stock={data.stock} 
                setShowButton={setShowButton}
                quantity={quantity} 
                actualizarCantidad={setQuantity} 
                />
                :
                <Link className='btn' to={`/cart`} >
                    <p className="boton" onClick={addProductToCart}>Comprar</p>
                </Link>
                }
            </div>
    </div>
    )
}

export default ItemDetail