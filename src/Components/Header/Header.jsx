import React from 'react';
import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    root:{
        alignItems:'center'
    }
}))

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position='fixed'>
            <Toolbar>
                <Typography variant='h4'>Covid-19 Tracker App</Typography>
            </Toolbar>
        </AppBar>
    )
}
   