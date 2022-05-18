import './CardList.css';
import CardProduct from '../cards/card-product';
const CardList = (prop) => {
    return(
        <>
        <h2>{prop.title}</h2>
        <div className="products">
            <CardProduct title={"Apeach in House"} price={500} image={"trago1"}/>
            <CardProduct title={"Apeach Tropical"} price={600} image={"trago2"}/>
            <CardProduct title={"Old Terrier Pink"} price={650} image={"trago3"}/>
            <CardProduct title={"Aperon Spritz"} price={450} image={"trago4"}/>
        </div>
        </>
    )
}

export default CardList
