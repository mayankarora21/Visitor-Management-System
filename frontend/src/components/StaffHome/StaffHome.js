import React from 'react';
import AddVisitor from '../AddVisitor/AddVisitor';
import {connect} from 'react-redux';
import LoginFirst from '../LoginFirst/LoginFirst';

class StaffHome extends React.Component{
    render()
    {
//        console.log(this.props.isStaffLoggedIn);
        if(this.props.isStaffLoggedIn){
//            console.log(this.props.staffDetails);
            let name="NAME";
            if(this.props.staffDetails){
                name=this.props.staffDetails.name.toUpperCase();
            }
            return(
                <div className="gradientBackground2">
                    <h3 className="mt0">{`Welcome ${name}`}</h3>
                    <AddVisitor></AddVisitor>
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
        isStaffLoggedIn:state.loadStaffReducer.isStaffLoggedIn,
        staffDetails:state.loadStaffDetailsReducer.staffDetails
    }
}
export default connect(mapStateToProps,null)(StaffHome);