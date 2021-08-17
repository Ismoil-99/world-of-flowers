import React from 'react';
import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, 
} from 'reactstrap';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import "./Deliever.css"





class Row extends Component{
    constructor(props){
      super(props);
      this.state = {
        open:false
      }
      this.setOpen = this.setOpen.bind(this)
    }
    setOpen(){
      this.setState({
        open:!this.state.open
      })
    }
  
    render(){
      const { row, dark} = this.props;
    return (
      <div className ="Table">
        <TableRow className = "Tables">
          <TableCell  align ="left" size = "medium" component="tr" scope="row">
            <p  style = {{padding:"10px",}}><b className = {dark ? "Names" : 'Name'}>{row.name}</b></p>
          </TableCell>
          <TableCell align = "right">
            <IconButton aria-label="expand row" size="medium" onClick={this.setOpen}>
              {this.state.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0,  paddingTop: 0 }} colSpan={6}>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <Box margin={3}>
                <Table size="medium" >
                  <TableHead>
                    <TableCell className = {dark ? "ProductName" : null} align="right">Место доставки</TableCell>
                    <TableCell className = {dark ? "ProductName" : null} align="right">Стоимость</TableCell>
                  </TableHead>
                  <TableBody>
                  <TableCell className = {dark ? "ProductName" : null} align="left">{row.namelocation}</TableCell>
                  <TableCell className = {dark ? "ProductName" : null} align="left">{row.id}см.</TableCell>
                  </TableBody>
                  <TableBody>
                  <TableCell className = {dark ? "ProductName" : null} align="left">{row.namelocation2}</TableCell>
                  <TableCell className = {dark ? "ProductName" : null} align="left">{row.id + Math.floor(Math.random()*3)}см.</TableCell>  
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </div>
    );
    }
}



const rows = [
    {name:"Душанбе",id:10,namelocation:"По Душанбе",namelocation2:"Около Душанбе"},
    {name:"Куляб",id:4,namelocation:"По Кулябу",namelocation2:"Около Куляба"},
    {name:"Худжанд",id:5,namelocation:"По Худжанду",namelocation2:"Около Худжанда"},
    {name:"Курган-тюбе",id:2,namelocation:"По Кургану",namelocation2:"Около Кургана"},
  ];

class  CollapsibleTable extends Component{
    render(){
    return (
      <TableContainer >
        <Table aria-label="collapsible table" size = "medium" >
          <TableBody>
            {rows.map((row) => (
              <Row  dark = {this.props} key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  }

class  Deliever extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal:true      
        }
        this.toggle = this.toggle.bind(this)
    }
  

  toggle(){
    this.setState({
        modal:false
    })
}

  render(){
    const {
        className
      } = this.props;
      const {dark} = this.props
     return (
        <div className = "Deliever">
          <div>
          <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
            toggle={this.toggle} className={className}>
            <ModalHeader className = {dark ? "ProductName" : null} >Уведомление</ModalHeader>
            <ModalBody className = {dark ? "ProductName" : null}>
              интернет магазин "Мир цветов" работает до 17:00. воскресение - ВЫХОДНОЙ!
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.toggle}>Понятно</Button>
            </ModalFooter>
          </Modal>
          </div>
          <h2 className = {dark ? "ProductName" : null}>Доставка</h2>
          <div className = "HeaderRow">
              <CollapsibleTable dark = {dark}/>
          </div>
        </div>
      );      
  }
        
  
}

export default  Deliever;