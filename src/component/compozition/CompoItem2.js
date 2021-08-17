import React from 'react';
import Button from '@material-ui/core/Button';

const CompoItem2 = (props) => {
    const {products2,onAdd3,dark} = props
    console.log(props)
    return (
        <div className = "CompoItems" style = {{border:"1px solid #F50057",borderRadius:"5px",boxShadow:"0px 5px 10px 2px rgba(34, 60, 80, 0.2)"}}>
            <div>
            <img src = {products2.img} style = {{border:"1px solid #F50057",borderRadius:"5px",boxShadow:"0px 5px 10px 2px rgba(34, 60, 80, 0.2)"}} alt = {products2.name}/>
            <p style = {{fontWeight:"bolder",color:"#F50057"}}>{products2.name}</p>
            </div>
            <div>
            <b   style = {{color:"#F50057",width:"30px"}}>{products2.content}</b>
            <p   className = {dark ? 'HeaderNames' : 'HeaderName' } style = {{marginTop:"100px"}}>{products2.price}<b>сомони</b></p>
            <Button onClick = {() => onAdd3(products2)} variant="contained" color="secondary" style = {{marginLeft:"400px"}}>Купить сейчас</Button>             
            </div>
        </div>
    );
}

export default CompoItem2;