import "./Buket.css"
import BuketItem from './BuketItem';



export default function Buket(props){
    console.log(props);
    const {products1,onAdd1,dark} = props;
    return(
        <div>
            <div className = "HeaderPopular">
                <p>Букеты</p>
            </div>
        <div className = "Buket">
            <div className = "BuketNumbers" >
             {products1.map((products1) =>{
                    return <div className = "Bukets" ><BuketItem dark = {dark} key = {products1.id} products1 = {products1} onAdd1 = {onAdd1}/></div>
                })}
            </div>
        </div>
        </div>
    )
}