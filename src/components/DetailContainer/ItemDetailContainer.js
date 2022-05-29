import './StyleDetail.css'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.js'
import { producto } from '../../utils/ProductsMock.js'


const ItemDetailContainer = () => {
    const [product , setProduct] = useState({})

    const getItem = () => {
        return new Promise ( (resolve, reject) =>{
            setTimeout(() => {
                resolve(producto)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
        .then( (res) => {
            setProduct( res )
        })
    }, [])

    return(
        <div className='containerDetail'>
        <ItemDetail data={product} />
        </div>
    )
}

export default ItemDetailContainer