const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch')
const mongoose = require('mongoose')

const app = express();
require('dotenv').config();


// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const port = process.env.PORT || 8000;
const apiKey = process.env.API_KEY; 

app.get('/breweries', async (req, res)=>{
    const apiUrl = `http://api.brewerydb.com/v2/breweries/?key=${apiKey}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);

})

app.get('/beers', async(req,res) => {
    const apiUrl = `http://api.brewerydb.com/v2/beers/?key=${apiKey}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);
})

app.listen(port, () => {
    console.log(`I am listening. ${port}`)
})