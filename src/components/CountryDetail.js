import React from "react";
import CountriesContainer from "../containers/CountriesContainer";


const CountryDetail = ({selectedCountry}) => {
    
    // console.log("in countrydetail");

    return (
        <div className="detail">
            <h2>{selectedCountry.name.official}</h2>
        </div>
    )
}

export default CountryDetail;