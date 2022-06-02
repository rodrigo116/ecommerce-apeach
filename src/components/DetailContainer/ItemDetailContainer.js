import './StyleDetail.css'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.js'
import productos from '../../utils/ProductsMock.js'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product , setProduct] = useState({})

    // const getItem = () => {
    //     return new Promise ( (resolve, reject) =>{
    //         setTimeout(() => {
    //             resolve(productos)
    //         }, 1000)
    //     })
    // }

    const productoFilter = productos.find( (product) => {
        return product.id === id
    })

    useEffect(() => {
        // getItem()
        // .then( (res) => {
        //     setProduct( res )
        // })
        setProduct(productoFilter)
    }, [])



    return(
        <div className='containerDetail'>
        <ItemDetail data={product} />
        </div>
    )
}

export default ItemDetailContainer