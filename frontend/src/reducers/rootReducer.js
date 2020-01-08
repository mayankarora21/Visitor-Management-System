import {combineReducers} from 'redux';
import loadDepartmentListReducer from './loadDepartmentListReducer';
import loadAdminReducer from './loadAdminReducer';
import loadStaffReducer from './loadStaffReducer';
import loadStaffDetailsReducer from './loadStaffDetailsReducer';
import loadVisitorDetailsReducer from './loadVisitorDetailsReducer';
import changeSearchFieldReducer from './changeSearchFieldReducer';
import loadStaffListReducer from './loadStaffListReducer';

const rootReducer=combineReducers({
    loadDepartmentListReducer,
    loadAdminReducer,
    loadStaffReducer,
    loadStaffDetailsReducer,
    loadVisitorDetailsReducer,
    changeSearchFieldReducer,
    loadStaffListReducer
});
export default rootReducer;
