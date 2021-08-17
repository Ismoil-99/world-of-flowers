import "./Podarki.css"
import Podarkicards from "./Podarkicards"


export default function Podarki(props){
    console.log(props)
    const {productsflo,onAddCards,dark} = props
    return(
        <div>
            <div className = "HeaderPopular">
                <h3>Открытки</h3>
            </div>
        <div className = "Podarki">
            {productsflo.map((productsflo) =>{
                    return <div className = "PodarkiCards"> <Podarkicards dark = {dark} key = {productsflo.id} productsflo = {productsflo} onAddCards = {onAddCards}/></div>
                })}
        </div>
        </div>
    )
}