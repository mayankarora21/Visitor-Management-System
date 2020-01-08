import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import LoginFirst from '../LoginFirst/LoginFirst';
import SearchBox from '../SearchBox/SearchBox';
import Row from '../Row/Row';
import Loading from '../Loading/Loading';
//import Grid from '@material-ui/core/Grid';

class ViewDepartmentList extends React.Component
{
    componentDidMount(){
        if(this.props.isAdminLoggedIn){
            this.props.loadDepartmentList();
        }
    }
    render()
    {
//         console.log('department list',this.props.departmentList);
        
         if(this.props.isAdminLoggedIn){
             if(this.props.departmentList && this.props.departmentList.map){
                
//                 console.log(this.props.searchFieldValue);
                 if(this.props.searchFieldValue){
                     
//                     add filtered list
                     const searchFieldValue=this.props.searchFieldValue;
                     const filteredList=this.props.departmentList.filter((department,i)=>{
                         if(department.name.toLowerCase().includes(searchFieldValue.toLowerCase())){
                             return true;
                         }
                         else{
                             return false;
                         }
                     });
                     
                     const rows=filteredList.map((department,i)=>{
                        return <Row key={i} text1={department.id} text2={department.name.toUpperCase()} text3={department.managerid} size1={4} size2={4} size3={4} size4={0} size5={0}></Row>
                     })
                     return(
                        <div className="gradientBackground2">
                            <h4 className="mt0">Department Details</h4>
                             <SearchBox></SearchBox><br/><br/>
                             <Row text1="ID" text2="Name" text3="ManagerID" size1={4} size2={4} size3={4} size4={0} size5={0}></Row>
                             {rows}
                        </div>
                    );
                 }
                 else{
                     const rows=this.props.departmentList.map((department,i)=>{
                        return <Row key={i} text1={department.id} text2={department.name.toUpperCase()} text3={department.managerid} size1={4} size2={4} size3={4} size4={0} size5={0}></Row>
                     })
                     return(
                        <div className="gradientBackground2">
                            <h4 className="mt0">Department Details</h4>
                             <SearchBox></SearchBox><br/><br/>
                             <Row text1="ID" text2="Name" text3="ManagerID" size1={4} size2={4} size3={4} size4={0} size5={0}></Row>
                             {rows}
                        </div>
                    );
                 }
             }
             else{
    //            loading
                return <Loading></Loading>
            }
        }
        else{
            return(
                <LoginFirst></LoginFirst>
            );
        }
    }
}

const mapStateToProps=(state)=>{
    return{
        departmentList:state.loadDepartmentListReducer.departmentList,
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn,
        searchFieldValue:state.changeSearchFieldReducer.searchFieldValue
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadDepartmentList:()=>{
            dispatch(actions.loadDepartmentList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewDepartmentList);