import React from 'react';
import Grid from '@material-ui/core/Grid';

const Row=(props)=>{
    return(
        <div>
            <Grid container>
            <Grid item xs={props.size1}>{props.text1}</Grid>
            <Grid item xs={props.size2}>{props.text2}</Grid>
            <Grid item xs={props.size3}>{props.text3}</Grid>
            <Grid item xs={props.size4}>{props.text4}</Grid>
            <Grid item xs={props.size5}>{props.text5}</Grid>
            
            <Grid item xs={12}><hr></hr></Grid>
            </Grid>
        </div>
    );
}
export default Row;