import React from "react";

const CountryItem = ({country, onCountryClick, onFavClick}) => {


    const handleClick = function() {
        onCountryClick(country)
    };

    const handleFavClick = function() {
        onFavClick(country)
    };

    return (
        <>
        <li >
            <div onClick={handleClick}>{country.name.official} </div>
            : {country.population}
            <button onClick={handleFavClick}>Add to Favorites</button>
        </li>
        </>
        
    )
}

export default CountryItem;