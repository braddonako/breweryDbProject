import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'

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
        
        const beersList = this.state.beers.map((beers) => {
            console.log(beers.glass)
             return(
                <Card style={{ width: '30rem' }} key={beers.id}>
                    <Card.Img variant="top" src={"holder.js/100px180"} />
                    <Card.Body>
                        <Card.Title>{beers.name}</Card.Title>
                        <Card.Text>
                            {beers.description}
                        </Card.Text>
                        <Button variant="primary">More info</Button>
                    </Card.Body>
                </Card>
                
                




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