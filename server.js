var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var knex=require('knex');
var pg=require('pg');

const app=express();
app.use(bodyParser.json());
app.use(cors());


var db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : ''
  }
});

app.get('/',(req,res)=>{
    res.json('visitor management system');
})


app.post('/addvisitor',(req,res)=>{
    const {name,email,contact,personToMeet,department}=req.body;
    
    const currDate=new Date();
    const dateOfVisit=currDate.getDate()+"-"+(currDate.getMonth()+1)+"-"+currDate.getFullYear();
    const timeOfVisit=currDate.getHours()+":"+currDate.getMinutes();
//    console.log(timeOfVisit);
    
    db('visitor').insert({
        name:name,
        email:email,
        contact:contact,
        persontomeet:personToMeet,
        department:department,
        date:dateOfVisit,
        time:timeOfVisit
    }).returning('id').then(data=>{
        res.json(data)
    }).catch(err=>res.status(404).json(err));
})

app.post('/stafflogin',(req,res)=>{
    const {staffID,password} = req.body;
//    console.log("id ",staffID,+"password",password);
    db('staff').select('*').where({id:staffID,password:password})
        .then(data=>{
        if(data.length===0){
//            console.log('not found');
            res.status(404).json('wrong credentials');
        }
        else{
//            console.log('found');
            res.json(data[0]);
        }
    }).catch(err=>res.status(404).json(err));
})

app.post('/adminlogin',(req,res)=>{
    const {username,password}=req.body;
    if(username==='admin' && password==='admin'){
        res.json('right credentials');
    }
    else{
        res.status(404).json('wrong credentials');
    }
})

app.post('/adddepartment',(req,res)=>{
    const {name,managerID}=req.body;
//    console.log("name",name,"magagerID",managerID);
//    console.log(req.body);
    db('department').insert({name:name,managerid:managerID}).returning('id')
    .then(data=>{
        res.json(data);
    }).catch(err=>res.json(err));
})

app.get('/viewstaffdetails',(req,res)=>{
    db('staff').select('*').orderBy('id').then(data=>{
        res.json(data);
    }).catch(err=>res.status(404).json(err));
})

app.get('/getdepartmentnamelist',(req,res)=>{
    db('department').select('name').then(data=>{
        res.json(data);
    }).catch(err=>res.status(404).json(err));
})

app.post('/addstaff',(req,res)=>{
    const {name,email,department,contact}=req.body;
    db('staff').insert({name:name,email:email,department:department,contact:contact})
    .returning('id').then(data=>{
        res.json(data);
    }).catch(err=>res.status(404).json(err));
})

app.get('/getvisitordetails',(req,res)=>{
    db('visitor').select('*').orderBy('date','desc').then(data=>{
        res.json(data);
    }).catch(err=>res.status(404).json(err));
})

app.put('/staffregister',(req,res)=>{
    const {staffID,password}=req.body;
    db('staff').select('*').where({id:staffID}).then(data=>{
        if(data.length!==0){
            if(data[0].password){
                res.json('already registered');
            }
            else{
                db('staff').update({password:password}).where({id:staffID})
                .returning('*').then(data=>{
                    if(data.length!==0){
                        res.json('success')
                    }
                    else{
                        res.status(404).json('wrong id');
                    }
                })
                .catch(err=>res.status(404).json(err));
            }
        }
        else{
            res.status(404).json('wrong id');
        }
    }).catch(err=>res.status(404).json(err));
    
})

app.post('/getstaffdetails',(req,res)=>{
    const {staffID}=req.body;
//    console.log(req.body);
    db('staff').select('*').where({id:staffID}).then(data=>{
        res.json(data[0]);
    }).catch(err=>res.status(404).json(err));
})

app.post('/getvisitorcountbydate',(req,res)=>{
    
    const numDays=[0,31,28,31,30,31,30,31,31,30,31,30,31];
    const {month,year} = req.body;
//    console.log('month and year',month,year);
    let isLeapYear=false;
    if(year%400==0 || (year%100!=0 && year%4==0)){
        isLeapYear=true;
    }
    if(isLeapYear){
        numDays[2]=29;
    }
    const startDate=`${year}-${month}-01`;
    const endDate=`${year}-${month}-${numDays[month]}`;
//    console.log('start',startDate,'end',endDate);
    db('visitor').select('date',db.raw('COUNT(DATE)')).groupBy('date').havingBetween('date',[startDate,endDate]).orderBy('date').then(data=>{
        res.json(data);
    }).catch(err=>res.status(404).json(err));
})

app.post('/getvisitorcountbydepartment',(req,res)=>{
    
    const numDays=[0,31,28,31,30,31,30,31,31,30,31,30,31];
    const {month,year} = req.body;
    const startDate=`${year}-${month}-01`;
    const endDate=`${year}-${month}-${numDays[month]}`;
    db('visitor').select('department',db.raw('COUNT(DEPARTMENT)')).whereBetween('date',[startDate,endDate]).groupBy('department').then(data=>{
//        console.log('data',data);
        res.json(data);
    }).catch(err=>res.status(404).json(err));
})

app.get('/getstafflist',(req,res)=>{
    db('staff').select('*').then(data=>{
        res.json(data);
    }).catch(err=>res.status(404).json(err));
})

app.get('/getdepartmentlist',(req,res)=>{
    db('department').select('*').then(data=>{
//        console.log(data);
        res.json(data);
    }).catch(err=>res.status(404).json(err));
})

app.put('/updateremarks',(req,res)=>{
    db('visitor').update({remarks:req.body.remarks}).where({id:req.body.id})
    .returning('*').then(data=>{
        res.json('success');
    }).catch(err=>res.status(404).json(err));
})

app.listen(3000,()=>{
    console.log('app is running on port 3000');
})


/*


/addvisitor - post -visitorid-done
/getvistordetails - get -visitor details-done
/addstaff-post-staffid-done
/viewstaffdetails-get-staffdetails-done
/adddepartment-post-success/fail-done
/getdapartmentlist-get-departmentdetails-done
/staffregister-post-success/fail-done
/stafflogin-post-success/fail-done
/adminlogin-post-success/fail-done
/getDepartmentList-department name list-done
/getStaffDetails-staff details-done
/getvisitorcountbydate-visitor count by date-done
/getstafflist-staff list-done
/updateremarks-success/failure-done

*/