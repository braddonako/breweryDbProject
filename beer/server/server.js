const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch')
const mongoose = require('mongoose')

const app = express();
require('dotenv').config();


mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


const apiKey = process.env.API_KEY; 

//-------------------------///
        //MODELS//
//-------------------------///

const{Breweries} = require('./models/breweries')

app.get('/', (req, res) => { // testing out the initial route
    res.send('Your mama')
})
 
// grabbng all of the beers in breweryDB
app.get('/breweries', async (req, res)=>{
    // hiding apiKey in .env file. I am running off of the local server,
    // but am retrieving the data from breweryDB

    const apiUrl = `http://api.brewerydb.com/v2/breweries/?key=${apiKey}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    // turning the response from breweryDB data to JSON
    res.send(json)
    console.log(json);
    // checking json in the terminal
})

app.get('/beers', async(req,res) => {
    const apiUrl = `http://api.brewerydb.com/v2/beers/?key=${apiKey}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    res.send(json)
    console.log(json);
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`I am listening. ${port}`)
})