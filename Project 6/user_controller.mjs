import * as users from './user_model.mjs';
import express from 'express';
const app = express();

const PORT = 3000;

let requestcounter = 0
let zerocounter = 0

function middleware() {
    if (requestcounter > 0 && zerocounter % 10 === 0) {
        console.log(`Total retrieve requests: ${requestcounter}`)
        console.log(`Retrieve requests with 0 query parameters: ${zerocounter}`)
        console.log(`Retrieve requests with 1 or more query parameters: ${requestcounter - zerocounter}`)
    }
}

app.get("/create", async (req, res) => {
    console.log(req.query);
    let user = await users.createUser(req.query.name, req.query.age, req.query.email, req.query.phoneNumber)
    res.send(user);
})
    
app.get("/retrieve", async (req, res) => {
    console.log(req.query);
    let filter = req.query;
    users.RetrieveUser(filter, '', 0)
        .then(data => {
            console.log(data)
            res.send(data);
        })
        .catch(error => {
            console.log(error);
            res.send({ error: 'not found' });
        });

});

 app.get("/update", (req, res) => {
    console.log(req.query);
    users.UpdateUser(req.query._id, req.query.name, req.query.age, req.query.email, req.query.phoneNumber)
        .then(totalcount => {
            console.log(totalcount);
            res.send({ totalcount: totalcount });
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'not found' });
        });
});

 app.get("/delete", (req, res) => {
    let array = ["_id", "name", "age", "email", "phoneNumber"]
    let filter = []
    for (let i = 0; i < array.length; i++) {
        if (req.query[array[i]] != undefined) {
            const obj = {}
            obj[array[i]] = req.query[array[i]]
            filter.push(obj)
        }
    }
    console.log(filter)
    users.DeleteById(filter)
        .then(deletecount => {
            console.log(deletecount)
            res.send({ deletecount: deletecount })
        })
        .catch(error => {
            console.log(error)
            res.send({ error: 'not found' })
        })

})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});