import * as actionTypes from './actionTypes';

export function loadDepartmentList(){
    const departmentList=fetch('http://localhost:3000/getdepartmentlist').then(response=>response.json())
    .then(data=>{
        return data;
    });
    
//    console.log('in action creator',departmentList);    
    return{
        type:actionTypes.LOAD_DEPARTMENT_LIST,
        payload:departmentList
    }
}

export function loadAdmin(isAdminLoggedIn){
    return{
        type:actionTypes.LOAD_ADMIN,
        payload:isAdminLoggedIn
    }
}

export function loadStaff(isStaffLoggedIn){
//    console.log('isStaffLoggedIn',isStaffLoggedIn);
    return{
        type:actionTypes.LOAD_STAFF,
        payload:isStaffLoggedIn
    }
}

export function loadStaffDetails(staffID){
    const object={
        staffID:staffID
    }
//    console.log(object);
    const staffDetails=fetch('http://localhost:3000/getstaffdetails',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(object)
    }).then(response=>response.json())
    .then(data=>{
        return data;
    })
    
    return{
        type:actionTypes.LOAD_STAFF_DETAILS,
        payload:staffDetails
    }
}


export function loadVisitorList(){
    const visitorList=fetch('http://localhost:3000/getvisitordetails').then(response=>response.json())
    .then(data=>{
        return data;
    })
    return{
        type:actionTypes.LOAD_VISITOR_LIST,
        payload:visitorList
    }
}

export function loadStaffList(){
    const staffList=fetch('http://localhost:3000/getstafflist').then(response=>response.json())
    .then(data=>{
        return data;
    })
    return{
        type:actionTypes.LOAD_STAFF_LIST,
        payload:staffList
    }
}

//export function loadDepartmentList(){
//    const departmentList=fetch('http://localhost:3000/getdepartmentlist').then(response=>response.json())
//    .then(data=>{
//        return data;
//    })
//    return{
//        type:actionTypes.LOAD_DEPARTMENT_LIST,
//        payload:departmentList
//    }
//}

export function changeSearchField(e){
//    console.log('in action creator',e.target.value)
    return{
        type:actionTypes.CHANGE_SEARCH_FIELD,
        payload:e.target.value
    }
}