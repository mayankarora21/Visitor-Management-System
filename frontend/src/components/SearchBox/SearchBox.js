import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions'; 

class SearchBox extends React.Component{
    handleOnChange=(e)=>{
        this.props.changeSearchField(e);
    }
    render(){
        return(
            <input type="text" placeholder="Search" className="w-30 pa2" onChange={this.handleOnChange}></input>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeSearchField:(e)=>{
            dispatch(actions.changeSearchField(e))
        }
    }
}
export default connect(null,mapDispatchToProps)(SearchBox);