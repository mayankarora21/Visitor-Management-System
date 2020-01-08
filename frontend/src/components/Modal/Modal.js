import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const WhiteModal=(props)=>{
    
    const handleSave=()=>{
        const remarksBox=document.getElementById('remarks');

        const object={
            id:props.id,
            remarks:remarksBox.value
        }
    //    console.log(object);

        fetch('http://localhost:3000/updateremarks',{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(object)
        }).then(response=>response.json())
        .then(data=>{
            if(data==='success'){
                window.alert('Remarks updated');
                props.loadVisitorList();
            }
            else{
                window.alert('there was some error updating remarks')
            }
        })
//        remarksBox.value='';
    }
    const classes = makeStyles(theme => ({
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: '#FFFFFF',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }))();
    
    return(
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.modalOpen}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.modalOpen}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Visitor Details</h2>
            <p>ID: {props.id}</p>
            <p>Name: {props.name.toUpperCase()}</p>
            <p>Contact: {props.contact}</p>
            <p>Email: {props.email}</p>
            <p>Person To Meet: {props.person.toUpperCase()}</p>
            <p>Department: {props.department.toUpperCase()}</p>
            <p>Date: {props.date.substring(0,10)}</p>
            <p>Time: {props.time}</p>
            <p>Remarks:</p>
            <textarea id="remarks">{props.remarks}</textarea><br/><br/>
            <Button variant="contained" color="secondary" onClick={handleSave}>Save Remarks</Button>
          </div>
        </Fade>
      </Modal>
    );
}

export default WhiteModal;