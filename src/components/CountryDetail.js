import React from "react";

const CountryDetail = ({selectedCountry}) => {
    
    // console.log("in countrydetail");

    return (
        <div className="detail">
            <h2><b>Country: </b>{selectedCountry.name.official}</h2>
            <h3><b>Capital: </b>{selectedCountry.capital}</h3>
            <h3><b>Area: </b>{selectedCountry.area}km<sup>2</sup></h3>
            <h3><b>Landlocked? </b>{selectedCountry.landlocked}</h3>
        </div>
    )
}

export default CountryDetail;