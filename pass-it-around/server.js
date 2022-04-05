////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require('express')
const app = express()

//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers 
///////////////////////

app.get('/', function (req,res) {
    res.send(`99 bottles of beer on the wall
    </br>
    <a href="http://localhost:3000/98">Take one down</a>`);
})
app.get('/:bottles', function (req,res) {
    if (req.params.bottles - 1 === 0) {
        res.send(`${req.params.bottles} bottle of beer on the wall
    </br>
    <a href="http://localhost:3000/${req.params.bottles}">Start Over.</a>`);
    } else {
        res.send(`${req.params.bottles} bottles of beer on the wall
    </br>
    <a href="http://localhost:3000/${req.params.bottles - 1}">Take one down</a>`)
    }
})
///////////////////////////
// Server Listener
///////////////////////////
app.listen(3000, () => console.log("Powerman3000"))