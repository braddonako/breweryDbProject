import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
// import BreweryBeers from './components/BreweryBeersContainer/breweryBeers';

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

    // retrieving all of the breweries from brewerydb.
    getAllBreweries = async () =>{
        try {
            const allBreweries = await fetch(process.env.REACT_APP_BACKEND_URL + '/breweries');
            // console.log(allBreweries)
            const parsedAllBreweries = await allBreweries.json();
            console.log(parsedAllBreweries.data.length, '<-- brewery data');
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
            // console.log(breweries.id);
        
            const myImage = [];
               if (breweries.images === undefined) {
                   console.log('a ha ha')
               } else {
                // console.log(breweries.images.medium)
                    // adding image to the array so I can display it on the page
                   myImage.push(breweries.images.medium)
                   
                //    console.log(myImage)
               }
        //    console.log(myImage)
        
            return(
            <Card style={{ width: '37.5rem', display: 'flex', flexWrap: 'wrap'}} className='card' key={breweries.id}>
                <Card.Img variant="top" src={myImage} style={{height: '150px', width: '300px'}}/>
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
                <div>
                    <h1 className='breweriesHeader'>BREWERIES</h1>
                </div>
                <div>
                    <ul className='breweriesList'>{breweriesList}</ul>
                </div>
                
            </div>
            
        );
    }
}

export default Breweries;