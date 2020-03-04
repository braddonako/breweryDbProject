import React, { Component } from 'react';
// import { parse } from 'url';

class Breweries extends Component {
    constructor(props){
        super(props);
        this.state = {
            brewery: [],
        }
    }
    componentDidMount(){
       this.getAllBreweries()
    }

    getAllBreweries = async () => {
        try{
            const breweries = await fetch('http:localhost:8000/breweries');
            const parsedBreweries = await breweries.json();
            console.log(parsedBreweries);
            this.setState({
                brewery: parsedBreweries.data[0]
            })
        } catch(err){
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Heya - here are some breweries</h1>
                </div>
                <div className='breweries'>
                    <ul>
                        <li>{this.state.brewery}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Breweries;