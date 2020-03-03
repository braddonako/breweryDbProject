const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

// app.get('/breweries', (req, res)=>{
//     const allBreweries = fetch('http://api.brewerydb.com/v2/beers?key=cff424ceafd1f79ce7f6adfbdeb8c034');
// })

const apiUrl = 'http://api.brewerydb.com/v2/';
const apiKey = process.env.API_KEY;

router.get('/', function (req, res, next) {
 
  const options = {
    params: {
      key: apiKey,
      name: req.query.name || '',
      p: req.query.page || 1,
      sort: req.query.sort || 'ASC',
      order: req.query.order || 'name',
      isOrganic: req.query.isOrganic || '',
      year: req.query.year || '',
      hasLabels: req.query.hasLabels || '',
      styleId: req.query.styleId || ''
    },
    withCredentials: true
  };

  axios.get(`${apiUrl}/beers`, options).then(function (response) {
    res.send(response.data);
  })
});

//Search beers by id
router.get('/:id', function (req, res, next) {
  const options = {
    params: {
      key: apiKey
    },
    withCredentials: true
  }
  axios.get(`${apiUrl}/beer/${req.params.id}`, options).then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(404).send();
    });
});

module.exports = router;

app.listen(port, () => {
    console.log(`I am listening. ${port}`)
})