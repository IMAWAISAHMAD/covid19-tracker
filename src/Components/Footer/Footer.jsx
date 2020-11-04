import React from 'react';
import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    appBar:{
        top:'auto',
        bottom:0,
        alignItems:'center'
    }
})) 
export default function Footer() {
    const classes = useStyles();
    return (
    <AppBar className={classes.appBar}>
        <Toolbar>
            <Typography variant='title'>
                Copyrights &copy; {new Date().getFullYear()}
            </Typography>
        </Toolbar>
    </AppBar>
    )
}
