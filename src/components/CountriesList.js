import React from 'react';
import CountryItem from './CountryItem';

const CountriesList =({countries, onCountryClick, onFavClick}) => {

    const countriesItems = countries.map((country, i) => {
        return <CountryItem 
        country={country}
        key={i}
        onCountryClick={onCountryClick}
        onFavClick={onFavClick}
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