import React from 'react';
import Button from '@material-ui/core/Button'
import "./Popular.css"

function Product (props) {
    console.log(props)
    const {products,onAdd,dark} = props
    return (
        <div style = {{textAlign:"left"}}>
            <img style = {{width:"100%",height:"200px",borderRadius:"4px",border:"1px solid #F50057"}} src = {products.image} alt = {products.name}/>
            <p className = {dark ? "ProductName" : null} >{products.name}</p>
            <p className = {dark ? "ProductName" : null} style={{fontWeight:"bolder",textAlign:"left"}}>{products.price}сомони</p>
            <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onAdd(products)}>добавить в корзину</Button>
        </div>
    );
}

export default Product;
