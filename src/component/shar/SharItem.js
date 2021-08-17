import React from 'react';
import Button from '@material-ui/core/Button'
import "./Shar.css"


function SharItem (props) {
    console.log(props)
    const {productstool,onAddShar} = props
    return (
        <div className = "SharItem">
            <div>
                <img style = {{width:"100%",height:"200px",borderRadius:"4px",border:"1px solid #F50057"}} src = {productstool.image} alt = {productstool.name}/>
            </div>
            <div className = "HeaderShar">
                <p>{productstool.name}</p>
            </div>
            <div className = "ButtonShar">
                <h5 style = {{fontWeight:"bolder",color:"#F50057",marginTop:"50px"}}>{productstool.price}сомони</h5>
                <Button className = "ButtonShar" variant = "contained" style = {{background:"#F50057",color:"#fff",marginTop:"10px",}} onClick = {() => onAddShar(productstool)}>добавить в корзину</Button>
            </div>
        </div>
    );
}

export default SharItem;