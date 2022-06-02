import { useState, useEffect } from 'react'
import ItemList from './ItemList.js';
import productos from '../../utils/ProductsMock.js'
import { useParams } from 'react-router-dom'
import './itemListContainer.css'


function ItemListContainer() {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect( () => {
        setProducts([])
        console.log("category: ", category)
        getProducts()
        .then( (response) => {
            // setProducts(response)
            filterByCategory(response)
        })
        .catch( (error) => {
            console.log(error)
        })
        .finally( () => {
        })
    }, [category])

    const getProducts = () => {
        return new Promise( ( resolve, reject) => {
            let assistant = true;

            setTimeout(() => {
                if(assistant){
                    resolve(productos)
                } else {
                    reject("Error Loading Products")
                }
            }, 10)
        })
    }

    const filterByCategory = (array) => {
        return array.map( (item) => {
            if(item.category == category){
                
                return setProducts(products => [...products, item])
            }
        })
    }


    return (
    <div className='itemListContainer'>
        <ItemList title={'Menu'} products={products} />
    </div>
    );
}

export default ItemListContainer