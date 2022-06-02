import './ItemList.css';
import Item from './Item';

const ItemList = ({title, products}) => {

    return(
        <>
        <h2>{title}</h2>
        <div className="products">
            {
                products.map( ({title, price, image, description, stock, id }) => {
                    return(
                        <div key={id}>
                            <Item stock={stock} title={title} price={price} image={image} id={id}/>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default ItemList