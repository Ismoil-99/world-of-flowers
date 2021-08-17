import Button from '@material-ui/core/Button'



function Podarkicards (props) {
    console.log(props)
    const {productsflo,onAddCards,dark} = props
    return (
        <div style = {{textAlign:"left"}}>
            <img style = {{width:"100%",height:"200px",borderRadius:"4px",border:"1px solid #F50057"}} src = {productsflo.image} alt = {productsflo.name}/>
            <p className = {dark ? "ProductName" : null}  >{productsflo.name}</p>
            <p className = {dark ? "ProductName" : null}  style = {{fontWeight:"bolder",textAlign:"left"}}>{productsflo.price}сомони</p>
            <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onAddCards(productsflo)}>добавить в корзину</Button>
        </div>
    );
}

export default Podarkicards;