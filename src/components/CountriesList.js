import React from 'react';
import CountryItem from './CountryItem';

const CountriesList =({countries}) => {

    const countriesItems = countries.map((country, i) => {
        return <CountryItem 
        country={country}
        key={i}
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