import React, { Component } from 'react';

class Breweries extends Component {
    constructor(props){
        super(props);
        this.state = {
            breweries: {}
        }
    }

    componentDidMount() {
        this.getAllBreweries();
    }

    getAllBreweries = async () =>{
        try {
            const allBreweries = await fetch(process.env.REACT_APP_BACKEND_URL + '/breweries');
            // console.log(allBreweries)
            const parsedAllBreweries = await allBreweries.json();
            console.log('Brewery data -->', parsedAllBreweries);
            // console.log(allBreweries)
            this.setState({
                breweries: parsedAllBreweries
            })
        } catch(err){
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>List of all Breweries</h1>
            </div>
        );
    }
}

export default Breweries;