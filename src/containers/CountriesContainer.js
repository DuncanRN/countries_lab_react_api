import React, {useState, useEffect} from 'react';
import CountriesList from '../components/CountriesList';
import CountryDetail from '../components/CountryDetail';

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries();
    }, []); // DOES THIS empty array mean it's not listening for a state change, it's only being run
    // when on a render

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = function(country){
        // console.log("in the click");
        setSelectedCountry(country);
    }

    return(<div className="container">
        <CountriesList countries={countries} onCountryClick={onCountryClick}/>
        { selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null }
    </div>)

}

export default CountriesContainer;