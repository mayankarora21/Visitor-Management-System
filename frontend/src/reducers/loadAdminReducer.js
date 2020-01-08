import * as actionTypes from '../actions/actionTypes';
const loadAdminReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_ADMIN:
            return{
                ...state,
                isAdminLoggedIn:action.payload
            }
        default:return state;
    }
}
export default loadAdminReducer;