require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/login', (req, res) => {
    res.send('Please Login')
})
app.get('/facebook', (req, res) => {
    res.send('Wellcome to Facebook page')
})
app.get("/youtube", (req, res) => {
    res.send('<h1> Wellcome to my youtube page </h1>')
})
app.get('/instagram', (req, res) => {
    res.send('hello people')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})