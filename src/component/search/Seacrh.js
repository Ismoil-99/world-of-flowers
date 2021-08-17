import { useState } from "react"
import SearchItem from "./SearchItem"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Search.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
        background:'#fff',
      },
    },
  }));



function Search(props){
    const {cardsData,onAddSearch,dark} = props
    const [flowers,setItem] = useState([])

    const classes = useStyles()

    const handleFilter = (event) =>{
        const searchWord = event.target.value;
        const newFliter = cardsData.filter((cardsData) =>{
            return cardsData.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord ===""){
            setItem([])    
        }else{
            setItem(newFliter)    
        }
    };
    return(
        <div className = "Search">
            <div className = "SearchItems">
            <div>
            <p>Поиск</p>
            </div>
            <div>
            <TextField
            className = {classes.root}
            id="outlined-secondary"
            label="поиск цвета"
            variant="outlined"
            color="secondary"
            onChange = {handleFilter}
            />
            </div>
            </div>
            <div className = "SearchItem">
                {flowers.length !== 0 && (
                flowers.map((flowers) => <div className = "Bas"> <SearchItem dark = {dark} onAddSearch = {onAddSearch} key = {flowers.id} flowers= {flowers} cardsData = {cardsData} /></div>)
                )}
            </div>
        </div>
    )
}


export default Search