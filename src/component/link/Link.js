import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Link.css'


class Link extends Component{
    render(){
        return(
            <div className = {this.props.dark ? 'LinkSidebars' : 'LinkSidebar'}>
                <div>
                <ul> 
                    <div>   
                        <li><NavLink className = "Links" activeClassName = "actives" to = "/popular">Популярные</NavLink></li>
                    </div>
                    <div>
                        <li><NavLink className = "Links" activeClassName = "actives" to = "/buket">Букеты</NavLink></li>
                    </div>
                    <div>
                        <li><NavLink className = "Links" activeClassName = "actives" to = "/compozition">Экзотические цветы</NavLink></li>
                    </div>
                    <div>
                        <li><NavLink className = "Links" activeClassName = "actives" to = "/tools">Мягкие игрушки</NavLink></li>
                    </div>
                    <div>
                        <li><NavLink className = "Links" activeClassName = "actives" to = "/otkritki">Открытки</NavLink></li>
                    </div>
                </ul>
                </div>
            </div>
        )
    }
}

export default Link