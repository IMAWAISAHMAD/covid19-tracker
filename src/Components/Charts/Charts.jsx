import React,{useEffect,useState} from 'react';
import {fetchDailyData} from '../../Api';
import  {Line,Bar}  from 'react-chartjs-2';
import styles from './Charts.module.css';
import cx from 'classnames';

export default function Charts({country,cases}) {
    const [dailyData,setDailyData] =useState([]);

    useEffect(()=>{
        const fetchDaily = async()=> {
          setDailyData(await fetchDailyData());
        }
        fetchDaily();
    },[])
   

    const lineChart = (
        dailyData.length?(
           <Line
           data={{
               labels:dailyData.map(({date})=>date),
               datasets:[{
                   data:dailyData.map(({confirmed})=>confirmed),
                   label:'Infected',
                   borderColor:'orange',
                   fill:true
               },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor:'red',
                    fill:true
               }]
           }}        
           />
        )
        :
        (
        null
        ) 
    )
    const barChart = (
        cases.confirmed?(
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:[
                        'orange',
                        'green',
                        'red',
                    ],
                    data:[cases.confirmed.value,cases.recovered.value,cases.deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{dispaly:true,text:`Current State in ${country}`}
            }}
            />
        ):(
            null
        )
    )
    return (
        <div className={cx(styles.container)}>       
            {country? barChart:lineChart}
        </div>
    )
}
