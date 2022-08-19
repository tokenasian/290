import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT
const app = express();

app.use(express.static('public'));

// Note: Don't add or change anything above this line.

// this is the middleware function
// this maintains a count of how many HTTP requests have been received 
// for the endpoint GET /random-person 
// and prints these statistics to the console on every 10th request.

let requestcounter = 0 // setting up a counter to keep track

app.use('/random-person', function(req, res, next){
  if (requestcounter % 10 === 0) { // if request counter modulus 10 equals 0 
    console.log(requestcounter)
  }
  requestcounter++ // increment request counter
  next()
})
  
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "http://localhost:3000"));
});

// this is a route handler for the endpoint get/random-person
// this route handler will return the response from the API as its own response to the request
// the response status code must be 200

app.get('/random-person', async (req, res) => {
  try {
    let response = await fetch('https://randomuser.me/api/', { method: 'GET'})
      .then(response => response.json())
      .then(data => {
        res.send(JSON.stringify(data))
    })
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
});

// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});