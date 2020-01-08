import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const Loading=()=>{
    return(
        <React.Fragment>
            <LinearProgress color="secondary" />
            <p>Loading</p>
        </React.Fragment>    
    );
}
export default Loading;