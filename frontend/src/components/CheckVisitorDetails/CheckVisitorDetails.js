import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import LoginFirst from '../LoginFirst/LoginFirst';
import SearchBox from '../SearchBox/SearchBox';
import Row from '../Row/Row';
import Modal from '../Modal/Modal';
import Loading from '../Loading/Loading';

class CheckVisitorDetails extends React.Component
{
    state={
        modalOpen:false,
        clickedIndex:-1,
        visitorDetails:{}
    }
    handleOpen=()=>{
        this.setState({modalOpen:true});
    }
    handleClose=()=>{
        this.setState({modalOpen:false});
    }
    componentDidMount(){
        if(this.props.isAdminLoggedIn || this.props.isStaffLoggedIn){
            this.props.loadVisitorList();
        }
    }
    render()
    {
        
//         console.log('visitor list',this.props.visitorList);
//        console.log('open',this.state.modalOpen);
//        console.log('clicked index',this.state.clickedIndex);
        
        
         if(this.props.isAdminLoggedIn || this.props.isStaffLoggedIn){
             
             if(this.props.visitorList && this.props.visitorList.map){
                
//                 console.log(this.props.searchFieldValue);
                 if(this.props.searchFieldValue){
                     
//                     add filtered list
                     const searchFieldValue=this.props.searchFieldValue;
                     const filteredList=this.props.visitorList.filter((visitor,i)=>{
                         if(visitor.name.toLowerCase().includes(searchFieldValue.toLowerCase()) || visitor.department.toLowerCase().includes(searchFieldValue.toLowerCase()) || visitor.persontomeet.toLowerCase().includes(searchFieldValue.toLowerCase()) ){
                             return true;
                         }
                         else{
                             return false;
                         }
                     });
                     
                     const rows=filteredList.map((visitor,i)=>{
                         return <div onClick={()=>{this.handleOpen();this.setState({clickedIndex:i})} } className="pointer" key={i}><Row key={i} text1={visitor.id} text2={visitor.name.toUpperCase()} text3={visitor.date.substring(0,10)} text4={visitor.persontomeet.toUpperCase()} text5={visitor.department.toUpperCase()} size1={2} size2={3} size3={2} size4={3} size5={2} className="pointer"></Row></div>
                     })
                     let visitorDetails={id:0,name:'',contact:'',email:'',remarks:'',department:'',date:'',time:'',persontomeet:''};
                     if(this.state.clickedIndex!==-1){
                         visitorDetails=filteredList[this.state.clickedIndex];
                     }
                     return(
                        <div className="gradientBackground2">
                            <h4 className="mt0">Visitor Details</h4>
                             <SearchBox></SearchBox><br/><br/>
                             <Row text1="ID" text2="Name" text3="Date" text4="Person to Meet" text5="Departement" size1={2} size2={3} size3={2} size4={3} size5={2}></Row>
                             {rows}
                             <Modal modalOpen={this.state.modalOpen} handleClose={this.handleClose} handleOpen={this.handleOpen} name={visitorDetails.name} id={visitorDetails.id} email={visitorDetails.email} contact={visitorDetails.contact} department={visitorDetails.department} person={visitorDetails.persontomeet} remarks={visitorDetails.remarks} date={visitorDetails.date} time={visitorDetails.time} loadVisitorList={this.props.loadVisitorList}></Modal>
                        </div>
                    );
                 }
                 else{
                     const rows=this.props.visitorList.map((visitor,i)=>{
                        return <div onClick={()=>{this.handleOpen();this.setState({clickedIndex:i})} } className="pointer" key={i}><Row  text1={visitor.id} text2={visitor.name.toUpperCase()} text3={visitor.date.substring(0,10)} text4={visitor.persontomeet.toUpperCase()} text5={visitor.department.toUpperCase()} size1={2} size2={3} size3={2} size4={3} size5={2} ></Row></div>
                     })
                     
                     let visitorDetails={id:0,name:'',contact:'',email:'',remarks:'',department:'',date:'',time:'',persontomeet:''};
                     if(this.state.clickedIndex!==-1){
                         visitorDetails=this.props.visitorList[this.state.clickedIndex];
                     }
//                     console.log('details',visitorDetails);
                     return(
                        <div className="gradientBackground2">
                            <h4 className="mt0">Visitor Details</h4>
                             <SearchBox></SearchBox><br/><br/>
                             <Row text1="ID" text2="Name" text3="Date" text4="Person to Meet" text5="Departement" size1={2} size2={3} size3={2} size4={3} size5={2}></Row>
                             {rows}
                             
                             <Modal modalOpen={this.state.modalOpen} handleClose={this.handleClose} handleOpen={this.handleOpen} name={visitorDetails.name} id={visitorDetails.id} email={visitorDetails.email} contact={visitorDetails.contact} department={visitorDetails.department} person={visitorDetails.persontomeet} remarks={visitorDetails.remarks} date={visitorDetails.date} time={visitorDetails.time} loadVisitorList={this.props.loadVisitorList}></Modal>
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
        visitorList:state.loadVisitorDetailsReducer.visitorList,
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn,
        isStaffLoggedIn:state.loadStaffReducer.isStaffLoggedIn,
        searchFieldValue:state.changeSearchFieldReducer.searchFieldValue
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadVisitorList:()=>{
            dispatch(actions.loadVisitorList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckVisitorDetails);