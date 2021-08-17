import SharItem from "./SharItem.js"
import "./Shar.js"


export default function Popular(props){
    console.log(props)
    const {productstool,onAddShar} = props
    return(
        <div>
        <div className = "HeaderPopular">
        <h3 >Игрушки</h3>
        </div>
        <div className = "SharItems">
                {productstool.map((productstool) =>{
                    return <div className = "Bas"> <SharItem key = {productstool.id} productstool = {productstool} onAddShar = {onAddShar}/></div>
                })}
        </div>
        </div>
    )
}