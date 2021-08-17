import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./Work.css"
import flowers1 from "../../image/flowers1.jpg"
import flowers2 from "../../image/flowers2.jpg"
import flowers3 from "../../image/flowers3.jpg"
import flowers4 from "../../image/flowers4.jpg"
import flowersjpg from "../../image/flowersjpg.jpg"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    boxShadow:theme.shadows[5],
    width:"70%",
    height:"500px"
  },

}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className = "Work">
        <div className = "HeaderName">
            <p>Авторские работы флористов интернет магазина "МИР-ЦВЕТОВ"</p>     
        </div>
        <div className = "FotoGalery">
            
            <div className = "Galery1">
            <div onClick={handleOpen} className = "Foto">
                <img src = {flowers1}/>
                <p>Микс из роз</p>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open}>
            <div className={classes.paper}>
                
            </div>
            </Fade>
            </Modal>
            </div>
            <div className = "Galery2">
            <div onClick={handleOpen} className = "Foto">
                <img src = {flowers2}/>
                <p>Шляпная коробка </p>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open}>
            <div className={classes.paper1}>
                <img src = {flowersjpg} style = {{width:"100%",height:"500px"}}/>
            </div>
            </Fade>
            </Modal>
            </div>
            <div className = "Galery3">
            <div onClick={handleOpen} className = "Foto">
                <img src = {flowers3}/>
                <p>51 бордовая роза</p>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open}>
            <div className={classes.paper}>
                <img src = {flowers3} style = {{width:"100%",height:"500px"}}/>
            </div>
            </Fade>
            </Modal>
            </div>
            <div className = "Galery4">
            <div onClick={handleOpen} className = "Foto">
                <img src = {flowers4}/>
                <p>45 тюльпанов</p>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open}>
            <div className={classes.paper}>
                
            </div>
            </Fade>
            </Modal>
            </div>
        </div>
      <div/>
    </div>
  );
}