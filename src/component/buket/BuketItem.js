import React from 'react';
import Button from '@material-ui/core/Button';

const BuketItem = (props) => {
    const {products1,onAdd1,dark} = props
    return (
            <>
            <div>
                <img src = {products1.image} style = {{border: "1px solid #F50057",borderRadius: "5px"}} />
            </div>
            <div>
                <h4 style = {{paddingBottom:"20px",color:"#F50057"}}>{products1.name}</h4>
                <p className = {dark ? "ProductName" : null} >{products1.nametitle}</p><br/><br/><br/>
                <hr/>
                <b className = {dark ? "ProductName" : null} >{products1.price} сомони</b>
                <Button onClick = {() => onAdd1(products1)} variant="contained" color="secondary" style = {{marginLeft:"400px"}}>Купить сейчас</Button>
            </div>
            </>
    );
}

export default BuketItem;
