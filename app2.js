const express = require("express");
const apis = require("./api");

let app = express();
app.use(apis.router);

app.listen(3000, () => {
    console.log('Example ap listen on port 3000')
})