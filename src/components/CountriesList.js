import React from 'react';
import CountryItem from './CountryItem';

const CountriesList =({countries, onCountryClick}) => {

    const countriesItems = countries.map((country, i) => {
        return <CountryItem 
        country={country}
        key={i}
        onCountryClick={onCountryClick}
        />
    })

    return (
        <div>
            <ul>
                {countriesItems}
            </ul>
        </div>
    )

}

export default CountriesList