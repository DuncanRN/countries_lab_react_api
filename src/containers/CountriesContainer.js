import React, {useState, useEffect} from 'react';
import CountriesList from '../components/CountriesList';

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []); // DOES THIS empty array mean it's not listening for a state change, it's only being run
    // when on a render

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    return(<div className="container">
        <CountriesList countries={countries} />
    </div>)

}

export default CountriesContainer;