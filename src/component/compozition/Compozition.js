import { useState } from "react";
import "./Compozition"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase'
import CompoItem from "./CompoItem";
import CompoItem2 from "./CompoItem2";
import CompoItem3 from "./CompoItem3";


const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));





export default function Compozition(props){
    const {products0,products2,products3,onAdd2,onAdd3,onAdd4,dark} = props
    const classes = useStyles();
    const [age, setAge] = useState('Голандия');    
    const handleChange = (event) => {
      setAge(event.target.value);
    };




    console.log(products0,products2,products3)
    return(
        <div>
            <div>
              <div style = {{background:"#F50057",width:"30%",borderRadius:"4px",boxShadow:"0px 5px 10px 2px rgba(34, 60, 80, 0.2)",color:"white"}}>
                <h4>Экзотические цветы</h4>
              </div>
                <p className = {dark ? "ProductName" : null}  >Если вы хотите удивить вашу милую даму необычным букетом, 
                    то вы обратились по адресу. Нам интернет магазин «Мир цветов» 
                    поможет вам с выбором букета, ведь только у нас в магазине вы 
                    найдёте огромный выбор экзотических цветов на любой вкус. 
                    Экзотические цветы - это всегда необычно и очень красиво, они 
                    напоминают нам о далёких странах и их удивительной природе, в 
                    их лепестках и бутонах словно заблудились 
                    тропические ароматы, морские ветра и солнечные брызги.</p>
            </div>
            <div style = {{background:"white"}}>
                  <b style = {{color:"#F50057"}}>выберите страну:</b>  <FormControl className={classes.margin}>
                <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
                >
                <MenuItem value={0}>Голандия</MenuItem>
                <MenuItem value={1}>Россия</MenuItem>
                <MenuItem value={2}>Турция</MenuItem>
                </Select>
            </FormControl>           
            </div>
            <div className = "HeaderPopular" style = {{margin:"0 auto"}}>
              {age === 0 ? <p>Голандия</p>:
                age === 1 ? <p>Россия</p>:
                age === 2 ? <p>Турция</p>:
                null
              }
            </div>
            <div className = "Compozition">
            {age === 0 ? products0.map((products0)  =>  <div className = "Compo"> <CompoItem dark = {dark} key = {products0.id} products0 = {products0} onAdd2 = {onAdd2}/></div>) :
             age === 1 ? products2.map((products2)  => <div className = "Compo"> <CompoItem2 dark = {dark} key = {products2.id} products2 = {products2} onAdd3 = {onAdd3} /></div>) :
             age === 2 ? products3.map((products3)  =>  <div className = "Compo"><CompoItem3 dark = {dark} key = {products3.id} products3 = {products3}  onAdd4 = {onAdd4} /></div>) :
             products0.map((products0)  => <div className = "Compo"> <CompoItem dark = {dark} key = {products0.id} products0 = {products0} onAdd2 = {onAdd2}/></div>)}
        </div>
        </div>
    )
}