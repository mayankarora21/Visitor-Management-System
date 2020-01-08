import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../SubmitButton/SubmitButton';
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';


class AdminLogin extends React.Component{
    handleAdminLogin=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const usernameBox=document.getElementById('adminUsername');
        const passwordBox=document.getElementById('adminPassword');
        const admin={
            username:usernameBox.value,
            password:passwordBox.value
        }
        fetch('http://localhost:3000/adminlogin',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(admin)
        }).then(response=>response.json())
        .then(data=>{
            if(data==='wrong credentials'){
                window.alert('please enter right credentials');
            }
            else{
                this.props.history.push('/admin');
                this.props.loadAdmin(true);
            }
        })
        usernameBox.value='';
        passwordBox.value='';
    }
    render(){
        return(
            <div className="gradientBackground">
                <form onSubmit={this.handleAdminLogin}>
                    <h3 className="mt0">Admin Login</h3>
                    Username <br/><br/>
                    <TextField id="adminUsername" placeholder="Enter Username" required/>
                    <br/><br/><br/>
                    Password <br/><br/>
                    <TextField id="adminPassword" type="password" placeholder="Enter Password" required/>
                    <br/><br/><br/>
                    <SubmitButton text="Login"/>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadAdmin:(isAdminLoggedIn)=>{
            dispatch(actions.loadAdmin(isAdminLoggedIn))
        }
    }
}
export default connect(null,mapDispatchToProps)(AdminLogin);