import React, { Component } from 'react';

class Breweries extends Component {
    constructor(props){
        super(props);
        this.state = {
            breweries: []
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
            // console.log(parsedAllBreweries, '<-- brewery data');
            // console.log(allBreweries)
            this.setState({
                breweries: parsedAllBreweries.data
            })
        } catch(err){
            console.log(err)
        }
    }

    render() {
        const breweriesList = this.state.breweries.map((breweries) => {
            console.log(breweries);
            return(
                <li key={breweries.id}>
                    <span>{breweries.name}
                    </span>
                </li>
            )
        })

        return (
            <div>
                <h1>Breweries list</h1>
                <ul>{breweriesList}</ul>
            </div>
            
        );
    }
}

export default Breweries;