import * as actionTypes from '../actions/actionTypes';

const loadDepartmentListReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_DEPARTMENT_LIST:
            return{
                ...state,
                departmentList:action.payload
            }
        default:return state;
    }
}
export default loadDepartmentListReducer;