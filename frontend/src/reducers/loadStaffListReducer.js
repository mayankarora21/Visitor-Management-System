import * as actionTypes from '../actions/actionTypes'

const loadStaffListReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_STAFF_LIST:
            return{
                ...state,
                staffList:action.payload
            }
        default:return state
    }
}

export default loadStaffListReducer;