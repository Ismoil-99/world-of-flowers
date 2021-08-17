import React from "react"
import "./Home.css"
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation,Pagination} from 'swiper'
import 'swiper/swiper-bundle.css'
import { NavLink } from "react-router-dom"
import buketroza from './SlideFoto/buketroza.jpg'
import podarki from './SlideFoto/podarki.jpg'
import tulpan from './SlideFoto/tulpan.jpg'
import Button from '@material-ui/core/Button'
import Datas from "./Datas"
import Ekzotika from "./Ekzotika"



const flowersItem = [
  buketroza,
  podarki,
  tulpan
]


SwiperCore.use([Navigation,Pagination])


export default function Home ({dark}){
  const slides = []; 

  for(let i = 0; i < 3; i++){
    slides.push(
      <SwiperSlide style = {{listStyle:"none"}}  tag = "li">
        <img style = {{width:"100%",height:"400px",borderRadius:"5px",boxShadow:"0px 5px 10px 2px rgba(34, 60, 80, 0.2)"}} src = {flowersItem[i]}/>
        <div className = "ButtonAdd">
          <div>
          <Button variant = "contained" style = {{background:"#F50057",color:"#fff"}}>
            <NavLink activeStyle = {{listStyle:"none"}} style = {{color:"#fff",listStyle:"none"}} to = {i===1 ? "/otkritki":
              i===2 ? "/compozition":
              '/buket'
          }>
              {i===1 ? 'Открытки':
              i===2 ? 'Экзотика':
              'Букеты'
              }
            </NavLink>
          </Button>
          </div>
        </div>
      </SwiperSlide>
    )
  }

  const {productes} = Datas

  const {productsekozos} = Ekzotika
  
  return(
    <div className = "Slider">
    <Swiper id = 'main' tag = 'section' wrapperTag = "ul" navigation pagination = {true} spaceBetween = {0} slidesPerView = {1} >
      {slides}
    </Swiper>
    <div>
        <div className = "HeaderPopular">
          <p>Популярное</p>
        </div>
    </div>
    <div>
      <div>
        <div className = "CardPopular">
        {productes.map((name) => {
          return <div className = "CardsItem">
            <div >
                <img src = {name.image} style = {{border: "1px solid #F50057",borderRadius: "5px",width:"50%",height:"200px"}} />
            </div>
            <div>
                <h4 style = {{paddingBottom:"20px",color:"#F50057"}}>{name.name}</h4>
                <p className = {dark ? "ProductName" : null} >{name.nametitle}</p>
            </div>
          </div>
        })}
        </div>
      </div>
    </div>
    <div>
    <div className = "HeaderPopular">
          <p>Экзотика</p>
    </div>
    {productsekozos.map((name) => {
      return <div key = {name.id} className = "CompoItems" style = {{border:"1px solid #F50057",borderRadius:"5px",boxShadow:"0px 5px 10px 2px rgba(34, 60, 80, 0.2)"}}>
      <div>
      <img src = {name.img} style = {{border:"1px solid #F50057",borderRadius:"5px",boxShadow:"0px 5px 10px 2px rgba(34, 60, 80, 0.2)"}} alt = {name.name} />
      <p style = {{fontWeight:"bolder",color:"#F50057"}}>{name.name}</p>
      </div>
      <div>
      <b style = {{color:"#F50057",width:"30px"}}>{name.content}</b> 
      </div>
  </div>
    })}
    </div>
    </div>
  )
}