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
    res.send(`How much you should tip is ${parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100)}`);
})
app.get('/magic/:phrase', function (req,res) {
    const ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    let rand = Math.floor(Math.random()*20)
    res.send(`<h1>${req.params.phrase}</h1> </br> <h1>${ball[rand]}</h1>`);
})
app.get('/fibonacci/:num', (req,res) => {
    let num = parseInt(re.params.num)
    // A number is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square
    if(Number.isInteger(Math.sprt(5*(num**2) + 4)) || Number.isInteger(Math.sprt(5*(num**2) - 4))) {
        res.send("This number is a Fibonacci Number")
    } else {
        res.send("This number is not a Fibonacci number")
    }
})
///////////////////////////
// Server Listener
///////////////////////////
app.listen(3000, () => console.log("Powerman3000"))