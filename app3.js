//refer to Pg 24 of Session 6 notes which mention why line 2 & 3
const express = require('express') //link to express module
const database = require('./database') //this create object out of database.js. If any reserve word like const is light blue, it means that there is typo error 
const app = express()

// Tell the express object to use the JSON format
app.use(express.json());

app.get('/', function(request, response) {
    response.send("Hello World")
})

app.get("/customers/byname", (request, response) => {
    database.connection.query(
      `select * from customers where first_name = ${request.query.first_name}`, // query in string format
      (error, results) => {
        if (error) {
          response.status(500).send("Server error");
          console.log(error);
        } else {
          response.status(200).send(results);
          console.log(results);
        }
      }
    );
  });



app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})