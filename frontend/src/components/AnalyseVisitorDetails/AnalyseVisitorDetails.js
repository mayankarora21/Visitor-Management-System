import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Chart from "react-google-charts";
import {connect} from 'react-redux';
import LoginFirst from '../LoginFirst/LoginFirst'

class AnalyseVisitorDetails extends React.Component{
    state={
        chosenButton:'',
        visitorCountByDate:[],
        visitorCountByDepartment:[],
        month:new Date().getMonth()+1,
        year:new Date().getFullYear()
    }
    
    getVisitorCountByDate=()=>{
        const object={
            month:this.state.month,
            year:this.state.year
        }
        fetch('http://localhost:3000/getvisitorcountbydate',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(object)
        }).then(response=>response.json())
        .then(data=>{
            this.setState({visitorCountByDate:data,visitorCountByDepartment:[]});
        });
        
//        this.handleMonthChange()
    }
    getVisitorCountByDepartment=()=>{
        const object={
            month:this.state.month,
            year:this.state.year
        }
        fetch('http://localhost:3000/getvisitorcountbydepartment',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(object)
        }).then(response=>response.json())
        .then(data=>{
            this.setState({visitorCountByDepartment:data,visitorCountByDate:[]});
        });
        
//        this.handleMonthChange();
    }
    
    handleMonthChange=()=>{
//        this.setState({mo})
        const monthYearBox=document.getElementById('monthYear');
//        console.log(monthYearBox.value);
        let month=monthYearBox.value.substring(5);
        const year=monthYearBox.value.substring(0,4);
        if(month[0]==='0'){
            month=month.substring(1);
        }
//        console.log(month,year);
        this.setState({month:month,year:year});
    }
    render(){
        
        if(this.props.isAdminLoggedIn || this.props.isStaffLoggedIn){
            //        console.log('chosen',this.state.visitorCountByDate)
    //        console.log('chosen',this.state.visitorCountByDepartment)
            const dataByDate=[['x','Count']];
            this.state.visitorCountByDate.forEach((v,i)=>{
                dataByDate[i+1]=[v.date.substring(0,10),parseInt(v.count)];
            })
    //        console.log('data by date',dataByDate);

            const dataByDepartment=[['Department','VisitorCount']];
            this.state.visitorCountByDepartment.forEach((v,i)=>{
                dataByDepartment[i+1]=[v.department,parseInt(v.count)];
            })

    //        console.log(dataByDepartment);
            return(
                <div className="analyseBackground white">
                <div className="centrallyAligned">
                    <p>Select Month and Year first</p>
                    <input type="month" id="monthYear" onChange={this.handleMonthChange}></input>
                    <RadioGroup aria-label="analyse" name="analyse">
                      <FormControlLabel value="date" control={<Radio />} label="Date" onClick={this.getVisitorCountByDate} />
                      <FormControlLabel value="department" control={<Radio />} label="Department" onClick={this.getVisitorCountByDepartment} />
                    </RadioGroup>
                </div>
                    <br/><br/>
                <div className="centrallyAligned">
                {
                        (this.state.visitorCountByDate.length!==0)?
                            <React.Fragment>
                            <Chart
                                  width={'450px'}
                                  height={'300px'}
                                  chartType="LineChart"
                                  loader={<div>Loading Chart</div>}
                                  data={dataByDate}
                                  options={{
                                    hAxis: {
                                      title: 'Date',
                                    },
                                    vAxis: {
                                      title: 'Count',
                                    },
                                  }}
                                  rootProps={{ 'data-testid': '1' }}
                                />
                            </React.Fragment>
                                :
                                (this.state.visitorCountByDepartment.length!==0)?
                            <React.Fragment>
                                <Chart
                                  width={'450px'}
                                  height={'300px'}
                                  chartType="PieChart"
                                  loader={<div>Loading Chart</div>}
                                  data={dataByDepartment}
                                  options={{
                                    title: 'Visitor Count in each Deparment',
                                  }}
                                  rootProps={{ 'data-testid': '1' }}
                                /></React.Fragment>:<p>No data available as of now</p>
                }
                    </div>
                </div>
            );
        }
        
        else{
            return <LoginFirst></LoginFirst>
        }
    }
}

const mapStateToProps=(state)=>{
    return{
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn,
        isStaffLoggedIn:state.loadStaffReducer.isStaffLoggedIn,
    }
}

export default connect(mapStateToProps,null)(AnalyseVisitorDetails);