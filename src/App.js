import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
      {/* <Country></Country> */}
    </div>
  );
}

function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>setCountries(data))
  },[])
  return (
    <div>
      <h1>Load All Countries Of The World!!!!</h1>
      {
       /*  countries.map(country => <p>{country.name.common}</p>) */
        countries.map(country => <Country name={country.name.common} population={country.population} flags={country.flags.png}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div className='country'>
      <h1>Name:{props.name}</h1>
      <h2>Population:{props.population}</h2>
     <img src={props.flags} alt="" />
    </div>
  )
}


export default App;
