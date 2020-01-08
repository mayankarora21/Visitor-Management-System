import * as actionTypes from '../actions/actionTypes';

const changeSearchFieldReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.CHANGE_SEARCH_FIELD:
//            console.log('searchfield',action.payload)
            return{
                ...state,
                searchFieldValue:action.payload
            }
        default:return state;
    }
}

export default changeSearchFieldReducer;