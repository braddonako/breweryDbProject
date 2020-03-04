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
            } catch(err){
                console.log(err)
            }
    }
    
    render() {
        return (
            <div>
                <h1>Beer list</h1>
            </div>
        );
    }
}

export default Beer;