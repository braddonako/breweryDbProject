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
        // 
        const breweriesList = this.state.breweries.map((breweries) => {
            // console.log(breweries.images.medium);
            const myImage = [];
               if (breweries.images === undefined) {
                   console.log('fuck')
               } else {
                //    console.log(breweries.images.medium)
                   myImage.push(breweries.images.medium)
                //    console.log(myImage)
               }
           console.log(myImage)
        
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