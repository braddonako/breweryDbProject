import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'

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
            <Card style={{ width: '37.5rem' }} className='card' key={breweries.id}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{breweries.name}</Card.Title>
                    <Card.Text>
                    {breweries.description}
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
            )
            

        })

        return (
            <div>
                <h1 className='breweriesHeader'>BREWERIES</h1>
                <ul className='breweriesList'>{breweriesList}</ul>
            </div>
            
        );
    }
}

export default Breweries;