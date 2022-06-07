import './ItemCount.css'


const ItemCount = ({ quantity, actualizarCantidad, stock, setShowButton }) => {


    const disponible = stock;
    const addCount = () => {
        if(disponible > quantity){
            actualizarCantidad( prev => prev +1 )
        }
    }
    const removeCount = () => {
        if(quantity > 1){
            actualizarCantidad( prev => prev -1 )
        }
    }
    
    return(
        <>
            <div className='containerCount'>
                <button className='resta' onClick={removeCount}>-</button>
                <span>{quantity}</span>
                <button className='suma' onClick={addCount}>+</button>
            </div>
            <p className="boton" onClick={() => setShowButton(true)}>Agregar</p>
        </>
    )
}

export default ItemCount