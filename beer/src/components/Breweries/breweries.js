import React, { Component } from 'react';

class Breweries extends Component {
    constructor(){
    super();
    this.state = {
        beers: []
    }
}

    componentDidMount() {
        fetch('http://api.brewerydb.com/v2/breweries?key=cff424ceafd1f79ce7f6adfbdeb8c034')
        .then(res => res.json())
        .then((data) => {
        this.setState({ beers: data })
    }) 
    .catch(console.log)
}
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Breweries;