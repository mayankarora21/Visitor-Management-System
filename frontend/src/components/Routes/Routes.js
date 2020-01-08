import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../Home/Home';
import StaffLogin from '../StaffLogin/StaffLogin';
import StaffRegister from '../StaffRegister/StaffRegister';
import AdminLogin from '../AdminLogin/AdminLogin';
import StaffHome from '../StaffHome/StaffHome';
import AdminHome from '../AdminHome/AdminHome';
import CheckVisitorDetails from '../CheckVisitorDetails/CheckVisitorDetails';
import AnalyseVisitorDetails from '../AnalyseVisitorDetails/AnalyseVisitorDetails';
import AddStaff from '../AddStaff/AddStaff';
import AddDepartment from '../AddDepartment/AddDepartment';
import ViewStaffDetails from '../ViewStaffDetails/ViewStaffDetails';
import ViewDepartmentList from '../ViewDepartmentList/ViewDepartmentList';

const Routes=()=>{
    return(
        <div>
            <Switch>
                <Route path="/stafflogin" exact component={StaffLogin}></Route>
                <Route path="/staffregister" exact component={StaffRegister}></Route>
                <Route path="/adminlogin" exact component={AdminLogin}></Route>
                <Route path="/staff" exact component={StaffHome}></Route>
                <Route path="/admin" exact component={AdminHome}></Route>
                <Route path="/checkvisitordetails" exact component={CheckVisitorDetails}></Route>
                <Route path="/analysevisitordetails" exact component={AnalyseVisitorDetails}></Route>
                <Route path="/addstaff" exact component={AddStaff}></Route>
                <Route path="/adddepartment" exact component={AddDepartment}></Route>
                <Route path="/viewstafflist" exact component={ViewStaffDetails}></Route>
                <Route path="/viewdepartmentlist" exact component={ViewDepartmentList}></Route>
                <Route path="/" exact component={Home}></Route>
            </Switch>
        </div>
    );
}
export default Routes;