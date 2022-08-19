import React from 'react';
import GroceryTable from '../components/GroceryTable';

function OrderPage ({items}) {
    return (
        <body>
            <h2>Take a look at our catalog!</h2>
            <p>It seems like you're interested in our groceries selection! Here's what we have in stock today! Our inventory is limited to 10 items per customer.</p>
            <GroceryTable items={items}/>
        </body>
    )
}
export default OrderPage;