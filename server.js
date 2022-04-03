////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require("express")
const app = express()

//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers 
///////////////////////
app.get('/greeting', function (req,res) {
    res.send("Hello, stranger");
})
app.get('/greeting/:name', function (req,res) {
    res.send(`Hello, ${req.params.name}`);
})
app.get('/tip/:total/:tipPercentage', function (req,res) {
    res.send(`How much you should tip is ${(parseInt(req.params.total) * parseInt(req.params.tipPercentage) / parseInt(req.params.total))}`);
})
///////////////////////////
// Server Listener
///////////////////////////
app.listen(3000, () => console.log("Powerman3000"))