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
            <div className="country_name" onClick={handleClick}>{country.name.official} </div>
            <div> &nbsp;  has a population of {country.population}. </div>
            <button className="button" onClick={handleFavClick}>Add to Favorites</button>
        </li>
        </>
        
    )
}

export default CountryItem;