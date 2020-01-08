import React from 'react';
import TextField from '@material-ui/core/TextField';
import SubmitButton from '../SubmitButton/SubmitButton';
import DepartmentSelect from '../DepartmentSelect/DepartmentSelect';

class AddVisitor extends React.Component
{
    handleSave=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        
        const nameBox=document.getElementById('visitorName');
        const contactBox=document.getElementById('visitorContact');
        const emailBox=document.getElementById('visitorEmail');
        const personBox=document.getElementById('person');
        const departmentBox=document.getElementById('selectDepartment');
//        const photoBox=document.getElementById('photo');
        
        if(departmentBox.value==='none'){
            window.alert('please select department name');
            return;
        }
        const object={
            name:nameBox.value,
            contact:contactBox.value,
            email:emailBox.value,
            personToMeet:personBox.value,
            department:departmentBox.value,
        }
//        console.log('object',object);
        fetch('http://localhost:3000/addvisitor',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(object)
        }).then(response=>response.json())
        .then(data=>{
            if(Array.isArray(data)){
                window.alert(`visitor details saved! your visitor id is ${data[0]}`);
            }
            else{
                window.alert('there was some problem saving visitor details')
            }
        })
        
        nameBox.value='';
        contactBox.value='';
        emailBox.value='';
        personBox.value='';
        departmentBox.value='none';
    }
    render()
    {
        return(
            <div>
                <h4>Add Visitor</h4>
                <form onSubmit={this.handleSave}>
                    Name <br/><br/>
                    <TextField id="visitorName" placeholder="Enter name" required/>
                    <br/><br/><br/>
                    Contact Number <br/><br/>
                    <TextField id="visitorContact" placeholder="Enter Contact" required/>
                    <br/><br/><br/>
                    Email ID <br/><br/>
                    <TextField id="visitorEmail" placeholder="Enter email ID" required/>
                    <br/><br/><br/>
                    Person to meet <br/><br/>
                    <TextField id="person" placeholder="Enter person to meet" required/>
                    <br/><br/><br/>
                    Department <br/><br/>
                    <DepartmentSelect></DepartmentSelect>
                    <br/><br/><br/>
                    <SubmitButton text="Save"/>
                </form>
            </div>
        );
    }
}

export default AddVisitor;