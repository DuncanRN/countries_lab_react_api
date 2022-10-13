import React, {useState, useEffect} from 'react';
import CountriesList from '../components/CountriesList';
import CountryDetail from '../components/CountryDetail';
import FavCountriesList from '../components/FavCountriesList';

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favCountries, setFavCountries] = useState([]);

    useEffect(() => {
        getCountries();
        getFavCountries();
        
    }, []); // DOES THIS empty array mean it's not listening for a state change, it's only being run
    // when on a render



    const getFavCountries = function(){
        fetch(favCountries => setFavCountries(countries))
    }

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = function(country){
        // console.log("in the click");
        setSelectedCountry(country);
    }

    
    const onFavClick = function (country){
        // favCountries => setFavCountries(country);  // SHOULD THAT be favcountry
        const copyFavCountries = [...favCountries];
        copyFavCountries.push({country});
        setFavCountries(copyFavCountries);
        

    }


    return(<div className="container">
        <CountriesList countries={countries} onCountryClick={onCountryClick} onFavClick={onFavClick}/>
        { selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null }
        <FavCountriesList favCountries={favCountries} />

        
    </div>)

}

export default CountriesContainer;