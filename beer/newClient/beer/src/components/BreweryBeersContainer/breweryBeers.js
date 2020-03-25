import React, { Component } from 'react';
// import Breweries from './components/BreweriesContainer/breweries'

class BreweryBeers extends Component {

    // componentDidMount(){
    //     this.getBreweryBeers()
    //     console.log(this.getBreweryBeers())
    // }

    // getBreweryBeers = async () => {
    //     try {
    //         const breweryBeers = await fetch(process.env.REACT_APP_BACKEND_URL + '/breweryBeers');
    //         // console.log(breweryBeers, 'here is the log');
    //         const parsedBreweryBeers = await breweryBeers.json();
    //         console.log(parsedBreweryBeers.data, 'data')
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    render() {
        return (
            <div>
                <h1>Hey</h1>
            </div>
        );
    }
}

export default BreweryBeers;