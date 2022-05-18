import './ItemCount.css'
import { useState } from 'react'
const ItemCount = (prop) => {
    const [count, setCount] = useState(1)
    const stock = prop.stock;
    const addCount = () => {
        if(stock > count){
            setCount(count + 1 )
        }
    }
    const removeCount = () => {
        if(count > 1){
            setCount(count - 1 )
        }
    }
    
    return(
        <div className='containerCount'>
            <button onClick={removeCount}>-</button>
            <span>{count}</span>
            <button onClick={addCount}>+</button>
        </div>
    )
}

export default ItemCount