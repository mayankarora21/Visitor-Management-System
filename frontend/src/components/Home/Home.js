import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Home=()=>{
    return(
        <div className="homeBackground white">
            <h3 className="inlineBlock">Welcome to Visitor Management System</h3>
            <p>This app helps a company to track and monitor the visitors visiting company office. To start entering the details of the visitors go to Staff Login.</p>
            <br/><br/>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Link to="/stafflogin" className="noUnderline">
                        <Button variant="contained" color="secondary">
                            Staff Login
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to="/staffregister" className="noUnderline">
                        <Button variant="contained" color="secondary">
                            Staff Register
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to="/adminlogin" className="noUnderline">
                        <Button variant="contained" color="secondary" >
                            Admin Login
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}
export default Home;