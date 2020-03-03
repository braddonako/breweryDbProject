import React, { Component } from 'react';



class Breweries extends Component {
    constructor(props){
        super(props);
        this.state = {
            breweries: [],
        }
    }

   getAllBreweries = async () => {
       try {
           const breweries = await fetch(`http://localhost:8000/breweries`);
           const parsedBreweries = await breweries.json();
           console.log(parsedBreweries);
           this.setState({
               breweries: parsedBreweries.data.name
           })
       } catch(err){
           console.log(err)
       }
   }

    render() {
        return (
            <div>
                <h1>Heya - here are some breweries</h1>
            </div>
        );
    }
}

export default Breweries;