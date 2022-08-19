'use strict';

const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file 'stocks.js'
const stocks = require('./stocks.js').stocks;

const express = require("express");
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Note: Don't add or change anything above this line.

// Add your code here

// route handler for get request to the homepage URL
app.get("/", (req, res) => {
    res.send("./index.html");
});

// routle handler to post stock order response

function findStockbySymbol(symbol) {
    return stocks.find(stock => stock.symbol === symbol);
	
}

app.post("/order", (req, res) => {
    let stock = req.body.stock;
    let found_stock = findStockbySymbol(stock)
    let price = found_stock.price
    let quantity = req.body.quantity;

	let response = 
	(`You ordered ${quantity} share(s) of ${stock} stock.  
	<p>The price of one stock is \$${price} 
	and the total price for this order is \$${price * quantity}.</p>`);
	res.send(response);
    })

function findStockByPrice(price) {
	if (price === 'low') {
		return stocks.reduce((min, curr) => {
			return min.price <= curr.price ? min : curr
		});

	} 
	if (price === 'high') {
		return stocks.reduce((max, curr) => {
			return max.price >= curr.price ? max : curr
		});
	}
}

app.get("/search", (req, res) => {
    res.send(findStockByPrice(req.query.price));
;})

// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});