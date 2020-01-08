import * as actionTypes from '../actions/actionTypes'

const loadVisitorDetailsReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_VISITOR_LIST:
            return{
                ...state,
                visitorList:action.payload
            }
        default:return state
    }
}

export default loadVisitorDetailsReducer;