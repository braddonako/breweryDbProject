const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch')

const app = express();
require('dotenv').config();


// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.get('/breweries', async (req, res)=>{
    const apiUrl = 'http://api.brewerydb.com/v2/breweries/?key=cff424ceafd1f79ce7f6adfbdeb8c034';
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);

})

app.listen(port, () => {
    console.log(`I am listening. ${port}`)
})