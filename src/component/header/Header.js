import "./Header.css"
import flowers from '../../image/flowers.png'
import SearchIcon from '@material-ui/icons/Search';
import { pink } from "@material-ui/core/colors";
import {NavLink} from "react-router-dom"


const color = pink[500];

function Header(props){
    const {total,total1,ekzo,ekzo1,ekzo2,toolItem,namePodarki,nameSearch,dark} = props
    return(
        <div className = "HeaderFixed">
        <div className = "Header">
            <div className = "Logo">
                <div>
                <img src = {flowers}/>
                </div>
            </div>
            <div className = "Input">
                <div className = "Input2">
                    <NavLink to = "/search"><SearchIcon color = "secondary"/></NavLink>
                </div>
            </div>
            <div className = "Link">
            <div className = "links">
                <ul>
                    <div>
                        <li><NavLink to = "/about" className = {dark ? 'Navlink1': 'Navlink'} >о нас</NavLink></li>
                    </div>
                    <div>
                        <li><NavLink to = "/deliever" className = {dark ? 'Navlink1': 'Navlink'}>доставка</NavLink></li>
                    </div>
                    <div>
                        <li><NavLink to = "/work" activeClassName = "active" className = {dark ? 'Navlink1': 'Navlink'}>работы</NavLink></li>
                    </div>
                    <div>
                        <li><NavLink to = "/reviews" className =  {dark ? 'Navlink1': 'Navlink'}>отзывы</NavLink></li>
                    </div>
                    <div>
                        <li><NavLink to = "/basket" className = {dark ? 'Navlink1': 'Navlink'}>Корзина</NavLink></li>
                    </div>
                    <div>
                        <div className = "CountNumber">
                            <div>{nameSearch || namePodarki || toolItem ||total || total1 || ekzo || ekzo1 || ekzo2 ? nameSearch + namePodarki + total + total1 + ekzo + ekzo1 + ekzo2 + toolItem: null}</div>
                        </div>
                    </div>
                    {nameSearch.all}
                </ul>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Header