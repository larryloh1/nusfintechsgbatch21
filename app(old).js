const express = require('express')
const data = require('./mock_data') /*link to mock_data.js*/
const app = express()

//tel express object to use json format
app.use(express.json());

app.get('/', function (request, response) {
    response.send("Hello World")
})

app.get("/sum", (request, response) => {
    let n1 = parseFloat(request.query.n1);
    let n2 = parseFloat(request.query.n2);

    let sum = n1 + n2;
    response.send(`Sum is : ${sum}`);
});

app.get("/users/all", (request, response) => {
    let users = data.get_all_users(); /*This method is from mock_data.js */
    response.send(users);
      
});

app.get("/users/by-id", (request, response) => {
    let user = data.get_user_by_user_id(parseInt(request.query.user_id));
   
    if (user)
        response.send(user);
    else
        response.status(404).send("user not found");  
});

app.post("/user/add", (request, response) => {
        
     
    let result = data.add_user(request.body);
     
    if (result) 
        response.send("User is added");
    else
        response.status(500).send("User is not added");  
});
app.listen(3000, () => {
    console.log('Example ap listen on port 3000')
})
