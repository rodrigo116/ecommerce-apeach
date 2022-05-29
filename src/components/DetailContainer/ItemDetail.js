import './StyleDetail.css'
import ItemCount from '../count/ItemCount.js'



const ItemDetail = ({data}) => {

    return(
        <div className="item">
            <img className="item-imagen" src={`./${data.image}.jpg`} alt="producto"/>
            <div className="item-detail">
                <h2>{data.title}</h2>
                <h3>{data.description}</h3>
                <h3 className='precio'> $ {data.price}</h3>
                <ItemCount stock={data.stock} />
                <a className="boton" href='#'>Agregar</a>
            </div>
    </div>
    )
}

export default ItemDetail