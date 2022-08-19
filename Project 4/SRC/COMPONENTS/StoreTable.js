import React from "react";
import StoreRow from "./StoreRow";

function StoreTable({ stores }) {

    return (
        <table id='stores' class='center'>
            <caption>Store Locator</caption>
            <thead>
                <tr>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </tr>
            </thead>

            <tbody>
                {stores.map((store, i) => <StoreRow store={store} key={i} />)}
            </tbody>

        </table>

    );

}

export default StoreTable;