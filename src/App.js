import { useState } from 'react';
import './App.css';
import { Route, } from 'react-router';
import Header from './component/header/Header';
import Link from './component/link/Link';
import Home from "../src/component/home/Home"
import Footer from './component/footer/Footer';
import About from './component/about/About';
import Deliever from './component/deliever/Deliever';
import Reviews from './component/reviews/Reviews';
import Work from './component/work/Work';
import Popular from './component/popular/Popular';
import Buket from "./component/buket/Buket"
import Compozition from './component/compozition/Compozition'
import Shar from './component/shar/Shar'
import Podarki from './component/podarki/Podarki'
import Basket from './component/basket/Basket';
import data from './component/productspope/Productpopu';
import nameBuket from './component/buket/BuketName';
import nameCompo1 from './component/compozition/nameCompo1';
import nameCompo2 from './component/compozition/nameCompo2';
import nameCompo3 from './component/compozition/nameCompo3';
import tools from './component/shar/tool';
import productflowers from './component/podarki/podarkiItem';
import dateFlowers from './component/search/dataFlowers';
import Search from './component/search/Seacrh';
import Switch from '@material-ui/core/Switch'






function App (){
    const {products} = data;
    const {products1} = nameBuket;
    const {products0} = nameCompo1;
    const {products2} = nameCompo2;
    const {products3} = nameCompo3;
    const {productstool} = tools;
    const {productsflo} = productflowers
    const {cardsData} = dateFlowers;
    const [carsItems1,setCartItems1] = useState([]);
    const [carsItems,setCartItems] = useState([]);

    // раздел популярные
    const onAdd = (product) =>{
      const filtr = carsItems.find(n => n.id === product.id);
      if(filtr){
        setCartItems(carsItems.map(n => n.id === product.id ? {...filtr,all:filtr.all + 1}: n))
      }else{
        setCartItems([...carsItems,{...product,all:1}])
      }
    };

    const onRemove1 = (product) =>{
      const filtr = carsItems1.find((n) => n.id === product.id);
      if(filtr.all === 1){
        setCartItems1(carsItems1.filter((n) => n.id !== product.id))
      }else{
        setCartItems1(carsItems1.map(n => n.id === product.id ? {...filtr,all:filtr.all - 1}: n))
      }
    }

  
    // раздел букеты
    const onAdd1 = (product) =>{
      const filtr = carsItems1.find(n => n.id === product.id);
      if(filtr){
        setCartItems1(carsItems1.map(n => n.id === product.id ? {...filtr,all:filtr.all + 1}: n))
      }else{
        setCartItems1([...carsItems1,{...product,all:1}])
      }
    };

    const onRemove = (product) =>{
      const filtr = carsItems.find((n) => n.id === product.id);
      if(filtr.all === 1){
        setCartItems(carsItems.filter((n) => n.id !== product.id))
      }else{
        setCartItems(carsItems.map(n => n.id === product.id ? {...filtr,all:filtr.all - 1}: n))
      }
    }
    


    //раздел экзотические цветы

    const [compoItem1,carscompoItem] = useState([])
    
    const onAdd2 = (product) =>{
      const filtr = compoItem1.find(n => n.id === product.id);
      if(filtr){
        carscompoItem(compoItem1.map(n => n.id === product.id ? {...filtr,all:filtr.all + 1}: n))
      }else{
        carscompoItem([...compoItem1,{...product,all:1}])
      }
    };

    const [compoItem2,carscompoItem1] = useState([]);
     
    const onAdd3 = (product) =>{
      const filtr = compoItem2.find(n => n.id === product.id);
      if(filtr){
        carscompoItem1(compoItem2.map(n => n.id === product.id ? {...filtr,all:filtr.all + 1}: n))
      }else{
        carscompoItem1([...compoItem2,{...product,all:1}])
      }
    };

    const [compoItem3,carscompoItem2] = useState([]);
     
    const onAdd4 = (product) =>{
      const filtr = compoItem3.find(n => n.id === product.id);
      if(filtr){
        carscompoItem2(compoItem3.map(n => n.id === product.id ? {...filtr,all:filtr.all + 1}: n))
      }else{
        carscompoItem2([...compoItem3,{...product,all:1}])
      }
    };

    const onRemove4 = (product) =>{
      const filtr = compoItem3.find((n) => n.id === product.id);
      if(filtr.all === 1){
        carscompoItem2(compoItem3.filter((n) => n.id !== product.id))
      }else{
        carscompoItem2(compoItem3.map(n => n.id === product.id ? {...filtr,all:filtr.all - 1}: n))
      }
    }


    const onRemove2 = (product) =>{
      const filtr = compoItem1.find((n) => n.id === product.id);
      if(filtr.all === 1){
        carscompoItem(compoItem1.filter((n) => n.id !== product.id))
      }else{
        carscompoItem(compoItem1.map(n => n.id === product.id ? {...filtr,all:filtr.all - 1}: n))
      }
    }

    
    const onRemove3 = (product) =>{
      const filtr = compoItem2.find((n) => n.id === product.id);
      if(filtr.all === 1){
        carscompoItem1(compoItem2.filter((n) => n.id !== product.id))
      }else{
        carscompoItem1(compoItem2.map(n => n.id === product.id ? {...filtr,all:filtr.all - 1}: n))
      }
    }



    //раздел игрушки

    const [toolItem,setTools] = useState([])


    
    const onAddShar = (product) =>{
      const filtr = toolItem.find(n => n.id === product.id);
      if(filtr){
        setTools(toolItem.map(n => n.id === product.id ? {...filtr,all:filtr.all + 1}: n))
      }else{
        setTools([...toolItem,{...product,all:1}])
      }
    };

    
    const onRemoveShar  = (product) =>{
      const filtr = toolItem.find((n) => n.id === product.id);
      if(filtr.all === 1){
        setTools(toolItem.filter((n) => n.id !== product.id))
      }else{
        setTools(toolItem.map(n => n.id === product.id ? {...filtr,all:filtr.all - 1}: n))
      }
    }

    //раздел подарки

    const [namePodarki,ItemsPodarki] = useState([]);
    const onAddCards = (product) =>{
      const filtr = namePodarki.find(n => n.id === product.id);
      if(filtr){
        ItemsPodarki(namePodarki.map(n => n.id === product.id ? {...filtr,all:filtr.all + 1}: n))
      }else{
        ItemsPodarki([...namePodarki,{...product,all:1}])
      }
    };

    
    const onRemoveСards  = (product) =>{
      const filtr = namePodarki.find((n) => n.id === product.id);
      if(filtr.all === 1){
        ItemsPodarki(namePodarki.filter((n) => n.id !== product.id))
      }else{
        ItemsPodarki(namePodarki.map(n => n.id === product.id ? {...filtr,all:filtr.all - 1}: n))
      }
    }
    
    //раздел поиска

    const [nameSearch,ItemsSearch] = useState([]);
    const onAddSearch =(product) =>{
      const filtr = nameSearch.find(n => n.id === product.id);
      if(filtr){
        ItemsSearch(nameSearch.map(n => n.id === product.id ? {...filtr,all:filtr.all + 1}: n))
      }else{
        ItemsSearch([...nameSearch,{...nameSearch,all:1}])
      }
    };


    
    const onDeleteSearch  = (product) =>{
      const filtr = nameSearch.find((n) => n.id === product.id);
      if(filtr.all === 1){
        ItemsSearch(nameSearch.filter((n) => n.id !== product.id))
      }else{
        ItemsSearch(nameSearch.map(n => n.id === product.id ? {...filtr,all:filtr.all - 1}: n))
      }
    }
    const [dark,onDark] = useState(false)

    const darking = () =>{
      onDark(!dark)
    }

    return(
      <div className = {dark ? 'Dark' : 'Light'}>
        <div className = "Switc">
          <div>
            <div>
          <Switch color = 'secondary' onChange={darking} checked={dark} />
          </div>
      </div>
      </div>
      <div className ='App' >
        <div className = "AppHeader">
        <Header dark = {dark} nameSearch = {nameSearch.length} namePodarki = {namePodarki.length} toolItem = {toolItem.length}  total = {carsItems.length} total1 = {carsItems1.length} ekzo = {compoItem2.length} ekzo1 = {compoItem1.length} ekzo2 = {compoItem3.length} />
        </div>
        <div className = "AppLink">
          <Link dark = {dark}/>
        </div>
        <div className = "AppHome">
          <Route path= "/" exact>
            <Home dark = {dark}/>
          </Route>
          <Route path= "/about">
            <About dark = {dark}/>
          </Route>
          <Route path= "/deliever">
            <Deliever dark = {dark}/>
          </Route>
          <Route path= "/work">
            <Work/>
          </Route>
          <Route path= "/reviews">
            <Reviews/>
          </Route>
          <Route path= "/popular">
            <Popular dark = {dark} onAdd = {onAdd} products = {products}/>
          </Route>
          <Route path= "/buket">
            <Buket dark = {dark} onAdd1 = {onAdd1} products1 = {products1}/>
          </Route>
          <Route path= "/basket">
            <Basket
            dark = {dark} 
            onRemove = {onRemove}
            onRemove1 = {onRemove1}
            onRemove2 = {onRemove2}
            onRemove3 = {onRemove3}
            onRemove4 = {onRemove4}
            onRemoveShar = {onRemoveShar}
            onRemoveСards = {onRemoveСards}
            onDeleteSearch = {onDeleteSearch}
            onAdd = {onAdd} 
            onAdd1 = {onAdd1}
            onAdd2 = {onAdd2}
            onAdd3 = {onAdd3}
            onAdd4 = {onAdd4}
            onAddShar = {onAddShar}
            onAddCards = {onAddCards}
            onAddSearch = {onAddSearch}
            carsItems = {carsItems} 
            carsItems1 = {carsItems1}
            compoItem1 = {compoItem1}
            compoItem2 = {compoItem2}
            compoItem3 = {compoItem3}
            toolItem = {toolItem}
            namePodarki = {namePodarki}
            nameSearch = {nameSearch}
            />
          </Route>
          <Route path= "/compozition">
            <Compozition dark = {dark} products0 = {products0} onAdd2 = {onAdd2} products2 = {products2} onAdd3 = {onAdd3} products3 = {products3} onAdd4 = {onAdd4}/>
          </Route>
          <Route path= "/tools">
            <Shar productstool = {productstool} onAddShar = {onAddShar}/>
          </Route>
          <Route path= "/otkritki">
            <Podarki dark = {dark} productsflo = {productsflo} onAddCards = {onAddCards}/>
          </Route>
          <Route path= "/search">
            <Search dark = {dark} cardsData = {cardsData} onAddSearch = {onAddSearch}/>
          </Route>
        </div>
        <div className = "AppFooter">
          <Footer/>
        </div>
      </div>
      </div>
  )
}


export default App;
