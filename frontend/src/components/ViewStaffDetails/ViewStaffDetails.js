import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import LoginFirst from '../LoginFirst/LoginFirst';
import SearchBox from '../SearchBox/SearchBox';
import Row from '../Row/Row';
import Loading from '../Loading/Loading';
//import Grid from '@material-ui/core/Grid';

class ViewStaffDetails extends React.Component
{
    componentDidMount(){
        if(this.props.isAdminLoggedIn){
            this.props.loadStaffList();
        }
    }
    render()
    {
//         console.log('staff list',this.props.staffList);
        
         if(this.props.isAdminLoggedIn){
             if(this.props.staffList && this.props.staffList.map){
                
//                 console.log(this.props.searchFieldValue);
                 if(this.props.searchFieldValue){
                     
//                     add filtered list
                     const searchFieldValue=this.props.searchFieldValue;
                     const filteredList=this.props.staffList.filter((staff,i)=>{
                         if(staff.name.toLowerCase().includes(searchFieldValue.toLowerCase()) || staff.department.toLowerCase().includes(searchFieldValue.toLowerCase()) || staff.email.toLowerCase().includes(searchFieldValue.toLowerCase()) ){
                             return true;
                         }
                         else{
                             return false;
                         }
                     });
                     
                     const rows=filteredList.map((staff,i)=>{
                        return <Row key={i} text1={staff.id} text2={staff.name.toUpperCase()} text3={staff.email} text4={staff.contact} text5={staff.department.toUpperCase()} size1={1} size2={3} size3={3} size4={3} size5={2}></Row>
                     })
                     return(
                        <div className="gradientBackground2">
                            <h4 className="mt0">Staff Details</h4>
                             <SearchBox></SearchBox><br/><br/>
                             <Row text1="ID" text2="Name" text3="Email" text4="Contact" text5="Departement" size1={1} size2={3} size3={3} size4={3} size5={2}></Row>
                             {rows}
                        </div>
                    );
                 }
                 else{
                     const rows=this.props.staffList.map((staff,i)=>{
                        return <Row key={i} text1={staff.id} text2={staff.name.toUpperCase()} text3={staff.email} text4={staff.contact} text5={staff.department.toUpperCase()} size1={1} size2={3} size3={3} size4={3} size5={2}></Row>
                     })
                     return(
                        <div className="gradientBackground2">
                            <h4 className="mt0">Staff Details</h4>
                             <SearchBox></SearchBox><br/><br/>
                            <Row text1="ID" text2="Name" text3="Email" text4="Contact" text5="Departement" size1={1} size2={3} size3={3} size4={3} size5={2}></Row>
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
        staffList:state.loadStaffListReducer.staffList,
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn,
        searchFieldValue:state.changeSearchFieldReducer.searchFieldValue
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadStaffList:()=>{
            dispatch(actions.loadStaffList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewStaffDetails);