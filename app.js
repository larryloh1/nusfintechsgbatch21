const express = require('express')
const data = require('./mock_data')
const app = express()

// Tell the express object to use the JSON format
app.use(express.json());

app.get('/', function(request, response) {
    response.send("Hello World")
})

app.get("/sum", (request, response) => {
    let n1 = parseFloat(request.query.n1);
    let n2 = parseFloat(request.query.n2);

    let sum = n1 + n2;
    
    response.send(`Sum is: ${sum}`);
});

app.get("/users/all", (request, response) => {
    let users = data.get_all_users();
    response.send(users);
});

app.get("/users/by-id", (request, response) => {
    let user = data.get_user_by_user_id(parseInt(request.query.user_id));
    if (user)
        response.status(200).send(user)
    else
        response.status(404).send("user not found");
});

app.post("/user/add", (request, response) => {
    // We will assume that data is coming in request's body in JSON format.
    data.add_user(request.body);
    response.status(200).send(`Record added!`);
});



app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})