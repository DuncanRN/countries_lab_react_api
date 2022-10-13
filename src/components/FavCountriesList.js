import React from 'react';
import FavCountryItem from './FavCountryItem';

const FavCountriesList = ({favCountries}) => {


    const favCountriesItems = favCountries.map((favCountry, i) => {
            return <FavCountryItem 
            favCountry={favCountry}
            key={i}

            />

        });


    return (
        <div>
            <ul>
                <h1>{favCountriesItems}</h1>
            </ul>
        </div>

    )
    
    // console.log(favCountries);

   

    // return (
    //     <div>
    //         <ul>
    //             <h1>{favCountriesItems}</h1>
    //         </ul>
    //     </div>
    // );

}

export default FavCountriesList;