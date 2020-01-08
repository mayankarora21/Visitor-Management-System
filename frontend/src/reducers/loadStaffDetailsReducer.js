import * as actionTypes from '../actions/actionTypes';

const loadStaffDetailsReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_STAFF_DETAILS:
            return {
                ...state,
                staffDetails:action.payload
            }
        default:return state;
    }
}

export default loadStaffDetailsReducer;