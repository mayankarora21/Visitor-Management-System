import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../SubmitButton/SubmitButton';
import {connect} from 'react-redux';
import LoginFirst from '../LoginFirst/LoginFirst';

class AddDepartment extends React.Component
{
    handleSave=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        
        const nameBox=document.getElementById('departmentName');
        const managerIDBox=document.getElementById('managerID');
        
        
        const object={
            name:nameBox.value,
            managerID:managerIDBox.value
        }
//        console.log('object',object);
        fetch('http://localhost:3000/adddepartment',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(object)
        }).then(response=>response.json())
        .then(data=>{
            if(Array.isArray(data)){
                window.alert(`department details saved! department id for ${object.name} department is ${data[0]}`);
            }
            else{
                window.alert('there was some problem saving department details')
            }
        })
        
        nameBox.value='';
        managerIDBox.value='';
    }
    render()
    {
        if(this.props.isAdminLoggedIn){
            return(
                <div className="gradientBackground2">
                    <h4 className="mt0">Add Department</h4>
                    <form onSubmit={this.handleSave}>
                        Name <br/><br/>
                        <TextField id="departmentName" placeholder="Enter name" required/>
                        <br/><br/><br/>
                        ManagerID <br/><br/>
                        <TextField id="managerID" placeholder="Enter manager ID" type="number" required/>
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
export default connect(mapStateToProps,null)(AddDepartment);