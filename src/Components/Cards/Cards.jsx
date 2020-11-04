import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

export default function Cards({cases:{confirmed,recovered,deaths,lastUpdate}}) {
    if(!confirmed){
        return 'Loading...............'
    }

    return (
    <div className={cx(styles.container)}>
        <Grid container spacing={3} justify='center'>
            <Grid item xs={12} md={3} component={Card} raised className={cx(styles.card,styles.confirmed)}>
                <CardContent>
                    <Typography style={{color:'orange'}} variant='h4' gutterBottom>Confirmed</Typography>
                    <Typography variant='h5'>
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            separator=','
                            duration={2.5}
                        />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body1'>Total number of confirmed cases</Typography>
                </CardContent>
            </Grid>
            <Grid item xs={12} md={3} component={Card} raised className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography style={{color:'green'}} variant='h4' gutterBottom>Recovered</Typography>
                    <Typography variant='h5'>
                        <CountUp
                            start={0}
                            end={recovered.value}
                            separator=','
                            duration={2.5}
                        />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body1'>Total number of recovered cases</Typography>
                </CardContent>
            </Grid>
            <Grid item xs={12} md={3} component={Card} raised className={cx(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography style={{color:'red'}} variant='h4' gutterBottom>Deaths</Typography>
                    <Typography variant='h5'>
                            <CountUp
                            start={0}
                            end={deaths.value}
                            separator=','
                            duration={2.5}
                        />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body1'>Total number of deaths</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
    )
}
