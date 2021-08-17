import "./Basket.css"
import Button from '@material-ui/core/Button'

export default function Basket(props){
    console.log(props)
    const {dark,carsItems,onAdd,onAdd1,onAdd2,onAdd3,onAdd4,onAddShar,onAddCards,onAddSearch,onRemove,onRemove1,onRemove2,onRemove3,onRemove4,onRemoveShar,onRemoveСards,onDeleteSearch,carsItems1,compoItem1,compoItem2,compoItem3,toolItem,namePodarki,nameSearch} = props;
    const itemsPrice = carsItems.reduce((n, n1) => n + n1.price * n1.all,0);
    const taxPrice = itemsPrice * 0.14;
    const total = itemsPrice + taxPrice;

    return(
        <div className = "Baseket">
            <div>
                { nameSearch.length || namePodarki.length || toolItem.length || carsItems.length || carsItems1.length || compoItem1.length  || compoItem2.length !== 0 ? null :
                    <div className = "Basketis">
                        <h2>Корзина пуста</h2>
                        <b>Воспользуйтесь поиском, чтобы найти всё что нужно.</b><br/>
                        <b>Или перейдите в раздел.</b>
                        </div>
                }
            </div>
            <div style = {{marginBottom:"30px"}} className = {carsItems.length !== 0 && "BasketItems"}>
                {carsItems.length ? <p className = {dark ? "ProductName" : null} style = {{textAlign:"center",color:"#F50057",fontWeight:"bolder"}}>Цветы</p>:null}
                {carsItems.map((item) =>{
                    return<div key = {item.id}>
                        <p className = {dark ? "ProductName" : null}>{item.name}<small>Количество</small><b>({item.all})</b></p>
                        <p className = {dark ? "ProductName" : null}>Сумма <b>{item.all * item.price.toFixed(2)}</b></p>
                        <Button  variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onAdd(item)}>+</Button>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}}  onClick = {() => onRemove(item)}>-</Button>
                    </div>
                })}
            </div>
            <div style = {{marginBottom:"30px"}} className = {carsItems1.length !== 0 && "BasketItems"}>
                {carsItems1.length ? <p className = {dark ? "ProductName" : null} style = {{textAlign:"center",color:"#F50057",fontWeight:"bolder"}}>Букеты</p>:null}
                {carsItems1.map((item) =>{
                    return<div key = {item.id}>
                        <p className = {dark ? "ProductName" : null}>{item.name}<small>Количество</small><b>({item.all})</b></p>
                        <p className = {dark ? "ProductName" : null}>Сумма <b>{item.all * item.price.toFixed(2)}</b></p>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onAdd1(item)}>+</Button>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onRemove1(item)}>-</Button>
                    </div>
                })}

            </div>
            <div style = {{marginBottom:"30px"}} className = {compoItem1.length !== 0 && "BasketItems"}>
            {compoItem1.length || compoItem2.length || compoItem3.length ? <p className = {dark ? "ProductName" : null} style = {{textAlign:"center",color:"#F50057",fontWeight:"bolder"}}>Экзотические Цветы</p> : null}
            {compoItem1.map((item) =>{
                    return<div key = {item.id}>
                        <p className = {dark ? "ProductName" : null}>{item.name}<small>Количество</small><b>({item.all})</b></p>
                        <p className = {dark ? "ProductName" : null}>Сумма <b>{item.all * item.price.toFixed(2)}</b></p>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onAdd2(item)}>+</Button>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onRemove2(item)}>-</Button>
                    </div>
                })}
            </div>
            <div style = {{marginBottom:"30px"}} className = {compoItem2.length !== 0 && "BasketItems"}>
            {compoItem2.map((item) =>{
                    return<div key = {item.id}>
                        <p className = {dark ? "ProductName" : null}>{item.name}<small>Количество</small><b>({item.all})</b></p>
                        <p className = {dark ? "ProductName" : null}>Сумма <b>{item.all * item.price.toFixed(2)}</b></p>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}}  onClick = {() => onAdd3(item)}>+</Button>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onRemove3(item)}>-</Button>
                    </div>
                })}
            </div>
            <div style = {{marginBottom:"30px"}} className = {compoItem3.length !== 0 && "BasketItems"}>
            {compoItem3.map((item) =>{
                    return<div key = {item.id}>
                        <p className = {dark ? "ProductName" : null}>{item.name}<small>Количество</small><b>({item.all})</b></p>
                        <p className = {dark ? "ProductName" : null}>Сумма <b>{item.all * item.price.toFixed(2)}</b></p>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onAdd4(item)}>+</Button>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onRemove4(item)}>-</Button>
                    </div>
                })}
            </div>
            <div style = {{marginBottom:"30px"}} className = {toolItem.length !== 0 && "BasketItems"}>
            {toolItem.length ? <p className = {dark ? "ProductName" : null} style = {{textAlign:"center",color:"#F50057",fontWeight:"bolder"}}>Игрушки</p>:null}
            {toolItem.map((item) =>{
                    return<div key = {item.id}>
                        <p className = {dark ? "ProductName" : null}>{item.name}<small>Количество</small><b>({item.all})</b></p>
                        <p className = {dark ? "ProductName" : null}>Сумма <b>{item.all * item.price.toFixed(2)}</b></p>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onAddShar(item)}>+</Button>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}} onClick = {() => onRemoveShar(item)}>-</Button>
                    </div>
                })}
            </div>
            <div style = {{marginBottom:"30px"}} className = {namePodarki.length !== 0 && "BasketItems"}>
            {namePodarki.length ? <p className = {dark ? "ProductName" : null} style = {{textAlign:"center",color:"#F50057",fontWeight:"bolder"}}>Открытки</p>:null}
            {namePodarki.map((item) =>{
                    return<div key = {item.id}>
                        <p className = {dark ? "ProductName" : null} >{item.name}</p>
                        <p style = {{textAlign:'end'}}>{item.all}</p>
                        <p className = {dark ? "ProductName" : null}>Сумма <b>{item.all * item.price.toFixed(2)}</b></p>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}}  onClick = {() => onAddCards(item)}>+</Button>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}}  onClick = {() => onRemoveСards(item)}>-</Button>
                    </div>
                })}
            </div>
            <div style = {{marginBottom:"30px"}} className = {nameSearch.length !== 0 && "BasketItems"}>
            {nameSearch.length ? <p className = {dark ? "ProductName" : null} style = {{textAlign:"center",color:"#F50057",fontWeight:"bolder"}}>раздел поиска</p>:null}
            {nameSearch.map((item) =>{
                    return<div key = {item.id}>
                        <p className = {dark ? "ProductName" : null} style = {{textAlign:"end"}}>{item.name}<small>Количество</small><b>({item.all})</b></p>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}}  onClick = {() => onAddSearch(item)}>+</Button>
                        <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}}  onClick = {() => onDeleteSearch(item)}>-</Button>
                    </div>
                })}
            </div>
        </div>
    )
}
