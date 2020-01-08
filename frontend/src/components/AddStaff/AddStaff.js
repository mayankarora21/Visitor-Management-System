import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../SubmitButton/SubmitButton';
import DepartmentSelect from '../DepartmentSelect/DepartmentSelect';
import {connect} from 'react-redux';
import LoginFirst from '../LoginFirst/LoginFirst';

class AddStaff extends React.Component
{
    handleSave=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        
        const nameBox=document.getElementById('staffName');
        const contactBox=document.getElementById('staffContact');
        const emailBox=document.getElementById('staffEmail');
        const departmentBox=document.getElementById('selectDepartment');        
        
        if(departmentBox.value==='none'){
            window.alert('please select department name');
            return;
        }
        const object={
            name:nameBox.value,
            contact:contactBox.value,
            email:emailBox.value,
            department:departmentBox.value,
        }
//        console.log('object',object);
        fetch('http://localhost:3000/addstaff',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(object)
        }).then(response=>response.json())
        .then(data=>{
            if(Array.isArray(data)){
                window.alert(`staff details saved! your staff id is ${data[0]}`);
            }
            else{
                window.alert('there was some problem saving staff details')
            }
        })
        
        nameBox.value='';
        contactBox.value='';
        emailBox.value='';
        departmentBox.value='none';
    }
    render()
    {
        if(this.props.isAdminLoggedIn){
            return(
                <div className="gradientBackground2">
                    <h4 className="mt0">Add Staff</h4>
                    <form onSubmit={this.handleSave}>
                        Name <br/><br/>
                        <TextField id="staffName" placeholder="Enter name" required/>
                        <br/><br/><br/>
                        Contact Number <br/><br/>
                        <TextField id="staffContact" placeholder="Enter Contact" required/>
                        <br/><br/><br/>
                        Email ID <br/><br/>
                        <TextField id="staffEmail" placeholder="Enter email ID" type="email" required/>
                        <br/><br/><br/>
                        Department<br/><br/>
                        <DepartmentSelect></DepartmentSelect>
                        <br/><br/><br/>
                        <SubmitButton text="Save"/>
                    </form>
                </div>
            );
        }
        else{
            return <LoginFirst></LoginFirst>
        }
    }
}

const mapStateToProps=(state)=>{
    return{
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn
    }
}
export default connect(mapStateToProps,null)(AddStaff);