import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../SubmitButton/SubmitButton';

const StaffRegister=(props)=>{
    const handleRegister=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        const idBox=document.getElementById('staffIDRegister');
//        const nameBox=document.getElementById('name');
//        const contactBox=document.getElementById('contact');
//        const emailBox=document.getElementById('email');
        const passwordBox=document.getElementById('password');
        const confirmPasswordBox=document.getElementById('confirmPassword');
        if(passwordBox.value!==confirmPasswordBox.value){
            window.alert('password and confirm password do not match!');
            return;
        }
        const user={
            staffID:idBox.value,
//            name:nameBox.value,
//            contact:contactBox.value,
//            email:emailBox.value,
            password:passwordBox.value
        }
        
        fetch('http://localhost:3000/staffregister',{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(response=>response.json())
        .then(data=>{
            if(data==='wrong id'){
                window.alert('please enter right staff id');
            }
            else if(data==='already registered'){
                window.alert('you have already registered!')
            }
            else{
                window.alert("You have successfully registered! Go to staff login page to login");
            }
        })
        idBox.value='';
//        nameBox.value='';
//        contactBox.value='';
//        emailBox.value='';
        passwordBox.value='';
        confirmPasswordBox.value='';
    }
    return(
        <div className="gradientBackground">
            <form onSubmit={handleRegister}>
                <h3 className="mt0">Staff Register</h3>
                Staff ID <br/><br/>
                <TextField id="staffIDRegister" placeholder="Enter Staff ID" required/>
                <br/><br/><br/>
{/*
                Staff Name <br/><br/>
                <TextField id="name" placeholder="Enter Name" required/>
                <br/><br/><br/>
                Contact Number <br/><br/>
                <TextField id="contact" placeholder="Enter Contact Number" required/>
                <br/><br/><br/>
                Email ID <br/><br/>
                <TextField id="email" placeholder="Enter Email ID" type="email" required/>
                <br/><br/><br/>
*/}
                Password <br/><br/>
                <TextField id="password" type="password" placeholder="Enter Password" required/>
                <br/><br/><br/>
                Confirm password <br/><br/>
                <TextField id="confirmPassword" type="password" placeholder="Enter Password" required/>
                <br/><br/><br/>
                <SubmitButton text="Register"/>
            </form>
        </div>
    );
}
export default StaffRegister;