import React, { Component } from 'react';

class Breweries extends Component {
    constructor(props){
        super(props);
        this.state = {
            allBreweries: []
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