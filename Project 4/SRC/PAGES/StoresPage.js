// import React from "react";
import StoreTable from '../components/StoreTable';
import ZipSearch from '../components/ZipSearch';

function StoresPage({ stores }) {
    return (
        <body>
            <h2>Find a Store!</h2>
            <p>Nook's Cranny can be found in multiple locations! Search by city and state or ZIP code, to find the nearest one to you!</p>
            <StoreTable stores={stores}/>
            <ZipSearch />
        </body>
    )
}
export default StoresPage;