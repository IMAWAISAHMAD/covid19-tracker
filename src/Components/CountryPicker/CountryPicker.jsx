import React,{useEffect,useState} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import {fetchCountries} from '../../Api'
import styles from './CountryPicker.module.css'
import cx from 'classnames'

export default function CountryPicker({handleChange}) {

    const [countries,setCountries] = useState('');
    useEffect(()=>{
        const getCountries = async()=>{
            setCountries(await fetchCountries());
        }
        getCountries();
    },[])
  
    return (
        <div className={cx(styles.container)}>
            <FormControl  className={cx(styles.formControl)}>
                <NativeSelect variant='outlined'
                 onChange={(e)=>handleChange(e.target.value)}
                >
                <option value=''>Global</option>
                {countries?
                    (
                    countries.map((country,i)=>(
                        <option key={i} value={country.name}>{country.name}</option>
                        ))
                    ):
                    (
                        null
                    )
               }
                    
                   
                </NativeSelect>
            </FormControl>
        </div>
    )
}
