import React from "react";

const CountryDetail = ({selectedCountry}) => {
    
    // console.log("in countrydetail");

    return (
        <div className="detail">
            <h2>{selectedCountry.name.official}</h2>
            <h3>{selectedCountry.capital}</h3>
        </div>
    )
}

export default CountryDetail;