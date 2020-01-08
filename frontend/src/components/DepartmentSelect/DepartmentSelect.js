import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

class DepartmentSelect extends React.Component{
    componentDidMount(){
        this.props.loadDepartmentList();
    }
    render(){
//        console.log('department list in render',this.props.departmentList);
        const departmentList=this.props.departmentList;
//        console.log("list",departmentList);
        if(departmentList && departmentList.map){
            const options=departmentList.map((department,i)=>{
                return(<option value={department.name} key={i}>{department.name.toUpperCase()}</option>);
            })
//            console.log(options);
            
            return(
                <select id="selectDepartment">
                    <option value="none">Select</option>
                    {options}
                </select>
            );
        }
        else{
            return <select><option value="none" id="selectDepartment">Select</option></select>;
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        departmentList:state.loadDepartmentListReducer.departmentList
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadDepartmentList:()=>{
            dispatch(actions.loadDepartmentList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DepartmentSelect);