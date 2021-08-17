import "./Popular.css"
import Product from "./Product"

export default function Popular(props){
    console.log(props)
    const {products,onAdd,dark} = props
    return(
        <div>
            <div className = "HeaderPopular">
            <p>Популярное</p>
            </div>
        <div className = "Popular">
                {products.map((products) =>{
                    return <div className = "Bas"> <Product key = {products.id} dark = {dark} products = {products} onAdd = {onAdd}/></div>
                })}
        </div>
        </div>
    )
}