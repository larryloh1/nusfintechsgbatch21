
const express = require('express')
const app = express()


app.get("/sum", (request, response) => {
    let n1 = parseFloat(request.query.n1);
    let n2 = parseFloat(request.query.n2);

    let sum = n1 + n2;
    response.send(`Sum is : ${sum}`);
});

app.listen(3000, () => {
    console.log('Example ap listen on port 3000')
})