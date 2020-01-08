import React from 'react';
import Button from '@material-ui/core/Button';

const SubmitButton=({text})=>{
    return(
        <Button variant="contained" color="secondary" className="pa0"><input type="submit" className="transparentBackground bw0 ph3 pv2 pointer" value={text}></input></Button>
    );
}
export default SubmitButton;