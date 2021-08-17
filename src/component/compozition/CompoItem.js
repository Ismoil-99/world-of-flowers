import React from 'react';
import Button from '@material-ui/core/Button';
import "./Compozition.css"


const CompoItem = (props) => {
    const {products0,onAdd2,dark} = props
    console.log(props)
    return (
        <div className = "CompoItems" style = {{border:"1px solid #F50057",borderRadius:"5px",boxShadow:"0px 5px 10px 2px rgba(34, 60, 80, 0.2)"}}>
            <div>
            <img src = {products0.img} style = {{border:"1px solid #F50057",borderRadius:"5px",boxShadow:"0px 5px 10px 2px rgba(34, 60, 80, 0.2)"}} alt = {products0.name}/>
            <p style = {{fontWeight:"bolder",color:"#F50057"}}>{products0.name}</p>
            </div>
            <div>
            <b  style = {{color:"#F50057",width:"30px"}}>{products0.content}</b>
            <p className = {dark ? 'HeaderNames' : 'HeaderName' }>{products0.price}<b>сомони</b></p>
            <Button onClick = {() => onAdd2(products0)} variant="contained" color="secondary" style = {{marginLeft:"400px"}}>Купить сейчас</Button> 
            </div>
        </div>
    );
}

export default CompoItem;
