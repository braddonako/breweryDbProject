import React, { Component } from 'react';

class Beer extends Component {
    constructor(){
        super();
        this.state = {
            beers: []
        }
    }
    componentDidMount(){
            this.getAllBeers() 
    }

    getAllBeers = async () => {
        try {
            const allBeers = await fetch(process.env.REACT_APP_BACKEND_URL + '/beers');
            // console.log(allBeers)
            const parsedAllBeers = await allBeers.json();
            console.log(parsedAllBeers)
            this.setState ({
                beers: parsedAllBeers.data
            })
        } catch(err){
            console.log(err)
    }
}
    
    render() {
        const beersList = this.state.beers.map((beers)=> {
            console.log(beers)
             return(
                <li key={beers.id}>
                    <span>{beers.name}</span>
                </li>
            )
        })

        return (
            <div>
                <h1>Beer list</h1>
                <ul>{beersList}</ul>
            </div>
        );
    }
}

export default Beer;