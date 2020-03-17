import React, { Component } from 'react';
import Breweries from './components/BreweriesContainer/breweries'

class BreweryBeers extends Component {

    componentDidMount(){
        Breweries.getAllBreweries()
    }

    getBreweryBeers = async () => {
        try {
            const breweryBeers = await fetch(process.env.REACT_APP_BACKEND_URL + '/breweryBeers');
            console.log(breweryBeers)
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div>
                <h1>Hey</h1>
            </div>
        );
    }
}

export default BreweryBeers;