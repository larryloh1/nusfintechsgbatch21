// First we declare the modules we depend on
let express = require("express");

let router = express.Router();

//
router.get("/", (request, response) => {
    response.status(200).send("Welcome");
});

// define a POST to return the sum of 2 numbers
router.get("/sum", (request, response) => {
    // 1. extract the numbers from the request body
    let number1 = parseFloat(request.query.number1);
    let number2 = parseFloat(request.query.number2);
    // 2. add the two numbers together
    let sum = number1 + number2;
    // 3. return the result
    response.status(200).send("The sum is: " + sum);
});

// Export the router object for use by other files
module.exports = { router };