import './ItemCount.css'
import { useState } from 'react'
const ItemCount = (prop) => {
    const [count, setCount] = useState(1)
    const stock = prop.stock;
    const addCount = () => {
        if(stock > count){
            setCount( prev => prev +1 )
        }
    }
    const removeCount = () => {
        if(count > 1){
            setCount( prev => prev -1 )
        }
    }
    
    return(
        <div className='containerCount'>
            <button className='resta' onClick={removeCount}>-</button>
            <span>{count}</span>
            <button className='suma' onClick={addCount}>+</button>
        </div>
    )
}

export default ItemCount