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
app.get("/hive", (req,res) => {
    res.send(`Thrall has invaded the server </br>
    Please Gaurdian help </br>
    There 100 thrall detected </br>
    <a href="http://localhost:3000/hive/99">Smash the first thrall!</a>`)
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
app.get("/hive/:bugs", (req,res) => {
    if(parseInt(req.params.bugs) === 0) {
        res.send(`The Hive has been eradicated! </br>
        All thrall have been sqwashed! </br>
        <a href="http://localhost:3000/hive">Ready for the next wave?</a>`)
    } else if (Math.random() < 0.3) {
        const bugSpawn = parseInt(req.params.bugs) + (Math.floor(Math.random() * 30))
        res.send(`${bugSpawn} little thrall in the code </br>
        ${bugSpawn} little thrall </br>
        Take one on </br>
        Smash it and run </br>
        <a href="http://localhost:3000/hive/${bugSpawn}">Oh no the thrall are multiplying! Quick clean them up faster!</a>`)
    } else {
        res.send(`${req.params.bugs} little thrall in the code. </br>
        ${req.params.bugs} little thrall </br>
        Take one on </br>
        Smash it and run </br>
        <a href="http://localhost:3000/hive/${parseInt(req.params.bugs) - 1}">Keep smashing the adds!</a>`)
    }
})
///////////////////////////
// Server Listener
///////////////////////////
app.listen(3000, () => console.log("Powerman3050"))