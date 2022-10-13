import React from "react";

const FavCountryItem = ({favCountry}) => {



    return (
        <>
        <li >
            <div >
                <p className="detail">Country has been added to favourites! 
                    It's accessible in the state.
                    Open your dev tools to view!</p>
                {/* {favCountry.name.official}  */}
            </div>
        </li>
        </>
        
    )
}

export default FavCountryItem;