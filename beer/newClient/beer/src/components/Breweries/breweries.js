import React, { Component } from 'react';

class Breweries extends Component {
    constructor(props){
        super(props);
        this.state = {
            allBreweries: []
        }
    }

    componentDidMount() {
        this.getAllBreweries();
    }

    getAllBreweries = async () =>{
        try {
            const allBreweries = await fetch(process.env.REACT_APP_BACKEND_URL + '/breweries', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify()
            });
            // const parsedAllBreweries = await allBreweries.json();
            // console.log('Brewery data -->', parsedAllBreweries);
            console.log(allBreweries)
            // this.setState({
            //     allBreweries: parsedAllBreweries.data
            // })
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