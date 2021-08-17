import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));



function SearchItem (props) {
    const classes = useStyles()
    const {flowers,onAddSearch,dark} = props
    return (
        <div className = {dark ? "Cards" : null} style = {{textAlign:"left"}}>
            <img style = {{width:"100%",height:"200px",borderRadius:"4px",border:"1px solid #F50057"}} src = {flowers.img} alt = {flowers.name}/>
            <p className = {dark ? "ProductName" : null} style = {{textAlign:"start"}}>{flowers.name}</p>
            <Button className = {classes.root} onClick = {() => onAddSearch(flowers.name)} variant="contained" color="secondary">Купить</Button>
        </div>
    );
}

export default SearchItem;
