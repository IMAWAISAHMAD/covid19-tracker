import axios from 'axios';

const apiUrl = 'https://covid19.mathdro.id/api';


export const fetchData = async(country)=>{
    let  modifiedUrl = apiUrl;
    try
    {  
        if(country){
            modifiedUrl = `${apiUrl}/countries/${country}`
        }
        const {data:{confirmed,recovered,deaths,lastUpdate}} =await axios.get( modifiedUrl);

        const fetchedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return fetchedData;
        
        
    }
    catch(error){
        console.log(error);
        }
 
};
export const fetchDailyData = async()=>{
    try
    { 

        const {data} =await axios.get(`${apiUrl}/daily`);
        const fetchedDailyData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));

        return fetchedDailyData;
        
    }
    catch(error){
        console.log(error);
    }
};
export const fetchCountries = async()=>{
    try
    { 

        const {data:{countries}} =await axios.get(`${apiUrl}/countries`);
        const fetchedCountries = countries.map((country)=>({
            name:country.name,
            iso3:country.iso3,
        }))
        return fetchedCountries;
        
    }
    catch(error){
        console.log(error);
    }
};



