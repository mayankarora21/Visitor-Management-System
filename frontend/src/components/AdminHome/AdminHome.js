import React,{Component} from 'react';
import {connect} from 'react-redux';
import LoginFirst from '../LoginFirst/LoginFirst';
import AddVisitor from '../AddVisitor/AddVisitor';

class AdminHome extends Component{
    render(){
//        console.log(this.props.isAdminLoggedIn);
        if(this.props.isAdminLoggedIn){
            return(
                <div className="gradientBackground2">
                    <h3 className="mt0">Welcome Admin</h3>
                    <AddVisitor></AddVisitor>
                </div>
            )
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
export default connect(mapStateToProps,null)(AdminHome);