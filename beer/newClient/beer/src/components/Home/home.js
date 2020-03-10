import React from 'react';
import {Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
        {/* <div>
            <h1>This is the home page for my BreweryDB app</h1>
            <p>Some cool stuff will go here yeee yeee</p>
        </div> */}
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/gWbL7jP.jpg slide&bg=373940"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Welcome to the Brads Brew DB!</h3>
                <p>Please take the time to review and add beers that you enjoyed to our database.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/U0AZF1E.jpg slide&bg=282c34"
                alt="Third slide"
                />

                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.imgur.com/5M91U03.jpg slide&bg=20232a"
                alt="Third slide"
                />

                {/* <Carousel.Caption> */}
                {/* <h3 style={{color: 'black'}}>Third slide label</h3>
                <p style={{color: 'black'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                {/* </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
        </div>
        </div>
    );
};

export default Home;