import { useState, useEffect } from 'react'
import ItemList from './ItemList.js';
import productos from '../../utils/ProductsMock.js'


function ItemListContainer() {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise( ( resolve, reject) => {
            let assistant = true;

            setTimeout(() => {
                if(assistant){
                    resolve(productos)
                } else {
                    reject("Error Loading Products")
                }
            }, 2000)
        })
    }
    useEffect( () => {
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
        .catch( (error) => {
        })
        .finally( () => {
        })
    }, [])


    return (
    <div >
        <ItemList title={'Cocteles'} products={productos} />
    </div>
    );
}

export default ItemListContainer;
