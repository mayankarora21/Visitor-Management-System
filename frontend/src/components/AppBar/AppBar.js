import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ViewListIcon from '@material-ui/icons/ViewList';
import AssessmentIcon from '@material-ui/icons/Assessment';

import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles';

import {Link} from 'react-router-dom';
import{connect} from 'react-redux';
import * as actions from '../../actions/actions'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerRoot:{
      background:'#000000',
  },
  whiteColor:{
      color:'#FFFFFF'
  },
  backgroundWhite:{
      backgroundColor:'#FFFFFF'
  }
};
const theme=createMuiTheme({
    palette:{
        primary:{
            main:'#2196f3'
        },
        secondary:{
            main:'#ff5722'
        }
    },
    typography:{
        
    }
});
class ButtonAppBar extends React.Component{
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
      };

      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
    render(){
        const { classes } = this.props;
        const sideList = (
          <div className={classes.list}>
                <List>
                    <Link to ="/" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon  classes={{root:classes.whiteColor}}><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Home" classes={{primary:classes.whiteColor}}></ListItemText> 
                        </ListItem>
                    </Link>
                    <Link to="/stafflogin" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary="Staff Login" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/staffregister" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><MailIcon /></ListItemIcon>
                            <ListItemText primary="Staff Register" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/adminlogin" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><SupervisorAccountIcon /></ListItemIcon>
                            <ListItemText primary="Admin Login" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                </List>
                <Divider variant ="middle" classes={{middle:classes.backgroundWhite}}/>
          </div>
        );
        
        const staffSideList=(
            <div className={classes.list}>
                <List>
                    <Link to="/staff" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><AddCircleIcon /></ListItemIcon>
                            <ListItemText primary="Add Visitor Details" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/checkvisitordetails" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><CheckCircleIcon /></ListItemIcon>
                            <ListItemText primary="Check Visitor Details" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/analysevisitordetails" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><AssessmentIcon /></ListItemIcon>
                            <ListItemText primary="Analyse Visitor Details" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/" onClick={()=>{this.props.loadStaff(false)}} className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary="Sign Out" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                </List>
                <Divider variant ="middle" classes={{middle:classes.backgroundWhite}}/>
          </div>
        );
        
        const adminSideList=(
            <div className={classes.list}>
                <List>
                    <Link to="/admin" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><AddCircleIcon /></ListItemIcon>
                            <ListItemText primary="Add Visitor Details" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/checkvisitordetails" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><CheckCircleIcon /></ListItemIcon>
                            <ListItemText primary="Check Visitor Details" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/analysevisitordetails" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><AssessmentIcon /></ListItemIcon>
                            <ListItemText primary="Analyse Visitor Details" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/addstaff" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><PersonAddIcon /></ListItemIcon>
                            <ListItemText primary="Add Staff" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/viewstafflist" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><ViewListIcon /></ListItemIcon>
                            <ListItemText primary="View Staff List" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/adddepartment" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><PostAddIcon /></ListItemIcon>
                            <ListItemText primary="Add Department" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/viewdepartmentlist" className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><ViewListIcon /></ListItemIcon>
                            <ListItemText primary="View Department List" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to="/" onClick={()=>{this.props.loadAdmin(false)}} className="noUnderline">
                        <ListItem button>
                            <ListItemIcon classes={{root:classes.whiteColor}}><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary="Sign Out" classes={{primary:classes.whiteColor}}></ListItemText>
                        </ListItem>
                    </Link>
                </List>
                <Divider variant ="middle" classes={{middle:classes.backgroundWhite}}/>
          </div>
        );

        
        return (
            <div className={`${classes.root} tl`}>
            <MuiThemeProvider theme={theme}>
              <AppBar position="static" color="primary">
                <Toolbar>
                  <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                    VISITOR MANAGEMENT SYSTEM
                  </Typography>
                </Toolbar>
              </AppBar>
                </MuiThemeProvider>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)} classes={{paper:classes.drawerRoot}}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left', false)}
                    onKeyDown={this.toggleDrawer('left', false)}
                  >
                    {
                        (this.props.isStaffLoggedIn)?staffSideList:
                        (this.props.isAdminLoggedIn)?adminSideList:
                        sideList
                    }
                  </div>
                </Drawer>
            </div>

          );
    }

}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps=(state)=>{
    return{
        isAdminLoggedIn:state.loadAdminReducer.isAdminLoggedIn,
        isStaffLoggedIn:state.loadStaffReducer.isStaffLoggedIn
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        loadAdmin:(isAdminLoggedIn)=>{
            dispatch(actions.loadAdmin(isAdminLoggedIn))
        },
        loadStaff:(isStaffLoggedIn)=>{
            dispatch(actions.loadStaff(isStaffLoggedIn))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ButtonAppBar));