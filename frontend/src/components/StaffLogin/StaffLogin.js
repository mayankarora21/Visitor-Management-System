import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../SubmitButton/SubmitButton';
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';


class StaffLogin extends React.Component{
    handleLogin=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        
        const staffIDBox=document.getElementById('staffID');
        const staffPasswordBox=document.getElementById('staffPassword');
        const user={
            staffID:staffIDBox.value,
            password:staffPasswordBox.value
        }
        fetch('http://localhost:3000/stafflogin',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(response=>response.json())
        .then(data=>{
            if(data==='wrong credentials'){
                window.alert('please enter right credentials');
            }
            else{
                this.props.loadStaff(true);
                this.props.loadStaffDetails(user.staffID)
                this.props.history.push('/staff');
            }
        })
        staffIDBox.value='';
        staffPasswordBox.value='';
        
    }
    render(){
        return(
            <div className="gradientBackground">
                <form onSubmit={this.handleLogin}>
                    <h3 className="mt0">Staff Login</h3>
                    Staff ID <br/><br/>
                    <TextField id="staffID" placeholder="Enter Staff ID" type="number" required/>
                    <br/><br/><br/>
                    Password <br/><br/>
                    <TextField id="staffPassword" type="password" placeholder="Enter Password" required/>
                    <br/><br/><br/>
                    <SubmitButton text="Login"/>
                </form>
            </div>    
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        loadStaff:(isStaffLoggedIn)=>{
            dispatch(actions.loadStaff(isStaffLoggedIn))
        },
        loadStaffDetails:(staffID)=>{
            dispatch(actions.loadStaffDetails(staffID))
        }
    }
}
export default connect(null,mapDispatchToProps)(StaffLogin);