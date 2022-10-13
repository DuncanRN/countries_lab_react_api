import React from "react";

const CountryItem = ({country}) => {
    return (
        <li>
            {country.name.common} : {country.population}
        </li>
    )
}

export default CountryItem;