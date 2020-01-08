import * as actionTypes from '../actions/actionTypes';
const loadStaffReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_STAFF:
            return{
                ...state,
                isStaffLoggedIn:action.payload
            }
        default:return state;
    }
}
export default loadStaffReducer;