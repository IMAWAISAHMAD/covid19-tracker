import {useEffect,useState} from 'react';
import styles from  './App.module.css';
import {fetchData} from './Api';
import {Header,Cards,CountryPicker,Charts} from './Components';
import cx from 'classnames';



function App() {
  const [cases,setCases] = useState({});
  const [country,setCountry] = useState('');

  const handleChange = async(country) =>{
    setCountry(country);
    setCases(await fetchData(country));
    
  }

  useEffect(()=>{
    const getCases = async()=>{
     const fetchedCases = await fetchData(country);
     setCases(fetchedCases);
    
    };
    getCases();
  },[country])
  

  return (
    <div className={cx(styles.container)}>
      <Header/>
      <Cards cases={cases}/>
      <CountryPicker handleChange={handleChange}/>
      <Charts country={country} cases={cases}/>
    </div>
  );
}

export default App;
